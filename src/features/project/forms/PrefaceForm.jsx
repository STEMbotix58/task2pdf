import React from "react";
import { useProjectStore } from "@/features/project/model/projectStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";
import Button from "@/shared/components/ui/Button";

const PrefaceForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const preface = useProjectStore((state) => state.preface);
  const setSection = useProjectStore((state) => state.setSection);

  const handleChange = (index, field, value) => {
    const updated = [...preface];
    updated[index][field] = value;
    setSection("preface", updated);
  };

  // Handle image separately (IMPORTANT)
  const handleImageChange = async (index, files) => {
    if (!files || files.length === 0) return;

    try {
      const folderName = "preface-" + Date.now();

      const [url] = await uploadImagesToCloudinary(files, folderName);

      handleChange(index, "image", url);
    } catch (err) {
      console.error(err);
      alert("Image upload failed");
    }
  };

  const addEntry = () => {
    setSection("preface", [
      ...preface,
      {
        name: "",
        designation: "",
        testimonial: "",
        image: [],
      },
    ]);
  };

  const removeEntry = (index) => {
    const updated = preface.filter((_, i) => i !== index);
    setSection("preface", updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader title="Preface" subtitle="Add testimonials with image." />

      <form onSubmit={handleSubmit}>
        <div className="space-y-8">
          {preface.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded"
            >
              <Input
                label="Name"
                id="name"
                name="name"
                value={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                required
                maxLength={35}
              />

              <Input
                label="Designation"
                id="designation"
                name="designation"
                value={item.designation}
                onChange={(e) =>
                  handleChange(index, "designation", e.target.value)
                }
                required
                maxLength={45}
              />

              <TextareaInput
                label="Testimonial"
                id="testimonial"
                name="testimonial"
                rows={3}
                value={item.testimonial}
                onChange={(e) =>
                  handleChange(index, "testimonial", e.target.value)
                }
                required
                maxLength={560}
              />

              {/* IMAGE FIELD */}
              <ImageUploadField
                label="Upload Image"
                value={item.image ? [item.image] : []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={1}
                required={item.image.length > 0 ? false : true}
              />

              {preface.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Remove"
                    onClick={() => removeEntry(index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          style={{ borderColor: "blue", color: "blue" }}
          title="+ Add Preface"
          onClick={addEntry}
        />

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

export default PrefaceForm;
