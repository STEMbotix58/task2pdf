import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const SafetyInformationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const safetyInformation = useUserManualStore(
    (state) => state.safetyInformation,
  );
  const setSection = useUserManualStore((state) => state.setSection);

  const [formData, setFormData] = useState(safetyInformation);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = async (files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/safety-information/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      handleChange("images", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("safetyInformation", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Safety Information"
        subtitle="Include important safety guidelines and warnings."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Content */}
          <TextareaInput
            label="Safety Content"
            rows={8}
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Include warnings, precautions, and safety guidelines..."
            maxLength={2500}
            required
          />

          {/* Images */}
          <ImageUploadField
            label="Safety Icons/Images"
            value={formData.images || []}
            onChange={handleImageChange}
            maxSelection={5}
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

export default SafetyInformationForm;
