import React, { useState } from "react";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const SummaryForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const summary = useFLPStore((state) => state.summary);
  const setSection = useFLPStore((state) => state.setSection);
  const [formData, setFormData] = useState(summary);
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

      const folderName = "flp-report/summary";

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
    setSection("summary", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Executive Summary"
        subtitle="Provide Financial Literacy Report Summary"
      />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Summary Description"
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
              maxLength={900}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Summary Image"
              id="summaryImg"
              name="summaryImg"
              value={formData.summaryImg || []}
              onChange={(files) => handleImageUpload("summaryImg", files)}
              maxSelection={1}
              required={formData.summaryImg.length > 0 ? false : true}
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

export default SummaryForm;
