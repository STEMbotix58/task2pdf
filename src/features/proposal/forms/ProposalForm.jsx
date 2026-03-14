import React, { useState } from "react";
import { useProposalStore } from "@/features/proposal/model/proposalStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ProposalForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const proposal = useProposalStore((state) => state.proposal);

  const setSection = useProposalStore((state) => state.setSection);

  const [formData, setFormData] = useState(() => {
    const today = new Date().toLocaleDateString("en-GB");

    return {
      ...proposal,
      date: proposal.date || today,
    };
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("proposal", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Proposal"
        subtitle="Provide recipient details and proposal overview."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="To"
            id="to"
            value={formData.to}
            onChange={(e) => handleChange("to", e.target.value)}
            required
          />

          <Input
            label="Subject"
            id="subject"
            value={formData.subject}
            maxLength={150}
            onChange={(e) => handleChange("subject", e.target.value)}
            required
          />

          <div className="md:col-span-2">
            <TextareaInput
              label="Description"
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-10">
          <ButtonGroup
            prevStep={prevStep}
            nextStep={nextStep}
            generatePDF={generatePDF}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isGenerating={isGenerating}
          />
        </div>
      </form>
    </FormContainer>
  );
};

export default ProposalForm;
