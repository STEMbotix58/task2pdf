import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useProposalStore } from "./model/proposalStore";
import {
  saveProposalSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

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

    const proposalData = useProposalStore.getState();

    try {
      const { default: proposalPDFComponent } =
        await import("./pdf/ProposalDocumentPDF");

      const pdfBlob = await generatePdfBlob(proposalPDFComponent, {
        data: proposalData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `proposal-${result.id}.pdf`,
        folderName: `proposal/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("proposal", result.id, pdfUrl);

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
