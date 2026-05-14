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

const TroubleshootingFAQForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const troubleshootingFAQ = useUserManualStore(
    (state) => state.troubleshootingFAQ,
  );
  const setSection = useUserManualStore((state) => state.setSection);

  const [items, setItems] = useState(
    troubleshootingFAQ?.length
      ? troubleshootingFAQ
      : [{ question: "", answer: "", image: [] }],
  );

  const updateItem = (index, field, value) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, { question: "", answer: "", image: [] }]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/faq/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      updateItem(index, "image", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("troubleshootingFAQ", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Troubleshooting & FAQ"
        subtitle="Add frequently asked questions and troubleshooting tips."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-orange-500 bg-orange-50/30 rounded"
            >
              <Input
                label="Question"
                value={item.question}
                onChange={(e) => updateItem(index, "question", e.target.value)}
                placeholder="e.g., Why is my device not turning on?"
                maxLength={100}
                required
              />

              <TextareaInput
                label="Answer"
                rows={4}
                value={item.answer}
                onChange={(e) => updateItem(index, "answer", e.target.value)}
                placeholder="Provide a detailed answer or troubleshooting steps..."
                maxLength={1000}
                required
              />

              <ImageUploadField
                label="Reference Images"
                value={item.image || []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={2}
              />

              {items.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Delete FAQ"
                    onClick={() => removeItem(index)}
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            style={{ borderColor: "#f97316", color: "#f97316" }}
            title="+ Add New FAQ"
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

export default TroubleshootingFAQForm;
