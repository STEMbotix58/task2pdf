import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const PrefaceForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const preface = useStemLabStore((state) => state.preface);
  const setSection = useStemLabStore((state) => state.setSection);

  const [formData, setFormData] = useState(preface);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      setUploading(true);

      const folderName = "stemlab-report/preface-" + Date.now();

      const urls = await uploadImagesToCloudinary(files, folderName);

      handlePrefaceChange(index, "image", urls);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handlePrefaceChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedPreface = [...prev];

      updatedPreface[index] = {
        ...updatedPreface[index],
        [field]: value,
      };

      return updatedPreface;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("preface", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Preface" subtitle="Provide preface details." />
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="md:col-span-2">
              <TextareaInput
                label={`Preface Info - ${i + 1}`}
                id={`description-${i}`}
                name={`description-${i}`}
                value={formData?.[i]?.description || ""}
                onChange={(e) =>
                  handlePrefaceChange(i, "description", e.target.value)
                }
                maxLength={200}
                required
              />

              <ImageUploadField
                id={`prefaceImage-${i}`}
                name={`prefaceImage-${i}`}
                value={formData?.[i]?.image || []} // ✅ always array
                onChange={(files) => handleImageUpload(i, files)} // ✅ FIXED
                maxSelection={1}
                required={(formData?.[i]?.image || []).length === 0}
              />
            </div>
          ))}
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

export default PrefaceForm;
