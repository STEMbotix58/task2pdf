import React, { useState } from "react";
import { useProposalStore } from "@/features/proposal/model/proposalStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ProjectProposalForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const initialProposal = useProposalStore((s) => s.projectProposal);
  const setSection = useProposalStore((s) => s.setSection);

  // Safe local copy
  const [formData, setFormData] = useState(() => ({
    ...initialProposal,
    provision: initialProposal.provision.map((p) => ({ ...p })),
    objectives: initialProposal.objectives.map((o) => ({ ...o })),
  }));

  const { title, intro, provision, objectives } = formData;

  // ---------- BASIC FIELD ----------
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ---------- LIST UPDATE ----------
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

  const addItem = (listName, template) => {
    setFormData((prev) => ({
      ...prev,
      [listName]: [...prev[listName], template],
    }));
  };

  const removeItem = (listName, index) => {
    setFormData((prev) => ({
      ...prev,
      [listName]: prev[listName].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Commit once to Zustand
    setSection("projectProposal", formData);

    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Project Proposal"
        subtitle="Define project overview, services, and objectives."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-10">
          {/* Title & Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Project Title"
              value={title}
              maxLength={70}
              required
              onChange={(e) => handleChange("title", e.target.value)}
            />

            <Input
              label="Introduction"
              value={intro}
              required
              maxLength={150}
              onChange={(e) => handleChange("intro", e.target.value)}
            />
          </div>

          {/* Provision Section */}
          <div>
            <h4 className="font-semibold mb-4">Provision</h4>

            {provision.map((item, i) => (
              <div
                key={i}
                className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded"
              >
                <Input
                  label="Service Title"
                  value={item.title}
                  maxLength={70}
                  required
                  onChange={(e) =>
                    handleListChange(i, "title", e.target.value, "provision")
                  }
                />

                <TextareaInput
                  label="Service Content"
                  rows={4}
                  value={item.content}
                  required
                  onChange={(e) =>
                    handleListChange(i, "content", e.target.value, "provision")
                  }
                />

                {provision.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="danger"
                      title="Remove Provision"
                      onClick={() => removeItem("provision", i)}
                    />
                  </div>
                )}
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              style={{ borderColor: "blue", color: "blue" }}
              title="+ Add Provision"
              onClick={() => addItem("provision", { title: "", content: "" })}
            />
          </div>

          {/* Objectives Section */}
          <div>
            <h4 className="font-semibold mb-4">Objectives</h4>

            {objectives.map((obj, i) => (
              <div
                key={i}
                className="mb-4 p-4 border-l-4 border-green-500 bg-green-50/30 rounded"
              >
                <Input
                  label="Objective Title"
                  value={obj.name}
                  required
                  onChange={(e) =>
                    handleListChange(i, "name", e.target.value, "objectives")
                  }
                />

                <TextareaInput
                  label="Objective Description"
                  rows={3}
                  value={obj.description}
                  required
                  onChange={(e) =>
                    handleListChange(
                      i,
                      "description",
                      e.target.value,
                      "objectives",
                    )
                  }
                />

                {objectives.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="danger"
                      title="Remove Objective"
                      onClick={() => removeItem("objectives", i)}
                    />
                  </div>
                )}
              </div>
            ))}

            <Button
              type="button"
              variant="outline"
              title="+ Add Objective"
              style={{ borderColor: "green", color: "green" }}
              onClick={() =>
                addItem("objectives", { name: "", description: "" })
              }
            />
          </div>
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

export default ProjectProposalForm;
