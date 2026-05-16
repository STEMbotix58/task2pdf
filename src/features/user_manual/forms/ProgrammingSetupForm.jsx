import React, { useState } from "react";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";
import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const ProgrammingSetupForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const programmingSetup = useUserManualStore(
    (state) => state.programmingSetup,
  );
  const setSection = useUserManualStore((state) => state.setSection);

  const [items, setItems] = useState(
    programmingSetup?.length
      ? programmingSetup
      : [
          {
            stepNumber: 1,
            title: "",
            description: "",
            image: [],
            codeSnippet: "",
            syntaxLabel: "",
            explanation: "",
          },
        ],
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
        stepNumber: prev.length + 1,
        title: "",
        description: "",
        image: [],
        codeSnippet: "",
        syntaxLabel: "",
        explanation: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    const renumbered = filtered.map((item, i) => ({
      ...item,
      stepNumber: i + 1,
    }));
    setItems(renumbered);
  };

  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/programming-setup/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      updateItem(index, "image", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("programmingSetup", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Programming Setup"
        subtitle="Define programming steps with code snippets and explanations."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-green-500 bg-green-50/30 rounded"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Step Number
                  </label>
                  <input
                    type="number"
                    value={item.stepNumber}
                    disabled
                    className="w-full px-3 py-2 bg-gray-100 text-gray-600 rounded border border-gray-300"
                  />
                </div>
              </div>

              <Input
                label="Title"
                value={item.title}
                onChange={(e) => updateItem(index, "title", e.target.value)}
                placeholder="e.g., Install Arduino IDE"
                maxLength={60}
                required={false}
              />

              <TextareaInput
                label="Description"
                rows={3}
                value={item.description}
                onChange={(e) =>
                  updateItem(index, "description", e.target.value)
                }
                placeholder="Step description..."
                maxLength={500}
              />

              <ImageUploadField
                label="Screenshots/Diagrams"
                value={item.image || []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={3}
              />

              <Input
                label="Programming Language/Syntax Label"
                value={item.syntaxLabel}
                onChange={(e) =>
                  updateItem(index, "syntaxLabel", e.target.value)
                }
                placeholder="e.g., Arduino C, Python, JavaScript"
                maxLength={40}
                required={false}
              />

              <TextareaInput
                label="Code Snippet"
                rows={4}
                value={item.codeSnippet}
                onChange={(e) =>
                  updateItem(index, "codeSnippet", e.target.value)
                }
                placeholder="Paste code snippet here..."
                maxLength={1500}
              />

              <TextareaInput
                label="Code Explanation"
                rows={3}
                value={item.explanation}
                onChange={(e) =>
                  updateItem(index, "explanation", e.target.value)
                }
                placeholder="Explain what the code does..."
                maxLength={800}
              />

              {items.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Delete Step"
                    onClick={() => removeItem(index)}
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            style={{ borderColor: "#22c55e", color: "#22c55e" }}
            title="+ Add New Step"
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

export default ProgrammingSetupForm;
