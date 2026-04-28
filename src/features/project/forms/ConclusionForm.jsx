import React, { useState } from "react";
import { useProjectStore } from "@/features/project/model/projectStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const ConclusionForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const conclusion = useProjectStore((state) => state.conclusion);
  const setSection = useProjectStore((state) => state.setSection);
  const [formData, setFormData] = useState(conclusion);
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

      const folderName = "kadi-report/conclusion" + Date.now();

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
    setSection("conclusion", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Conclusion" subtitle="Provide project conclusion." />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Conclusion Description"
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
              label="Conclusion Image"
              id="conclusionImg"
              name="conclusionImg"
              value={formData.conclusionImg || []}
              onChange={(files) => handleImageUpload("conclusionImg", files)}
              maxSelection={1}
              required={formData.conclusionImg.length > 0 ? false : true}
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

export default ConclusionForm;
