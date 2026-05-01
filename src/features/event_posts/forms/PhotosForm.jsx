import React, { useState } from "react";
import { useEventPostsStore } from "@/features/event_posts/model/eventPostsStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const PhotosForm = ({
  prevStep,
  nextStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const photos = useEventPostsStore((state) => state.photos);
  const setSection = useEventPostsStore((state) => state.setSection);

  const [formData, setFormData] = useState(() => [...(photos || [])]);
  const [uploading, setUploading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData || formData.length === 0) {
      alert("Please upload at least one photograph.");
      return;
    }

    try {
      setUploading(true);

      // Upload images to Cloudinary

      const folderName = "event_posts/photos" + Date.now();

      const uploadedUrls = await uploadImagesToCloudinary(
        formData.map((item) => item.file || item),
        folderName,
      );
      // Save URLs instead of File objects
      setSection("photos", uploadedUrls);

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
      <FormHeader
        title="Photographs"
        subtitle="Upload visual documentation of the project implementation."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <ImageUploadField
          value={formData}
          onChange={setFormData}
          required={photos.length > 0 ? false : true}
          minSelection={1}
          maxSelection={40}
          id="photos"
          name="photos"
        />

        <ButtonGroup
          prevStep={prevStep}
          nextStep={nextStep}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating || uploading}
        />
      </form>
    </FormContainer>
  );
};

export default PhotosForm;
