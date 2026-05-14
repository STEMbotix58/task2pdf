import React, { lazy } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useUserManualStore } from "./model/userManualStore";
import {
  saveUserManualSubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));
const CoverPageForm = lazy(() => import("./forms/CoverPageForm"));
const IntroductionForm = lazy(() => import("./forms/IntroductionForm"));
const WhatsInTheKitForm = lazy(() => import("./forms/WhatsInTheKitForm"));
const HardwareSetupForm = lazy(() => import("./forms/HardwareSetupForm"));
const ProgrammingSetupForm = lazy(() => import("./forms/ProgrammingSetupForm"));
const SafetyInformationForm = lazy(
  () => import("./forms/SafetyInformationForm"),
);
const TroubleshootingFAQForm = lazy(
  () => import("./forms/TroubleshootingFAQForm"),
);
const ConclusionForm = lazy(() => import("./forms/ConclusionForm"));
const UserManualDocumentPDF = lazy(() => import("./pdf/UserManualDocumentPDF"));

const UserManualStepperWrapper = () => {
  const handleBeforeGenerate = async (formData) => {
    const result = await saveUserManualSubmission(formData);

    if (!result.success) {
      throw new Error(result.error);
    }

    const userManualData = useUserManualStore.getState();

    try {
      const { default: userManualPDFComponent } =
        await import("./pdf/UserManualDocumentPDF");

      const pdfBlob = await generatePdfBlob(userManualPDFComponent, {
        data: userManualData,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `user_manual-${result.id}.pdf`,
        folderName: `user_manual/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("user_manual", result.id, pdfUrl);

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
    { component: CoverPageForm },
    { component: IntroductionForm },
    { component: WhatsInTheKitForm },
    { component: HardwareSetupForm },
    { component: ProgrammingSetupForm },
    { component: SafetyInformationForm },
    { component: TroubleshootingFAQForm },
    { component: ConclusionForm },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useUserManualStore}
      pdfComponent={UserManualDocumentPDF}
      fileName="UserManual.pdf"
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default React.memo(UserManualStepperWrapper);
