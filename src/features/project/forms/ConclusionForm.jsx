import React from "react";
import { useProjectStore } from "@/features/project/model/projectStore";

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
  const conclusion = useProjectStore((state) => state.conclusion);
  const setSection = useProjectStore((state) => state.setSection);

  const handleChange = (value) => {
    setSection("conclusion", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Conclusion" subtitle="Provide project conclusion." />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Conclusion"
            id="conclusion"
            rows={4}
            value={conclusion}
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

export default ConclusionForm;
