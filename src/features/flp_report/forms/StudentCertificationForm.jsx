import React, { useState } from "react";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const StudentCertificationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const studentCertification = useFLPStore(
    (state) => state.studentCertification,
  );
  const setSection = useFLPStore((state) => state.setSection);
  const [formData, setFormData] = useState(studentCertification);

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
    setSection("studentCertification", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Student Certification"
        subtitle="Provide Financial Literacy Report Objective"
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
              maxLength={800}
            />
          </div>
          <div className="md:col-span-2">
            <ImageUploadField
              label="Student Certification Image"
              id="studentCertificationImg"
              name="studentCertificationImg"
              value={formData.studentCertificationImg || []}
              onChange={(files) =>
                handleImageUpload("studentCertificationImg", files)
              }
              maxSelection={2}
              required={
                formData.studentCertificationImg.length > 0 ? false : true
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

export default StudentCertificationForm;
