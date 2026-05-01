import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useProjectStore } from "./model/projectStore";
import {
  saveProjectSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const ProjectForm = lazy(() => import("./forms/ProjectForm"));
const BasicInfoForm = lazy(() => import("./forms/BasicInfoForm"));
const SummaryForm = lazy(() => import("./forms/SummaryForm"));
const PrefaceForm = lazy(() => import("./forms/PrefaceForm"));
const ConclusionForm = lazy(() => import("./forms/ConclusionForm"));
const ContactForm = lazy(() => import("./forms/ContactForm"));
const PhotographsForm = lazy(() => import("./forms/PhotographsForm"));
const ProjectDocumentPDF = lazy(() => import("./pdf/ProjectDocumentPDF"));

const ProjectStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveProjectSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const projectReportData = useProjectStore.getState();

    try {
      const { default: projectReportPDFComponent } =
        await import("./pdf/ProjectDocumentPDF");

      const pdfBlob = await generatePdfBlob(projectReportPDFComponent, {
        data: projectReportData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `project_report-${result.id}.pdf`,
        folderName: `project_report/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("project", result.id, pdfUrl);

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
    { component: BasicInfoForm },
    { component: SummaryForm },
    { component: PrefaceForm },
    { component: ProjectForm },
    { component: ConclusionForm },
    { component: ContactForm },
    { component: PhotographsForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useProjectStore}
      pdfComponent={ProjectDocumentPDF}
      fileName="Report-V3.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default ProjectStepperWrapper;
