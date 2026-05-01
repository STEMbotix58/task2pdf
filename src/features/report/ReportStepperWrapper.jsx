import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useReportStore } from "./model/reportStore";
import {
  saveReportSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const ProjectForm = lazy(() => import("./forms/ProjectForm"));
const ObjectivesForm = lazy(() => import("./forms/ObjectivesForm"));
const BeneficiaryProfileForm = lazy(
  () => import("./forms/BeneficiaryProfileForm"),
);
const BaselineEndlineForm = lazy(() => import("./forms/BaselineEndlineForm"));
const QuantitativeImpactForm = lazy(
  () => import("./forms/QuantitativeImpactForm"),
);
const QualitativeImpactForm = lazy(
  () => import("./forms/QualitativeImpactForm"),
);
const LearningOutcomesForm = lazy(() => import("./forms/LearningOutcomesForm"));
const InstitutionalImpactForm = lazy(
  () => import("./forms/InstitutionalImpactForm"),
);
const SocialImpactForm = lazy(() => import("./forms/SocialImpactForm"));
const EconomicImpactForm = lazy(() => import("./forms/EconomicImpactForm"));
const InnovationImpactForm = lazy(() => import("./forms/InnovationImpactForm"));
const CaseStudyForm = lazy(() => import("./forms/CaseStudyForm"));
const ChallengesForm = lazy(() => import("./forms/ChallengesForm"));
const SustainabilityForm = lazy(() => import("./forms/SustainabilityForm"));
const MonitoringEvaluationForm = lazy(
  () => import("./forms/MonitoringEvaluationForm"),
);
const PhotographsForm = lazy(() => import("./forms/PhotographsForm"));
const ReportDocumentPDF = lazy(() => import("./pdf/ReportDocumentPDF"));

const ReportStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveReportSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const reportData = useReportStore.getState();

    try {
      const { default: reportPDFComponent } =
        await import("./pdf/ReportDocumentPDF");

      const pdfBlob = await generatePdfBlob(reportPDFComponent, {
        data: reportData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `report-${result.id}.pdf`,
        folderName: `report/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("report", result.id, pdfUrl);

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
    { component: ProjectForm },
    { component: ObjectivesForm },
    { component: BeneficiaryProfileForm },
    { component: BaselineEndlineForm },
    { component: QuantitativeImpactForm },
    { component: QualitativeImpactForm },
    { component: LearningOutcomesForm },
    { component: InstitutionalImpactForm },
    { component: SocialImpactForm },
    { component: EconomicImpactForm },
    { component: InnovationImpactForm },
    { component: CaseStudyForm },
    { component: ChallengesForm },
    { component: SustainabilityForm },
    { component: MonitoringEvaluationForm },
    { component: PhotographsForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useReportStore}
      pdfComponent={ReportDocumentPDF}
      fileName="Report-V3.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default React.memo(ReportStepperWrapper);
