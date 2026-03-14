import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const InnovationImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const innovationImpact = useReportStore((state) => state.innovationImpact);
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(innovationImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("innovationImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Innovation Impact"
        subtitle="Document technological advancements and innovation outcomes."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="New Technologies Introduced"
            value={formData.newTechnologies}
            rows={4}
            maxLength={200}
            required
            placeholder="Describe new technologies..."
            onChange={(e) => handleChange("newTechnologies", e.target.value)}
          />

          <TextareaInput
            label="Innovation Projects"
            value={formData.innovationProjects}
            rows={4}
            maxLength={200}
            required
            placeholder="Describe innovation projects..."
            onChange={(e) => handleChange("innovationProjects", e.target.value)}
          />

          <TextareaInput
            label="Research & Development"
            value={formData.research}
            rows={4}
            maxLength={200}
            required
            placeholder="Describe research activities..."
            onChange={(e) => handleChange("research", e.target.value)}
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

export default InnovationImpactForm;
