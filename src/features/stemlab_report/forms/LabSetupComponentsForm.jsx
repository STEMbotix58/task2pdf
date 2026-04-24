import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import Input from "@/shared/components/ui/Input";

const LabSetupComponentsForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const labSetupAndComponents = useStemLabStore(
    (state) => state.labSetupAndComponents,
  );
  const setSection = useStemLabStore((state) => state.setSection);
  const [formData, setFormData] = useState(labSetupAndComponents);

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
    setSection("labSetupAndComponents", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Lab Setup & Components"
        subtitle="Provide STEMLab Report Project."
      />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Description One"
              minParagraph={3}
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              maxLength={1200}
              required
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Lab Setup Images"
              id="labImg"
              name="labImg"
              value={formData.labImg || []}
              onChange={(files) => handleImageUpload("labImg", files)}
              maxSelection={2}
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

export default LabSetupComponentsForm;
