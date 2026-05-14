import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import Input from "@/shared/components/ui/Input";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const CoverPageForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const coverPage = useUserManualStore((state) => state.coverPage);
  const setSection = useUserManualStore((state) => state.setSection);

  const [formData, setFormData] = useState(coverPage);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = async (files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/cover-page/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      handleChange("logo", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("coverPage", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Cover Page"
        subtitle="Configure the cover page details for your user manual."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="md:col-span-2">
            <Input
              label="Title"
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="e.g., STEM Kit User Manual"
              required
            />
          </div>

          {/* Subtitle */}
          <div className="md:col-span-2">
            <Input
              label="Subtitle"
              type="text"
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) => handleChange("subtitle", e.target.value)}
              placeholder="e.g., Getting Started Guide"
            />
          </div>

          {/* Logo */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Logo"
              value={formData.logo || []}
              onChange={handleImageChange}
              maxSelection={1}
            />
          </div>

          {/* Date */}
          <Input
            label="Date"
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />

          {/* Version */}
          <Input
            label="Version"
            type="text"
            id="version"
            value={formData.version}
            onChange={(e) => handleChange("version", e.target.value)}
            placeholder="e.g., 1.0"
          />

          {/* Company Name */}
          <div className="md:col-span-2">
            <Input
              label="Company Name"
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder="e.g., STEMbotix"
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

export default CoverPageForm;
