import React, { useState } from "react";
import { useStemLabStore } from "../model/stemLabReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const BasicInfoForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const basicInfo = useStemLabStore((state) => state.basicInfo);
  const setSection = useStemLabStore((state) => state.setSection);

  const [formData, setFormData] = useState(basicInfo);

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

      //   const folderName = "basic-info-" + Date.now();

      //   const urls = await uploadImagesToCloudinary(files, folderName);

      //   handleChange(field, urls);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("basicInfo", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Basic Information"
        subtitle="Provide general project details."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Title */}
          <div className="md:col-span-2">
            <Input
              label="Project Title"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              required
              maxLength={17}
              onChange={(e) => handleChange("projectTitle", e.target.value)}
            />
          </div>

          {/* STEM Logo */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="STEM Logo"
              id="stemLogo"
              name="stemLogo"
              value={formData.stemLogo || []}
              onChange={(files) => handleImageUpload("stemLogo", files)}
              maxSelection={1}
              required={formData.stemLogo.length > 0 ? false : true}
            />
          </div>

          {/* Prepared By Logo */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Prepared By Logo"
              id="preparedBy"
              name="preparedBy"
              value={formData.preparedBy || []}
              onChange={(files) => handleImageUpload("preparedBy", files)}
              maxSelection={1}
              required={formData.preparedBy.length > 0 ? false : true}
            />
          </div>

          {/* Partner Logo */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Partner Logo"
              id="partnerLogo"
              name="partnerLogo"
              value={formData.partnerLogo || []}
              onChange={(files) => handleImageUpload("partnerLogo", files)}
              maxSelection={1}
              required={formData.partnerLogo.length > 0 ? false : true}
            />
          </div>

          {/* Home Images */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Home Images"
              id="homeImages"
              name="homeImages"
              value={formData.homeImages || []}
              onChange={(files) => handleImageUpload("homeImages", files)}
              maxSelection={2}
              required={formData.homeImages.length > 0 ? false : true}
            />
          </div>

          {/* Back Page Images */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="Back Page Images"
              id="backPageImages"
              name="backPageImages"
              value={formData.backPageImages || []}
              onChange={(files) => handleImageUpload("backPageImages", files)}
              maxSelection={2}
              required={formData.backPageImages.length > 0 ? false : true}
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

export default BasicInfoForm;
