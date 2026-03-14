import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ChallengesForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const challengesAndLearnings = useReportStore(
    (state) => state.challengesAndLearnings,
  );
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(challengesAndLearnings);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("challengesAndLearnings", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Challenges & Learnings"
        subtitle="Document operational challenges, mitigation strategies, and key lessons."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <TextareaInput
            label="Key Challenges"
            value={formData.keyChallenges}
            rows={4}
            required
            maxLength={210}
            placeholder="Describe key challenges..."
            onChange={(e) => handleChange("keyChallenges", e.target.value)}
          />

          <TextareaInput
            label="Mitigation Strategies"
            value={formData.mitigationStrategies}
            rows={4}
            required
            maxLength={210}
            placeholder="Describe mitigation strategies..."
            onChange={(e) =>
              handleChange("mitigationStrategies", e.target.value)
            }
          />

          <TextareaInput
            label="Lessons Learned"
            value={formData.lessonsLearned}
            rows={4}
            required
            maxLength={175}
            placeholder="Enter lessons learned..."
            onChange={(e) => handleChange("lessonsLearned", e.target.value)}
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

export default ChallengesForm;
