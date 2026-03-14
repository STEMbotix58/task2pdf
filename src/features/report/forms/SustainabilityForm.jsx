import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const SustainabilityForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const sustainability = useReportStore((state) => state.sustainability);
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(sustainability);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("sustainability", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Sustainability"
        subtitle="Define long-term viability, scalability, and replication."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextareaInput
            label="Continuation Plan"
            rows={3}
            maxLength={225}
            required
            value={formData.continuationPlan}
            placeholder="Describe how the project will continue..."
            onChange={(e) => handleChange("continuationPlan", e.target.value)}
          />

          <TextareaInput
            label="Scalability Potential"
            rows={3}
            maxLength={225}
            required
            value={formData.scalabilityPotential}
            placeholder="Explain potential for scaling..."
            onChange={(e) =>
              handleChange("scalabilityPotential", e.target.value)
            }
          />

          <div className="md:col-span-2">
            <TextareaInput
              label="Replication Possibilities"
              rows={3}
              maxLength={190}
              required
              value={formData.replicationPossibilities}
              placeholder="Mention how this model can be replicated..."
              onChange={(e) =>
                handleChange("replicationPossibilities", e.target.value)
              }
            />
          </div>
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

export default SustainabilityForm;
