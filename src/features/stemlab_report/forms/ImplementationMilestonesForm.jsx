import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import Input from "@/shared/components/ui/Input";

const ImplementationMilestonesForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const implementationAndMilestones = useStemLabStore(
    (state) => state.implementationAndMilestones,
  );
  const setSection = useStemLabStore((state) => state.setSection);
  const [formData, setFormData] = useState(implementationAndMilestones);
  const [uploading, setUploading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // implementationAndMilestones: { description: "", implementationImg: [] },

  const handleImageUpload = async (field, files) => {
    try {
      setUploading(true);

      const folderName =
        "stemlab-report/implementation-milestones" + Date.now();

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
    setSection("implementationAndMilestones", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Implementation And Milestones"
        subtitle="Provide STEMLab Report Project."
      />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Description"
              minParagraph={4}
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              maxLength={1100}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Implementation Images"
              id="implementationImg"
              name="implementationImg"
              value={formData.implementationImg || []}
              onChange={(files) =>
                handleImageUpload("implementationImg", files)
              }
              maxSelection={2}
              required={formData.implementationImg.length > 0 ? false : true}
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

export default ImplementationMilestonesForm;
