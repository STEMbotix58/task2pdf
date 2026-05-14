import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const IntroductionForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const introduction = useUserManualStore((state) => state.introduction);
  const setSection = useUserManualStore((state) => state.setSection);

  const [formData, setFormData] = useState(introduction);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = async (files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/introduction/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      handleChange("images", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("introduction", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Introduction"
        subtitle="Provide an introduction for your user manual."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Content */}
          <TextareaInput
            label="Introduction Content"
            rows={6}
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Write an engaging introduction to your manual..."
            maxLength={2000}
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

export default IntroductionForm;
