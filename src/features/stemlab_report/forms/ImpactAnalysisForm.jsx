import React, { useState } from "react";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

const ImpactAnalysisForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const impactAnalysis = useStemLabStore((state) => state.impactAnalysis);
  const setSection = useStemLabStore((state) => state.setSection);

  const [formData, setFormData] = useState(impactAnalysis);
  const [uploading, setUploading] = useState(false);

  const handleListChange = (index, field, value, listName) => {
    setFormData((prev) => {
      const updated = [...prev[listName]];
      updated[index] = { ...updated[index], [field]: value };

      return {
        ...prev,
        [listName]: updated,
      };
    });
  };

  const handleImageUpload = async (index, files) => {
    try {
      setUploading(true);

      const folderName = "stemlab-report/impact-analysis" + Date.now();

      const urls = await uploadImagesToCloudinary(files, folderName);

      setFormData((prev) => {
        const updated = [...prev.impacts];
        updated[index] = { ...updated[index], image: urls };

        return {
          ...prev,
          impacts: updated,
        };
      });
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      impacts: [...prev.impacts, { title: "", description: "", image: [] }],
    }));
  };

  const removeItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      impacts: prev.impacts.filter((_, i) => i !== index),
    }));
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("impactAnalysis", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Impact Analysis"
        subtitle="Provide STEMLab Report Conclusion."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <TextareaInput
          label="Objective"
          rows={4}
          value={formData.objective}
          maxLength={220}
          onChange={(e) => handleChange("objective", e.target.value)}
          required
        />

        <div>
          <h4 className="font-semibold mb-4">Impacts</h4>

          {formData.impacts.map((item, i) => (
            <div
              key={i}
              className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded"
            >
              <Input
                label="Title"
                value={item.title}
                maxLength={22}
                required
                onChange={(e) =>
                  handleListChange(i, "title", e.target.value, "impacts")
                }
              />

              <TextareaInput
                label="Description"
                rows={4}
                value={item.description}
                required
                maxLength={200}
                onChange={(e) =>
                  handleListChange(i, "description", e.target.value, "impacts")
                }
              />

              <ImageUploadField
                label="Image"
                id={`image-${i}`}
                name={`image-${i}`}
                value={item.image}
                onChange={(files) => handleImageUpload(i, files)}
                maxSelection={1}
                required={item.image.length > 0 ? false : true}
              />

              {formData.impacts.length > 1 && (
                <div className="flex justify-end">
                  <Button
                    type="button"
                    variant="danger"
                    title="Remove Impact"
                    onClick={() => removeItem(i)}
                  />
                </div>
              )}
            </div>
          ))}

          {formData.impacts.length < 4 && (
            <Button
              type="button"
              variant="outline"
              title="+ Add Impact"
              onClick={addItem}
            />
          )}
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

export default ImpactAnalysisForm;
