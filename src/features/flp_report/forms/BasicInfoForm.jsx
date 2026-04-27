import React, { useState } from "react";
import { useFLPStore } from "../model/flpReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import TextareaInput from "@/shared/components/ui/TextareaInput";

const BasicInfoForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const basicInfo = useFLPStore((state) => state.basicInfo);
  const setSection = useFLPStore((state) => state.setSection);

  const [formData, setFormData] = useState(basicInfo);
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = async (field, files) => {
    try {
      setUploading(true);

      const folderName = "flp-report/basic-info";

      const urls = await uploadImagesToCloudinary(files, folderName);

      handleChange(field, urls);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("basicInfo", formData);
    nextStep();
  };

  const handlePartnerChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedPartners = [...(prev.partners || [])];

      updatedPartners[index] = {
        ...updatedPartners[index],
        [field]: value,
      };

      return {
        ...prev,
        partners: updatedPartners,
      };
    });
  };

  return (
    <FormContainer>
      <FormHeader
        title="Basic Information"
        subtitle="Provide general project details."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Input
              label="Project Title"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={(e) => handleChange("projectTitle", e.target.value)}
              required
              maxLength={25}
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Objective"
              id="objective"
              name="objective"
              value={formData.objective}
              onChange={(e) => handleChange("objective", e.target.value)}
              required
              maxLength={220}
            />
          </div>
          <div className="md:col-span-2">
            <Input
              label="Partner Info - One"
              id="title"
              name="title"
              value={formData.partners?.[0]?.title || ""}
              onChange={(e) => handlePartnerChange(0, "title", e.target.value)}
              required
              maxLength={40}
            />
            <TextareaInput
              id="description"
              name="description"
              value={formData.partners?.[0]?.description || ""}
              onChange={(e) =>
                handlePartnerChange(0, "description", e.target.value)
              }
              required
              maxLength={300}
            />
          </div>
          <div className="md:col-span-2">
            <Input
              label="Partner Info - Two"
              id="title"
              name="title"
              value={formData.partners?.[1]?.title || ""}
              onChange={(e) => handlePartnerChange(1, "title", e.target.value)}
              required
              maxLength={40}
            />
            <TextareaInput
              id="description"
              name="description"
              value={formData.partners?.[1]?.description || ""}
              onChange={(e) =>
                handlePartnerChange(1, "description", e.target.value)
              }
              required
              maxLength={300}
            />
          </div>
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
