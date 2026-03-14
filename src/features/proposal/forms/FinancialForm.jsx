import React, { useState } from "react";
import { useProposalStore } from "@/features/proposal/model/proposalStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const FinancialForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const financialProposal = useProposalStore((s) => s.financialProposal);
  const setSection = useProposalStore((s) => s.setSection);

  // safe copy
  const [items, setItems] = useState(() =>
    financialProposal.map((it) => ({ ...it })),
  );

  const updateItem = (index, field, value) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        particular: "",
        specification: "",
        boq: "",
        amount: "",
        description: "",
      },
    ]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const totalAmount = items.reduce((sum, it) => {
    const val = Number(it.amount) || 0;
    return sum + val;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("financialProposal", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Financial Proposal"
        subtitle="Define proposed items, specifications, and total cost."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="mb-4 p-4 border-l-4 border-teal-500 bg-teal-50/30 rounded"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8">
                  <Input
                    label="Particular Item"
                    value={it.particular}
                    onChange={(e) =>
                      updateItem(i, "particular", e.target.value)
                    }
                    maxLength={50}
                    required
                  />
                </div>

                <div className="md:col-span-4">
                  <Input
                    type="number"
                    label="Amount"
                    value={it.amount}
                    onChange={(e) =>
                      updateItem(i, "amount", Number(e.target.value))
                    }
                    min={1}
                    required
                  />
                </div>
              </div>

              <Input
                label="Specification"
                value={it.specification}
                onChange={(e) => updateItem(i, "specification", e.target.value)}
                maxLength={50}
                required
              />

              <Input
                type="number"
                label="BoQ (Bill of Quantities)"
                value={it.boq}
                onChange={(e) => updateItem(i, "boq", e.target.value)}
                required
              />

              <TextareaInput
                label="Description"
                rows={3}
                maxLength={200}
                value={it.description}
                onChange={(e) => updateItem(i, "description", e.target.value)}
                required
              />

              {items.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Delete Item"
                    onClick={() => removeItem(i)}
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            style={{ borderColor: "teal", color: "teal" }}
            title="+ Add New Line Item"
            onClick={addItem}
          />

          <Input
            label="Total Proposed Amount"
            type="number"
            value={totalAmount}
            readOnly
          />
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

export default FinancialForm;
