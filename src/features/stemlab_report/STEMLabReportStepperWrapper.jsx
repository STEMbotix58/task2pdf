import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useStemLabStore } from "./model/stemLabReportStore";
import { saveSTEMLabReportSubmission } from "@/shared/services/databaseService";

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
const STEMLabReportDocumentPDF = lazy(
  () => import("./pdf/StemLabReportDocumentPDF"),
);

const STEMLabReportStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveSTEMLabReportSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    console.log("✅ STEMLab Report submission saved:");
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
