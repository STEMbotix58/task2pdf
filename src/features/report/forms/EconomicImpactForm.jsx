import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const EconomicImpactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const economicImpact = useReportStore((state) => state.economicImpact);
  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(economicImpact);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("economicImpact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Economic Impact (Optional)"
        subtitle="Document economic outcomes and return metrics."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <TextareaInput
              label="Employability Enhancement"
              value={formData.employabilityEnhancement}
              rows={4}
              maxLength={200}
              placeholder="Describe employability improvements..."
              onChange={(e) =>
                handleChange("employabilityEnhancement", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <TextareaInput
              label="Income Opportunities"
              value={formData.incomeOpportunities}
              rows={4}
              maxLength={200}
              placeholder="Describe income opportunities..."
              onChange={(e) =>
                handleChange("incomeOpportunities", e.target.value)
              }
            />
          </div>

          <Input
            label="Cost Per Beneficiary"
            type="number"
            value={formData.costPerBeneficiary}
            min={1}
            placeholder="Enter amount"
            onChange={(e) => {
              const v = e.target.value;
              handleChange("costPerBeneficiary", v === "" ? "" : v);
            }}
            required={false}
          />

          <Input
            label="Return on Investment (%)"
            type="number"
            value={formData.roi}
            min={1}
            placeholder="Enter ROI %"
            onChange={(e) => {
              const v = e.target.value;
              handleChange("roi", v === "" ? "" : v);
            }}
            required={false}
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

export default EconomicImpactForm;
