import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const LearningOutcomesForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const learningOutcomes = useReportStore((state) => state.learningOutcomes);

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(learningOutcomes);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("learningOutcomes", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Learning & Skill Outcomes"
        subtitle="Document technical competencies and skill development achieved."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="md:col-span-2">
            <Input
              label="Technical Skills Gained"
              value={formData.technicalSkillsGained}
              required
              maxLength={100}
              placeholder="e.g. Robotics, Augmented Reality, Python Programming..."
              onChange={(e) =>
                handleChange("technicalSkillsGained", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <Input
              label="Soft Skills Developed"
              value={formData.softSkillsDeveloped}
              required
              maxLength={100}
              placeholder="e.g. Critical Thinking, Teamwork, Problem Solving..."
              onChange={(e) =>
                handleChange("softSkillsDeveloped", e.target.value)
              }
            />
          </div>

          <Input
            label="Tools / Platforms Used"
            value={formData.toolsPlatformsUsed}
            required
            maxLength={80}
            placeholder="e.g. AR-based Phygital toys, STEM Kits"
            onChange={(e) => handleChange("toolsPlatformsUsed", e.target.value)}
          />

          <Input
            label="Hands-on Learning Hours"
            type="number"
            value={formData.handsOnLearningHours}
            required
            min={1}
            onChange={(e) =>
              handleChange("handsOnLearningHours", e.target.value)
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

export default LearningOutcomesForm;
