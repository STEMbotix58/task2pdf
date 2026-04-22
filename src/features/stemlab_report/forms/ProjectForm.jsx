import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import Input from "@/shared/components/ui/Input";

const ProjectForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const project = useStemLabStore((state) => state.project);
  const setSection = useStemLabStore((state) => state.setSection);
  const [formData, setFormData] = useState(project);

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
    setSection("project", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Project" subtitle="Provide STEMLab Report Project." />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Project Objective"
              id="objective"
              name="objective"
              rows={4}
              value={formData.objective}
              onChange={(e) => handleChange("objective", e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Project Description"
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
              label="Project Images"
              id="projectImg"
              name="projectImg"
              value={formData.projectImg || []}
              onChange={(files) => handleImageUpload("projectImg", files)}
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

export default ProjectForm;
