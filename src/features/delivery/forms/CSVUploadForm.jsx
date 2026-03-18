import React from "react";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import CSVUploadField from "@/shared/components/ui/CSVUploadField";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";
import { normalizeDeliveryCSV } from "@/shared/utils/normalizeCSV";
import { handleDeliveryCSVDownload } from "@/shared/utils/handleCSVDownload";

const CSVUploadForm = ({ nextStep, isFirstStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const importDeliveryData = useDeliveryStore(
    (state) => state.importDeliveryData,
  );

  const handleCSVParsed = (row) => {
    try {
      const normalized = normalizeDeliveryCSV(row);
      importDeliveryData(normalized);
      nextStep();
    } catch (error) {
      console.error("Error parsing CSV data:", error);
      alert(
        "There was an error processing the CSV file. Please check the format and try again.",
      );
    }
  };

  return (
    <FormContainer>
      <FormHeader title="Upload CSV File" />

      <form onSubmit={handleSubmit} className="space-y-8">
        <CSVUploadField onDataParsed={handleCSVParsed} required={false} />
        <ButtonGroup
          nextStep={nextStep}
          isFirstStep={isFirstStep}
          handleCSVDownload={handleDeliveryCSVDownload}
        />
      </form>
    </FormContainer>
  );
};

export default CSVUploadForm;
