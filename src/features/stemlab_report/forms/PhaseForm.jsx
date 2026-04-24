import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

const PhaseForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const phase = useStemLabStore((state) => state.phase);
  const setSection = useStemLabStore((state) => state.setSection);

  const [items, setItems] = useState(
    phase?.length
      ? phase
      : [
          {
            title: "",
            description: "",
            images: [],
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
    setItems((prev) => [...prev, { title: "", description: "", images: [] }]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "phase-" + Date.now();

      const urls = await uploadImagesToCloudinary(files, folderName);

      updateItem(index, "images", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("phase", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Phase" />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-teal-500 bg-teal-50/30 rounded"
            >
              <Input
                label="Title"
                value={item.title}
                onChange={(e) => updateItem(index, "title", e.target.value)}
                maxLength={50}
                required
              />

              <TextareaInput
                label="Description"
                minParagraph={index > 1 && 3}
                rows={3}
                value={item.description}
                onChange={(e) =>
                  updateItem(index, "description", e.target.value)
                }
                maxLength={index > 1 ? 800 : 600}
                required
              />

              <ImageUploadField
                label="Upload Image"
                value={item.images || []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={index > 1 ? 3 : 5}
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
            style={{ borderColor: "teal", color: "teal" }}
            title="+ Add New Phase"
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

export default PhaseForm;
