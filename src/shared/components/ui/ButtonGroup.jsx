import React from "react";
import Button from "@/shared/components/ui/Button";
import { FaDownload } from "react-icons/fa";

const ButtonGroup = ({
  prevStep,
  nextStep,
  generatePDF,
  handleCSVDownload,
  isFirstStep = false,
  isLastStep = false,
  isGenerating = false,
}) => {
  return (
    <div className="flex gap-3 mt-6">
      {/* Back Button */}
      {!isFirstStep && (
        <Button
          title="Back"
          variant="secondary"
          type="button"
          onClick={prevStep}
          disabled={isGenerating}
          style={{ flex: 1 }}
        />
      )}
      {/* Next / Generate */}
      {isLastStep ? (
        <Button
          title={isGenerating ? "Generating..." : "Generate PDF"}
          variant="primary"
          type="submit"
          onClick={generatePDF}
          disabled={isGenerating}
          loading={isGenerating}
          style={{ flex: 1 }}
        />
      ) : (
        <Button
          title="Next"
          variant="primary"
          type="submit"
          disabled={isGenerating}
          style={{ flex: 1 }}
        />
      )}
      {isFirstStep && (
        <Button
          title="Download Template"
          variant="green"
          type="button"
          onClick={handleCSVDownload}
          disabled={isGenerating}
          style={{ flex: 1 }}
        >
          <FaDownload className="ml-2" />
        </Button>
      )}
    </div>
  );
};

export default ButtonGroup;
