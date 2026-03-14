import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const InstitutionalImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const institutionalImpact = useReportStore(
    (state) => state.institutionalImpact,
  );

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(institutionalImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("institutionalImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Institutional Impact"
        subtitle="Document institutional strengthening and sustainability outcomes."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Teacher Capacity Building"
            value={formData.teacherCapacityBuilding}
            rows={4}
            required
            maxLength={200}
            placeholder="Describe teacher training and capacity building..."
            onChange={(e) =>
              handleChange("teacherCapacityBuilding", e.target.value)
            }
          />

          <TextareaInput
            label="Infrastructure Use"
            value={formData.infrastructureUse}
            rows={4}
            required
            maxLength={200}
            placeholder="Describe infrastructure utilization..."
            onChange={(e) => handleChange("infrastructureUse", e.target.value)}
          />

          <TextareaInput
            label="Curriculum Enhancement"
            value={formData.curriculumEnhancement}
            rows={4}
            required
            maxLength={200}
            placeholder="Describe curriculum improvements..."
            onChange={(e) =>
              handleChange("curriculumEnhancement", e.target.value)
            }
          />

          <TextareaInput
            label="Sustainability Measures"
            value={formData.sustainabilityMeasures}
            rows={4}
            required
            maxLength={200}
            placeholder="Describe sustainability measures..."
            onChange={(e) =>
              handleChange("sustainabilityMeasures", e.target.value)
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

export default InstitutionalImpactForm;
