import React, { useState } from "react";
import { useStemLabStore } from "../model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const ChallengesAndMitigationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const challengesAndMitigation = useStemLabStore(
    (state) => state.challengesAndMitigation,
  );
  const setSection = useStemLabStore((state) => state.setSection);

  const [formData, setFormData] = useState(challengesAndMitigation);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = async (field, files) => {
    try {
      // Remove this when uploading to cloudinary
      handleChange(field, files);
      //   setUploading(true);

      //   const folderName = "project-" + Date.now();

      //   const urls = await uploadImagesToCloudinary(files, folderName);

      //   handleChange(field, urls); // ✅ store URLs, not files
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("challengesAndMitigation", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Challenges And Mitigation Strategies"
        subtitle="Provide STEMLab Report Challenges And Mitigation Strategies."
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
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Challenges Image"
              id="challengesImg"
              name="challengesImg"
              value={formData.challengesImg || []}
              onChange={(files) => handleImageUpload("challengesImg", files)}
              maxSelection={1}
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

export default ChallengesAndMitigationForm;
