import React from "react";
import { useProjectStore } from "@/features/project/model/projectStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

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
        image: "",
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
            <div key={index} className="border p-4 rounded-xl space-y-4">
              <Input
                label="Name"
                id="name"
                name="name"
                value={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                required
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
              />

              {/* IMAGE FIELD */}
              <ImageUploadField
                label="Upload Image"
                value={item.image ? [item.image] : []}
                onChange={(files) => handleImageChange(index, files)}
                maxSelection={1}
              />

              {preface.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEntry(index)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={addEntry}
            className="px-4 py-2 border rounded-lg"
          >
            + Add Preface
          </button>
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

export default PrefaceForm;
