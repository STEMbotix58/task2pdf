import React from "react";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import CSVUploadField from "@/shared/components/ui/CSVUploadField";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { normalizeProposalCSV } from "@/shared/utils/normalizeCSV";

const CSVUploadForm = ({ nextStep, isFirstStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const importProposalData = useProposalStore(
    (state) => state.importProposalData,
  );

  const handleCSVParsed = (row) => {
    try {
      const normalized = normalizeProposalCSV(row);
      importProposalData(normalized);

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
        <ButtonGroup nextStep={nextStep} isFirstStep={isFirstStep} />
      </form>
    </FormContainer>
  );
};

export default CSVUploadForm;
