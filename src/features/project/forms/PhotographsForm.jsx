import React, { useState } from "react";
import { useProjectStore } from "@/features/project/model/projectStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const PhotographsForm = ({
  prevStep,
  nextStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const storePhotographs = useProjectStore((s) => s.photographs);
  const setSection = useProjectStore((s) => s.setSection);

  const [formData, setFormData] = useState(storePhotographs || []);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.length) {
      alert("Upload at least one photograph.");
      return;
    }

    try {
      setUploading(true);

      // Upload images to Cloudinary

      const folderName = "kadi-report/photographs" + Date.now();

      const uploadedUrls = await uploadImagesToCloudinary(
        formData.map((item) => item.file || item),
        folderName,
      );
      // Save URLs instead of File objects
      setSection("photographs", uploadedUrls);

      if (isLastStep) {
        generatePDF();
      } else {
        nextStep();
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <FormContainer>
      <FormHeader title="Photographs" subtitle="Upload project images." />

      <form onSubmit={handleSubmit} className="space-y-8">
        <ImageUploadField
          label="Project Photographs"
          value={formData}
          onChange={setFormData}
          required={storePhotographs.length > 0 ? false : true}
          minSelection={1}
          maxSelection={8}
          id="photographs"
          name="photographs"
        />

        <ButtonGroup
          prevStep={prevStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating || uploading}
        />
      </form>
    </FormContainer>
  );
};

export default PhotographsForm;
