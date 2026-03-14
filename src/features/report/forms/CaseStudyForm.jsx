import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const CaseStudyForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const caseStudy = useReportStore((state) => state.caseStudy);
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(caseStudy);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("caseStudy", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Case Study"
        subtitle="Document a detailed impact story from a beneficiary."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Beneficiary Background"
            value={formData.beneficiaryBackground}
            rows={4}
            required
            maxLength={225}
            placeholder="Enter beneficiary background..."
            onChange={(e) =>
              handleChange("beneficiaryBackground", e.target.value)
            }
          />

          <TextareaInput
            label="Intervention Details"
            value={formData.interventionDetails}
            rows={4}
            required
            maxLength={225}
            placeholder="Describe intervention..."
            onChange={(e) =>
              handleChange("interventionDetails", e.target.value)
            }
          />

          <TextareaInput
            label="Outcome Achieved"
            value={formData.outcomeAchieved}
            rows={4}
            required
            maxLength={200}
            placeholder="Enter outcomes..."
            onChange={(e) => handleChange("outcomeAchieved", e.target.value)}
          />

          <TextareaInput
            label="Testimonial"
            value={formData.testimonial}
            rows={4}
            required
            maxLength={250}
            placeholder="Enter testimonial..."
            onChange={(e) => handleChange("testimonial", e.target.value)}
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

export default CaseStudyForm;
