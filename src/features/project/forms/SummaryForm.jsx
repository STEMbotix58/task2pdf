import React from "react";
import { useProjectStore } from "@/features/project/model/projectStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const SummaryForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const summary = useProjectStore((state) => state.summary);
  const setSection = useProjectStore((state) => state.setSection);

  const handleChange = (value) => {
    setSection("summary", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Summary" subtitle="Provide project summary." />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Summary"
            id="summary"
            rows={4}
            value={summary}
            onChange={(e) => handleChange(e.target.value)}
            required
            maxLength={1200}
          />
        </div>

        <div className="mt-10">
          <ButtonGroup
            prevStep={prevStep}
            nextStep={nextStep}
            generatePDF={generatePDF}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isGenerating={isGenerating}
          />
        </div>
      </form>
    </FormContainer>
  );
};

export default SummaryForm;
