import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import {
  saveSTEMLabReportSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { useStemLabStore } from "./model/stemLabReportStore";
import { generatePdfBlob } from "@/shared/services/pdfService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import STEMLabReportDocumentPDF from "./pdf/StemLabReportDocumentPDF";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const LabSetupComponentsForm = lazy(
  () => import("./forms/LabSetupComponentsForm"),
);
const ImplementationMilestonesForm = lazy(
  () => import("./forms/ImplementationMilestonesForm"),
);
const BasicInfoForm = lazy(() => import("./forms/BasicInfoForm"));
const PrefaceForm = lazy(() => import("./forms/PrefaceForm"));
const PhaseForm = lazy(() => import("./forms/PhaseForm"));
const OutcomesForm = lazy(() => import("./forms/OutcomesForm"));
const StrengthsForm = lazy(() => import("./forms/StrengthsForm"));
const ChallengesAndMitigationForm = lazy(
  () => import("./forms/ChallengesAndMitigationForm"),
);
const ImpactAnalysisForm = lazy(() => import("./forms/ImpactAnalysisForm"));
const ProjectForm = lazy(() => import("./forms/ProjectForm"));
const ConclusionForm = lazy(() => import("./forms/ConclusionForm"));

const STEMLabReportStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveSTEMLabReportSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const stemlabReportData = useStemLabStore.getState();

    try {
      const { default: STEMLabReportPDFComponent } =
        await import("./pdf/StemLabReportDocumentPDF");

      const pdfBlob = await generatePdfBlob(STEMLabReportPDFComponent, {
        data: stemlabReportData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `stemlab_report-${result.id}.pdf`,
        folderName: `stemlab_report/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl(
        "stemlab_report",
        result.id,
        pdfUrl,
      );

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
    { component: PrefaceForm },
    { component: ProjectForm },
    { component: LabSetupComponentsForm },
    { component: ImplementationMilestonesForm },
    { component: PhaseForm },
    { component: OutcomesForm },
    { component: ImpactAnalysisForm },
    { component: StrengthsForm },
    { component: ChallengesAndMitigationForm },
    { component: ConclusionForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useStemLabStore}
      pdfComponent={STEMLabReportDocumentPDF}
      fileName="Report-V2.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default React.memo(STEMLabReportStepperWrapper);
