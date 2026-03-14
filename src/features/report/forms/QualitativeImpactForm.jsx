import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import SelectInput from "@/shared/components/ui/SelectInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const QualitativeImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const qualitativeImpact = useReportStore((state) => state.qualitativeImpact);

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(qualitativeImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("qualitativeImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Qualitative Impact"
        subtitle="Assess behavioral growth, leadership, and participant feedback."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="range"
            label="Confidence Growth (1–10)"
            min={1}
            max={10}
            required
            value={formData.confidenceImprovement || "1"}
            onChange={(e) =>
              handleChange("confidenceImprovement", String(e.target.value))
            }
          />

          <SelectInput
            label="Leadership Development"
            required
            value={formData.leadershipSkills}
            placeholder="Select Level"
            options={[
              { label: "Beginner", value: "beginner" },
              { label: "Developing", value: "developing" },
              { label: "Proficient", value: "proficient" },
              { label: "Advanced", value: "advanced" },
            ]}
            onChange={(e) => handleChange("leadershipSkills", e.target.value)}
          />

          <SelectInput
            label="Collaboration & Team Participation"
            required
            value={formData.teamwork}
            placeholder="Select Rating"
            options={[
              { label: "Poor", value: "poor" },
              { label: "Fair", value: "fair" },
              { label: "Good", value: "good" },
              { label: "Excellent", value: "excellent" },
            ]}
            onChange={(e) => handleChange("teamwork", e.target.value)}
          />

          <Input
            type="range"
            label="Problem-Solving & Critical Thinking (1–10)"
            min={1}
            max={10}
            required
            value={formData.criticalThinking || "1"}
            onChange={(e) =>
              handleChange("criticalThinking", String(e.target.value))
            }
          />

          <div className="md:col-span-2">
            <TextareaInput
              label="Participant / Mentor Feedback"
              rows={3}
              maxLength={200}
              required
              value={formData.testimonials}
              placeholder="Write feedback or testimonial..."
              onChange={(e) => handleChange("testimonials", e.target.value)}
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

export default QualitativeImpactForm;
