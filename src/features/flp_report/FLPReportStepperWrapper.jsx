import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
// import { saveFLPReportSubmission } from "@/shared/services/databaseService";
import { useFLPStore } from "./model/flpReportStore";

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

const FLPReportDocumentPDF = lazy(() => import("./pdf/FLPReportDocumentPDF"));

const FLPReportStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    // const result = await saveFLPReportSubmission(formData);

    // if (!result.success) {
    //   throw new Error(result.error);
    // }

    // force React + Zustand to flush updates
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("✅ Financial Literacy Program Report submission saved:");
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
      fileName="FLP-Report-Data.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default FLPReportStepperWrapper;
