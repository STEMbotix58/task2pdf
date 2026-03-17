import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useProposalStore } from "./model/proposalStore";
import { saveProposalSubmission } from "@/shared/services/databaseService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const ProposalForm = lazy(() => import("./forms/ProposalForm"));
const ProjectProposalForm = lazy(() => import("./forms/ProjectProposalForm"));
const FinancialForm = lazy(() => import("./forms/FinancialForm"));
const SPOCForm = lazy(() => import("./forms/SPOCForm"));
const ProposalDocumentPDF = lazy(() => import("./pdf/ProposalDocumentPDF"));

const ProposalStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveProposalSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("✅ Proposal submission saved:");
  };
  const steps = [
    { component: CSVUploadForm },
    { component: ProposalForm },
    { component: ProjectProposalForm },
    { component: FinancialForm },
    { component: SPOCForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useProposalStore}
      pdfComponent={ProposalDocumentPDF}
      fileName="Proposal-Data.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default ProposalStepperWrapper;
