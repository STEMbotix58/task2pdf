import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useEventPostsStore } from "./model/eventPostsStore";
import {
  saveEventPostsSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const EventPostsForm = lazy(() => import("./forms/EventPostsForm"));
const PhotosForm = lazy(() => import("./forms/PhotosForm"));
const EventPostsDocumentPDF = lazy(() => import("./pdf/EventPostsDocumentPDF"));

const EventPostsStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveEventPostsSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const eventPostsData = useEventPostsStore.getState();

    try {
      const { default: eventPostsPDFComponent } =
        await import("./pdf/EventPostsDocumentPDF");

      const pdfBlob = await generatePdfBlob(eventPostsPDFComponent, {
        data: eventPostsData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `event_posts-${result.id}.pdf`,
        folderName: `event_posts/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("event_posts", result.id, pdfUrl);

      if (!updateResult.success) {
        throw new Error(updateResult.error);
      }
    } catch (error) {
      console.error("PDF upload failed:", error);
      throw new Error(
        `Submission saved but PDF upload failed: ${error.message}`,
      );
    }
  };
  const steps = [
    { component: CSVUploadForm },
    { component: EventPostsForm },
    { component: PhotosForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useEventPostsStore}
      pdfComponent={EventPostsDocumentPDF}
      fileName="Event-Posts-Data.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default EventPostsStepperWrapper;
