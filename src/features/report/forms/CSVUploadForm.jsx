import React from "react";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import CSVUploadField from "@/shared/components/ui/CSVUploadField";
import { useReportStore } from "@/features/report/model/reportStore";
import { normalizeReportCSV } from "@/shared/utils/normalizeCSV";

const CSVUploadForm = ({ nextStep, isFirstStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const importReportData = useReportStore((s) => s.importReportData);

  const handleCSVParsed = (row) => {
    try {
      const normalized = normalizeReportCSV(row);
      importReportData(normalized);

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
