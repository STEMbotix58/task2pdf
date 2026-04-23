import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useProjectStore } from "./model/projectStore";
import { saveProjectSubmission } from "@/shared/services/databaseService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const ProjectForm = lazy(() => import("./forms/ProjectForm"));
const BasicInfoForm = lazy(() => import("./forms/BasicInfoForm"));
const SummaryForm = lazy(() => import("./forms/SummaryForm"));
const PrefaceForm = lazy(() => import("./forms/PrefaceForm"));
const ConclusionForm = lazy(() => import("./forms/ConclusionForm"));
const ContactForm = lazy(() => import("./forms/ContactForm"));
const PhotographsForm = lazy(() => import("./forms/PhotographsForm"));
const ProjectDocumentPDF = lazy(() => import("./pdf/ProjectDocumentPDF"));

const ProposalStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveProjectSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("✅ Project submission saved:");
  };
  const steps = [
    { component: CSVUploadForm },
    { component: ProjectForm },
    { component: BasicInfoForm },
    { component: SummaryForm },
    { component: PrefaceForm },
    { component: ConclusionForm },
    { component: ContactForm },
    { component: PhotographsForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useProjectStore}
      pdfComponent={ProjectDocumentPDF}
      fileName="Project-Data.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default ProposalStepperWrapper;
