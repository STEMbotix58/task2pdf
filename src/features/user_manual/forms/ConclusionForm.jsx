import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const ConclusionForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const conclusion = useUserManualStore((state) => state.conclusion);
  const setSection = useUserManualStore((state) => state.setSection);
  const [formData, setFormData] = useState(conclusion);
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = async (files) => {
    if (!files || files.length === 0) return;

    try {
      setUploading(true);
      const folderName = "user-manual/conclusion/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      handleChange("images", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("conclusion", formData);
  };

  return (
    <FormContainer>
      <FormHeader
        title="Conclusion"
        subtitle="Provide closing remarks and next steps."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Content */}
          <TextareaInput
            label="Conclusion Content"
            rows={6}
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Summarize the manual and provide next steps..."
            maxLength={1500}
          />

          {/* Images */}
          <ImageUploadField
            label="Images"
            value={formData.images || []}
            onChange={handleImageChange}
            maxSelection={3}
          />
        </div>

        <div className="mt-10">
          <ButtonGroup
            prevStep={prevStep}
            nextStep={nextStep}
            generatePDF={() => {
              setSection("conclusion", formData);
              generatePDF();
            }}
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
