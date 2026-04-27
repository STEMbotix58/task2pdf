import React, { useState } from "react";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const ImplementationAndDeliveryForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const implementationAndDelivery = useFLPStore(
    (state) => state.implementationAndDelivery,
  );
  const setSection = useFLPStore((state) => state.setSection);
  const [formData, setFormData] = useState(implementationAndDelivery);
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = async (field, files) => {
    try {
      setUploading(true);

      const folderName = "flp-report/implementation-and-delivery" + Date.now();

      const urls = await uploadImagesToCloudinary(files, folderName);

      handleChange(field, urls);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("implementationAndDelivery", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Program Implementation & Delivery"
        subtitle="Provide Financial Literacy Report Objective"
      />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Description"
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              minParagraph={4}
              maxLength={2000}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Implementation And Delivery Image"
              id="implementationAndDeliveryImg"
              name="implementationAndDeliveryImg"
              value={formData.implementationAndDeliveryImg || []}
              onChange={(files) =>
                handleImageUpload("implementationAndDeliveryImg", files)
              }
              maxSelection={7}
              required={
                formData.implementationAndDeliveryImg.length > 0 ? false : true
              }
            />
          </div>
        </div>
        <div className="mt-10">
          <ButtonGroup
            prevStep={prevStep}
            nextStep={nextStep}
            generatePDF={generatePDF}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isGenerating={isGenerating}
          />
        </div>
      </form>
    </FormContainer>
  );
};

export default ImplementationAndDeliveryForm;
