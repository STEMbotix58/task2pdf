import React, { lazy, useState } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useDeliveryStore } from "./model/deliveryStore";
import {
  saveDeliverySubmission,
  updatePdfUrl,
} from "@/shared/services/databaseService";
import { uploadFileToCloudinary } from "@/shared/services/uploadService";
import { generatePdfBlob } from "@/shared/services/pdfService";

const CSVUploadForm = lazy(() => import("./forms/CSVUploadForm"));

const DeliveryBasicInfoForm = lazy(
  () => import("./forms/DeliveryBasicInfoForm"),
);
const SchoolDeliveryForm = lazy(() => import("./forms/SchoolDeliveryForm"));
const SerialNumbersForm = lazy(() => import("./forms/SerialNumbersForm"));
const VerificationForm = lazy(() => import("./forms/VerificationForm"));
const ItemChecklistForm = lazy(() => import("./forms/ItemChecklistForm"));
const DeliveryCertificatePDF = lazy(
  () => import("./pdf/DeliveryCertificatePDF"),
);

const DeliveryStepperWrapper = () => {
  const [items, setItems] = useState([]);

  const handleBeforeGenerate = async (formData) => {
    const result = await saveDeliverySubmission({
      ...formData,
      itemChecklist: items, // ← add this
    });

    if (!result.success) {
      throw new Error(result.error);
    }

    const deliveryData = useDeliveryStore.getState();

    try {
      const { default: DeliveryCertificatePDFComponent } =
        await import("./pdf/DeliveryCertificatePDF");

      const pdfBlob = await generatePdfBlob(DeliveryCertificatePDFComponent, {
        data: deliveryData,
        items,
      });

      const pdfUrl = await uploadFileToCloudinary({
        file: pdfBlob,
        fileName: `delivery-${result.id}.pdf`,
        folderName: `deliveries/${result.id}`,
        resourceType: "raw",
      });

      const updateResult = await updatePdfUrl("delivery", result.id, pdfUrl);

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
    { component: DeliveryBasicInfoForm },
    { component: SchoolDeliveryForm },
    { component: SerialNumbersForm },
    { component: VerificationForm },
    {
      component: ItemChecklistForm,
      props: { setItems },
    },
  ];

  return (
    <Stepper
      steps={steps}
      useStore={useDeliveryStore}
      pdfComponent={DeliveryCertificatePDF}
      fileName="Delivery-Certificate.pdf"
      extraContext={{ items }}
      onBeforeGenerate={handleBeforeGenerate}
    />
  );
};

export default DeliveryStepperWrapper;
