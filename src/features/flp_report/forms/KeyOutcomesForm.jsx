import React, { useState } from "react";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const KeyOutcomesForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const keyOutcomes = useFLPStore((state) => state.keyOutcomes);
  const setSection = useFLPStore((state) => state.setSection);
  const [formData, setFormData] = useState(keyOutcomes);
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

      const folderName = "flp-report/key-outcomes" + Date.now();

      const urls = await uploadImagesToCloudinary(files, folderName);

      handleChange(field, urls); // ✅ store URLs, not files
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("keyOutcomes", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Key Outcomes"
        subtitle="Provide Financial Literacy Report "
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
              maxLength={1080}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Outcomes Image"
              id="keyOutcomesImg"
              name="keyOutcomesImg"
              value={formData.keyOutcomesImg || []}
              onChange={(files) => handleImageUpload("keyOutcomesImg", files)}
              maxSelection={2}
              required={formData.keyOutcomesImg.length > 0 ? false : true}
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

export default KeyOutcomesForm;
