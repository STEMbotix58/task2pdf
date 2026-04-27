import React, { useState } from "react";
import { useStemLabStore } from "../model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const StrengthsForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const strengths = useStemLabStore((state) => state.strengths);

  const setSection = useStemLabStore((state) => state.setSection);
  const [formData, setFormData] = useState(strengths);
  // const paraLength = formData?.description.split("\n").length;
  // console.log(paraLength);
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
    setSection("strengths", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Strengths"
        subtitle="Provide  STEMLab Report Outcomes."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Description"
              id="description"
              name="description"
              rows={4}
              minParagraph={3}
              maxLength={1100}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Strengths Image"
              id="strengthsImg"
              name="strengthsImg"
              value={formData.strengthsImg || []}
              onChange={(files) => handleImageUpload("strengthsImg", files)}
              maxSelection={1}
              required={formData.strengthsImg.length > 0 ? false : true}
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

export default StrengthsForm;
