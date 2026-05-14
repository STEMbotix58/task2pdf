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

const WhatsInTheKitForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const whatsInTheKit = useUserManualStore((state) => state.whatsInTheKit);
  const setSection = useUserManualStore((state) => state.setSection);

  const [items, setItems] = useState(
    whatsInTheKit?.length
      ? whatsInTheKit
      : [{ itemName: "", description: "", image: [] }],
  );

  const updateItem = (index, field, value) => {
    setItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const addItem = () => {
    setItems((prev) => [...prev, { itemName: "", description: "", image: [] }]);
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "user-manual/kit-items/" + Date.now();
      const urls = await uploadImagesToCloudinary(files, folderName);
      updateItem(index, "image", urls);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("whatsInTheKit", items);
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
              className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded"
            >
              <Input
                label="Item Name"
                value={item.itemName}
                onChange={(e) => updateItem(index, "itemName", e.target.value)}
                placeholder="e.g., STEM Microcontroller"
                maxLength={50}
                required
              />

              <TextareaInput
                label="Description"
                rows={3}
                value={item.description}
                onChange={(e) =>
                  updateItem(index, "description", e.target.value)
                }
                placeholder="Describe what this item is and its purpose..."
                maxLength={500}
              />

              <ImageUploadField
                label="Item Image"
                value={item.image || []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={1}
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

export default WhatsInTheKitForm;
