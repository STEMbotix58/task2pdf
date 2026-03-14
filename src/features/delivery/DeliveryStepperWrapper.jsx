import React, { lazy, useState } from "react";
import Stepper from "@/shared/components/navigation/Stepper";
import { useDeliveryStore } from "./model/deliveryStore";
import { saveDeliverySubmission } from "@/shared/services/databaseService";

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
