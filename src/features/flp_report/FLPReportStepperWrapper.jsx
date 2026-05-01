import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import {
  saveFLPReportSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { useFLPStore } from "./model/flpReportStore";
import FLPReportDocumentPDF from "./pdf/FLPReportDocumentPDF";
import { generatePdfBlob } from "@/shared/services/pdfService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const BasicInfoForm = lazy(() => import("./forms/BasicInfoForm"));
const SummaryForm = lazy(() => import("./forms/SummaryForm"));
const ObjectivesForm = lazy(() => import("./forms/ObjectivesForm"));
const KeyOutcomesForm = lazy(() => import("./forms/KeyOutcomesForm"));
const ImplementationAndDeliveryForm = lazy(
  () => import("./forms/ImplementationAndDeliveryForm"),
);
const ReachAndCoverageForm = lazy(() => import("./forms/ReachAndCoverageForm"));
const FinancialOverviewForm = lazy(
  () => import("./forms/FinancialOverviewForm"),
);
const StudentCertificationForm = lazy(
  () => import("./forms/StudentCertificationForm"),
);
const OutcomesImpactForm = lazy(() => import("./forms/OutcomesImpactForm"));
const ImpactAnalysisForm = lazy(() => import("./forms/ImpactAnalysisForm"));
const ProjectStrengthsForm = lazy(() => import("./forms/ProjectStrengthsForm"));
const ChallengesAndMigrationForm = lazy(
  () => import("./forms/ChallengesAndMigrationForm"),
);
const ConclusionForm = lazy(() => import("./forms/ConclusionForm"));

const FLPReportStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveFLPReportSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const flpReportData = useFLPStore.getState();

    try {
      const { default: FLPReportPDFComponent } =
        await import("./pdf/FLPReportDocumentPDF");

      const pdfBlob = await generatePdfBlob(FLPReportPDFComponent, {
        data: flpReportData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `flp_report-${result.id}.pdf`,
        folderName: `flp_report/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("flp_report", result.id, pdfUrl);

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
    { component: ObjectivesForm },
    { component: ImplementationAndDeliveryForm },
    { component: ReachAndCoverageForm },
    { component: FinancialOverviewForm },
    { component: StudentCertificationForm },
    { component: OutcomesImpactForm },
    { component: ImpactAnalysisForm },
    { component: ProjectStrengthsForm },
    { component: ChallengesAndMigrationForm },
    { component: KeyOutcomesForm },
    { component: ConclusionForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useFLPStore}
      pdfComponent={FLPReportDocumentPDF}
      fileName="Report-V1.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default FLPReportStepperWrapper;
