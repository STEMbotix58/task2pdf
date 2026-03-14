import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const QuantitativeImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const quantitativeImpact = useReportStore(
    (state) => state.quantitativeImpact,
  );

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(quantitativeImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("quantitativeImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Quantitative Impact"
        subtitle="Capture measurable performance indicators and outcomes."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="number"
            label="Number of Participants Trained"
            min={1}
            required
            value={formData.participantsTrained ?? 0}
            onChange={(e) =>
              handleChange("participantsTrained", Number(e.target.value))
            }
          />

          <Input
            type="number"
            label="Certifications Achieved"
            min={1}
            required
            value={formData.certificationsAchieved ?? 0}
            onChange={(e) =>
              handleChange("certificationsAchieved", Number(e.target.value))
            }
          />

          <Input
            type="number"
            label="Attendance / Retention Rate (%)"
            min={1}
            max={100}
            required
            value={formData.attendanceRate ?? 0}
            onChange={(e) =>
              handleChange("attendanceRate", Number(e.target.value))
            }
          />

          <Input
            type="number"
            label="Completion Rate (%)"
            min={1}
            max={100}
            required
            value={formData.completionRate ?? 0}
            onChange={(e) =>
              handleChange("completionRate", Number(e.target.value))
            }
          />

          <div className="md:col-span-2">
            <Input
              type="number"
              label="Improvement in Assessment Scores (%)"
              min={1}
              max={100}
              required
              value={formData.assessmentImprovement ?? 0}
              onChange={(e) =>
                handleChange("assessmentImprovement", Number(e.target.value))
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

export default QuantitativeImpactForm;
