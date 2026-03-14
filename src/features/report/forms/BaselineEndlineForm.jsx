import React, { useState, useMemo } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const BaselineEndlineForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const baselineEndline = useReportStore((state) => state.baselineEndline);
  const setSection = useReportStore((state) => state.setSection);

  // safe local copy
  const [formData, setFormData] = useState(() => {
    const row = baselineEndline?.[0] || {
      parameter: "",
      baselineValue: 0,
      endlineValue: 0,
      percentChange: 0,
    };

    return { ...row };
  });

  const { parameter, baselineValue, endlineValue } = formData;

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // calculate % change locally
  const calculatedPercent = useMemo(() => {
    const base = Number(baselineValue) || 0;
    const end = Number(endlineValue) || 0;

    if (base === 0) return 0;

    return Number((((end - base) / base) * 100).toFixed(2));
  }, [baselineValue, endlineValue]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalRow = {
      ...formData,
      percentChange: calculatedPercent,
    };

    setSection("baselineEndline", [finalRow]);

    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Baseline & Endline"
        subtitle="Compare baseline and endline metrics to evaluate impact."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Input
            label="Parameter"
            value={parameter || ""}
            maxLength={45}
            required
            onChange={(e) => handleChange("parameter", e.target.value)}
          />

          <Input
            label="Baseline Value"
            type="number"
            value={baselineValue}
            required
            onChange={(e) =>
              handleChange("baselineValue", Number(e.target.value) || 0)
            }
          />

          <Input
            label="Endline Value"
            type="number"
            value={endlineValue}
            required
            onChange={(e) =>
              handleChange("endlineValue", Number(e.target.value) || 0)
            }
          />

          <Input
            label="% Change"
            type="number"
            value={calculatedPercent}
            readOnly
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

export default BaselineEndlineForm;
