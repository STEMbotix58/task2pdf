import React, { useState } from "react";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const ImpactAnalysisForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const impactAnalysis = useFLPStore((state) => state.impactAnalysis);
  const setSection = useFLPStore((state) => state.setSection);
  const [formData, setFormData] = useState(impactAnalysis);

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

      //   handleChange(field, urls); // ✅ store URLs, not files
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("impactAnalysis", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Impact Analysis"
        subtitle="Provide Financial Literacy Report "
      />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Objective"
              id="objective"
              name="objective"
              rows={4}
              value={formData.objective}
              onChange={(e) => handleChange("objective", e.target.value)}
              required
              maxLength={600}
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Student Learning Description"
              id="studentLearning"
              name="studentLearning"
              rows={4}
              value={formData.studentLearning}
              onChange={(e) => handleChange("studentLearning", e.target.value)}
              required
              maxLength={335}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Student Learning Image"
              id="studentLearningImg"
              name="studentLearningImg"
              value={formData.studentLearningImg || []}
              onChange={(files) =>
                handleImageUpload("studentLearningImg", files)
              }
              maxSelection={1}
              required={formData.studentLearningImg.length > 0 ? false : true}
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Behavioral Change Description"
              id="behavioralChange"
              name="behavioralChange"
              rows={4}
              value={formData.behavioralChange}
              onChange={(e) => handleChange("behavioralChange", e.target.value)}
              required
              maxLength={335}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Behavioral Change Image"
              id="behavioralChangeImg"
              name="behavioralChangeImg"
              value={formData.behavioralChangeImg || []}
              onChange={(files) =>
                handleImageUpload("behavioralChangeImg", files)
              }
              maxSelection={1}
              required={formData.behavioralChangeImg.length > 0 ? false : true}
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Digital & Financial Awareness Description"
              id="digitalFinancialAwareness"
              name="digitalFinancialAwareness"
              rows={4}
              value={formData.digitalFinancialAwareness}
              onChange={(e) =>
                handleChange("digitalFinancialAwareness", e.target.value)
              }
              required
              maxLength={335}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Digital & Financial Awareness Image"
              id="digitalFinancialAwarenessImg"
              name="digitalFinancialAwarenessImg"
              value={formData.digitalFinancialAwarenessImg || []}
              onChange={(files) =>
                handleImageUpload("digitalFinancialAwarenessImg", files)
              }
              maxSelection={1}
              required={
                formData.digitalFinancialAwarenessImg.length > 0 ? false : true
              }
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Digital Learning Adoption Description"
              id="digitalLearningAdoption"
              name="digitalLearningAdoption"
              rows={4}
              value={formData.digitalLearningAdoption}
              onChange={(e) =>
                handleChange("digitalLearningAdoption", e.target.value)
              }
              required
              maxLength={335}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Digital Learning Adoption Image"
              id="digitalLearningAdoptionImg"
              name="digitalLearningAdoptionImg"
              value={formData.digitalLearningAdoptionImg || []}
              onChange={(files) =>
                handleImageUpload("digitalLearningAdoptionImg", files)
              }
              maxSelection={1}
              required={
                formData.digitalLearningAdoptionImg.length > 0 ? false : true
              }
            />
          </div>
          <div className="md:col-span-2">
            <TextareaInput
              label="Community Engagement Description"
              id="communityEngagement"
              name="communityEngagement"
              rows={4}
              value={formData.communityEngagement}
              onChange={(e) =>
                handleChange("communityEngagement", e.target.value)
              }
              required
              maxLength={335}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Community Engagement Image"
              id="communityEngagementImg"
              name="communityEngagementImg"
              value={formData.communityEngagementImg || []}
              onChange={(files) =>
                handleImageUpload("communityEngagementImg", files)
              }
              maxSelection={1}
              required={
                formData.communityEngagementImg.length > 0 ? false : true
              }
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

export default ImpactAnalysisForm;
