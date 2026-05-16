import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import Input from "@/shared/components/ui/Input";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const AbbreviationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const abbreviations = useUserManualStore((state) => state.abbreviations);
  const setSection = useUserManualStore((state) => state.setSection);

  const [items, setItems] = useState(
    abbreviations?.length ? abbreviations : [{ shortForm: "", fullForm: "" }],
  );

  const updateItem = (index, field, value) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, { shortForm: "", fullForm: "" }]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("abbreviations", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="What's in the Kit"
        subtitle="List all items that come with your product."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-b-purple-700 bg-blue-50/30 rounded"
            >
              <Input
                label="Short Form"
                value={item.shortForm}
                onChange={(e) => updateItem(index, "shortForm", e.target.value)}
                placeholder="e.g., BO"
                maxLength={80}
                required
              />

              <Input
                label="Full Form"
                value={item.fullForm}
                onChange={(e) => updateItem(index, "fullForm", e.target.value)}
                placeholder="e.g., Battery Operated"
                maxLength={80}
                required
              />

              {items.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Delete Item"
                    onClick={() => removeItem(index)}
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            style={{ borderColor: "#3b82f6", color: "#3b82f6" }}
            title="+ Add New Item"
            onClick={addItem}
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

export default AbbreviationForm;
