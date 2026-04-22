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

  const handleImageUpload = async (index, files) => {
    try {
      //   const folderName = "preface-" + Date.now();
      //   const urls = await uploadImagesToCloudinary(files, folderName);
      //   handlePrefaceChange(index, "image", urls[0]);
      console.log("Uploaded");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
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
          <div className="md:col-span-2">
            {/* Preface 1 */}
            <TextareaInput
              label="Preface Info - One"
              id="description-0"
              name="description-0"
              value={formData?.[0]?.description}
              onChange={(e) =>
                handlePrefaceChange(0, "description", e.target.value)
              }
              required
            />

            <ImageUploadField
              id="prefaceImage-0"
              name="prefaceImage-0"
              value={formData?.[0]?.image}
              onChange={(files) => handlePrefaceChange(0, "image", files)}
              maxSelection={1}
            />
          </div>
          <div className="md:col-span-2">
            {/* Preface 2 */}
            <TextareaInput
              label="Preface Info - Two"
              id="description-1"
              name="description-1"
              value={formData?.[1]?.description}
              onChange={(e) =>
                handlePrefaceChange(1, "description", e.target.value)
              }
              required
            />

            <ImageUploadField
              id="prefaceImage-1"
              name="prefaceImage-1"
              value={formData?.[1]?.image}
              onChange={(files) => handlePrefaceChange(1, "image", files)}
              maxSelection={1}
            />
          </div>
          <div className="md:col-span-2">
            {/* Preface 3 */}
            <TextareaInput
              label="Preface Info - Three"
              id="description-2"
              name="description-2"
              value={formData?.[2]?.description}
              onChange={(e) =>
                handlePrefaceChange(2, "description", e.target.value)
              }
              required
            />

            <ImageUploadField
              id="prefaceImage-2"
              name="prefaceImage-2"
              value={formData?.[2]?.image}
              onChange={(files) => handlePrefaceChange(2, "image", files)}
              maxSelection={1}
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

export default PrefaceForm;
