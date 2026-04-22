import React from "react";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import CSVUploadField from "@/shared/components/ui/CSVUploadField";
import { normalizeFLPReportCSV } from "@/shared/utils/normalizeCSV";
import { handleFLPReportCSVDownload } from "@/shared/utils/handleCSVDownload";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

const CSVUploadForm = ({ nextStep, isFirstStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const importFLPReportData = useFLPStore((s) => s.importFLPReportData);

  const handleCSVParsed = (row) => {
    try {
      const normalized = normalizeFLPReportCSV(row);
      importFLPReportData(normalized);
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
          handleCSVDownload={handleFLPReportCSVDownload}
        />
      </form>
    </FormContainer>
  );
};

export default CSVUploadForm;
