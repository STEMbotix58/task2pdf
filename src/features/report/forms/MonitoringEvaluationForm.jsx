import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const MonitoringEvaluationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const monitoringEvaluation = useReportStore(
    (state) => state.monitoringEvaluation,
  );
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(monitoringEvaluation);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("monitoringEvaluation", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Monitoring & Evaluation"
        subtitle="Define tools, methodologies, and tracking frequency."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Data Collection Tools"
            value={formData.dataCollectionTools}
            rows={3}
            required
            maxLength={180}
            placeholder="e.g. Surveys, Interviews, Observation Sheets..."
            onChange={(e) =>
              handleChange("dataCollectionTools", e.target.value)
            }
          />

          <TextareaInput
            label="Assessment Methods"
            value={formData.assessmentMethods}
            rows={3}
            required
            maxLength={180}
            placeholder="e.g. Pre/Post Tests, Practical Evaluations..."
            onChange={(e) => handleChange("assessmentMethods", e.target.value)}
          />

          <TextareaInput
            label="Monitoring Frequency"
            value={formData.monitoringFrequency}
            rows={2}
            required
            maxLength={175}
            placeholder="e.g. Weekly, Monthly, Quarterly..."
            onChange={(e) =>
              handleChange("monitoringFrequency", e.target.value)
            }
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

export default MonitoringEvaluationForm;
