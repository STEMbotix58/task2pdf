import React from "react";
import { useStemLabStore } from "../model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ConclusionForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const conclusion = useStemLabStore((state) => state.conclusion);
  const setSection = useStemLabStore((state) => state.setSection);
  console.log(useStemLabStore((state) => state.basicInfo));
  const handleChange = (value) => {
    setSection("conclusion", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Conclusion"
        subtitle="Provide STEMLab Report Conclusion."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            id="conclusion"
            rows={4}
            value={conclusion}
            onChange={(e) => handleChange(e.target.value)}
            required
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

export default ConclusionForm;
