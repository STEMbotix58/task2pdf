import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const SocialImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const socialImpact = useReportStore((state) => state.socialImpact);
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(socialImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("socialImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Social Impact"
        subtitle="Assess inclusion, outreach, and community-level change."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-6">
          <Input
            label="Inclusion & Equity"
            value={formData.inclusionAndEquity}
            maxLength={80}
            required
            placeholder="Describe inclusion and equity impact..."
            onChange={(e) => handleChange("inclusionAndEquity", e.target.value)}
          />

          <Input
            label="Community Engagement"
            value={formData.communityEngagement}
            maxLength={80}
            required
            placeholder="Describe community participation or outreach..."
            onChange={(e) =>
              handleChange("communityEngagement", e.target.value)
            }
          />

          <TextareaInput
            label="Awareness Programs"
            rows={3}
            maxLength={120}
            required
            value={formData.awarenessPrograms}
            placeholder="Mention campaigns, workshops, or seminars..."
            onChange={(e) => handleChange("awarenessPrograms", e.target.value)}
          />

          <TextareaInput
            label="Digital Divide Reduction"
            rows={3}
            maxLength={120}
            required
            value={formData.digitalDivideReduction}
            placeholder="Explain how digital access improved..."
            onChange={(e) =>
              handleChange("digitalDivideReduction", e.target.value)
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

export default SocialImpactForm;
