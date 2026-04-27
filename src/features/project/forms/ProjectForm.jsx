import React, { useState } from "react";
import { useProjectStore } from "@/features/project/model/projectStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import TextareaInput from "@/shared/components/ui/TextareaInput";

const ProjectForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const project = useProjectStore((state) => state.project);
  const setSection = useProjectStore((state) => state.setSection);

  const [formData, setFormData] = useState(project);
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProjectImageUpload = async (files) => {
    try {
      setUploading(true);

      const urls = await uploadImagesToCloudinary(
        files,
        "project-image-" + Date.now(),
      );

      handleChange("image", urls);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // handle array inputs (comma separated)
  const handleArrayChange = (field, value) => {
    const arrayValue = value.split(",").map((item) => item.trim());
    handleChange(field, arrayValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("project", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Project Information"
        subtitle="Provide general project details."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TITLE */}
          <div className="md:col-span-2">
            <Input
              label="Project Title"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
              maxLength={50}
            />
          </div>

          {/* OVERVIEW */}
          <div className="md:col-span-2">
            <TextareaInput
              label="Overview"
              id="overview"
              name="overview"
              rows={4}
              value={formData.overview}
              onChange={(e) => handleChange("overview", e.target.value)}
              required
              maxLength={540}
            />
          </div>

          {/* IMPLEMENTATION */}
          <div className="md:col-span-2">
            <TextareaInput
              label="Implementation"
              id="implementation"
              name="implementation"
              rows={4}
              value={formData.implementation}
              onChange={(e) => handleChange("implementation", e.target.value)}
              required
              maxLength={400}
            />
          </div>

          {/* OUTCOMES */}
          <div className="md:col-span-2">
            <TextareaInput
              label="Outcomes Impact"
              id="outcomesImpact"
              name="outcomesImpact"
              rows={4}
              value={formData.outcomesImpact}
              onChange={(e) => handleChange("outcomesImpact", e.target.value)}
              required
              maxLength={400}
            />
          </div>

          <Input
            label="Robotics Kits (comma separated)"
            id="roboticsKits"
            name="roboticsKits"
            value={formData.roboticsKits.join(", ")}
            onChange={(e) => handleArrayChange("roboticsKits", e.target.value)}
            required
            maxLength={100}
          />

          <Input
            label="Hardware (comma separated)"
            id="hardware"
            name="hardware"
            value={formData.hardware.join(", ")}
            onChange={(e) => handleArrayChange("hardware", e.target.value)}
            required
            maxLength={100}
          />

          <Input
            label="Software (comma separated)"
            id="software"
            name="software"
            value={formData.software.join(", ")}
            onChange={(e) => handleArrayChange("software", e.target.value)}
            required
            maxLength={100}
          />

          <Input
            label="Infrastructure (comma separated)"
            id="infrastructure"
            name="infrastructure"
            value={formData.infrastructure.join(", ")}
            onChange={(e) =>
              handleArrayChange("infrastructure", e.target.value)
            }
            required
            maxLength={100}
          />

          {/* AMOUNT */}
          <Input
            type="number"
            label="Project Amount"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={(e) => handleChange("amount", Number(e.target.value))}
            required
          />

          {/* IMAGE */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Project Image"
              id="image"
              name="image"
              value={formData.image || []}
              onChange={handleProjectImageUpload}
              maxSelection={1}
              required={formData.image.length > 0 ? false : true}
            />
          </div>
        </div>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={nextStep}
          generatePDF={generatePDF}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating}
        />
      </form>
    </FormContainer>
  );
};

export default ProjectForm;
