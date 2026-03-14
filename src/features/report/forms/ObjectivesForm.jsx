import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ObjectivesForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const objectives = useReportStore((state) => state.objectives);

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(objectives);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("objectives", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Objectives"
        subtitle="Define strategic goals, outcomes, and SDG alignment."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Primary Objectives"
            value={formData.primaryObjectives}
            rows={3}
            required
            maxLength={250}
            placeholder="Enter primary objectives..."
            onChange={(e) => handleChange("primaryObjectives", e.target.value)}
          />

          <TextareaInput
            label="Secondary Objectives"
            value={formData.secondaryObjectives}
            rows={3}
            required
            maxLength={250}
            placeholder="Enter secondary objectives..."
            onChange={(e) =>
              handleChange("secondaryObjectives", e.target.value)
            }
          />

          <TextareaInput
            label="Short-term Outcomes"
            value={formData.shortTermOutcomes}
            rows={3}
            required
            maxLength={190}
            placeholder="Describe short-term outcomes..."
            onChange={(e) => handleChange("shortTermOutcomes", e.target.value)}
          />

          <TextareaInput
            label="Long-term Outcomes"
            value={formData.longTermOutcomes}
            rows={3}
            required
            maxLength={190}
            placeholder="Describe long-term outcomes..."
            onChange={(e) => handleChange("longTermOutcomes", e.target.value)}
          />

          <Input
            label="SDG Alignment"
            value={formData.sdgAlignment}
            required
            maxLength={100}
            placeholder="e.g. SDG 4 – Quality Education"
            onChange={(e) => handleChange("sdgAlignment", e.target.value)}
          />
        </div>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={nextStep}
          generatePDF={generatePDF}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating}
        />
      </form>
    </FormContainer>
  );
};

export default ObjectivesForm;
