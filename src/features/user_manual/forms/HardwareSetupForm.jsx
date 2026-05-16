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

const HardwareSetupForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const hardwareSetup = useUserManualStore((state) => state.hardwareSetup);
  const setSection = useUserManualStore((state) => state.setSection);

  const [items, setItems] = useState(
    hardwareSetup?.length
      ? hardwareSetup
      : [
          {
            stepNumber: 1,
            title: "",
            description: "",
            image: [],
            notes: "",
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
        notes: "",
      },
    ]);
  };

  const removeItem = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    // Recalculate step numbers
    const renumbered = filtered.map((item, i) => ({
      ...item,
      stepNumber: i + 1,
    }));
    setItems(renumbered);
  };

  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/hardware-setup/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      updateItem(index, "image", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("hardwareSetup", items);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Hardware Setup"
        subtitle="Define the steps required for hardware setup and installation."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-purple-500 bg-purple-50/30 rounded"
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
                placeholder="e.g., Connect Power Supply"
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
                placeholder="Step-by-step instructions..."
                maxLength={1200}
              />

              <ImageUploadField
                label="Step Image"
                value={item.image || []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={5}
              />

              <TextareaInput
                label="Additional Notes (Optional)"
                rows={2}
                value={item.notes}
                onChange={(e) => updateItem(index, "notes", e.target.value)}
                placeholder="Any safety warnings or tips..."
                maxLength={500}
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
            style={{ borderColor: "#a855f7", color: "#a855f7" }}
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

export default HardwareSetupForm;
