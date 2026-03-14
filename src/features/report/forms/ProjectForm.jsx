import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import TextareaInput from "@/shared/components/ui/TextareaInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const ProjectForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const projectOverview = useReportStore((state) => state.projectOverview);

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(projectOverview);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("projectOverview", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Project Overview"
        subtitle="Define core project information, scope, and timeline."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Input
              label="Project Title"
              value={formData.projectTitle}
              maxLength={60}
              required
              placeholder="Enter a descriptive project name"
              onChange={(e) => handleChange("projectTitle", e.target.value)}
            />
          </div>

          <Input
            label="Implementing Organization"
            value={formData.implementingOrganization}
            maxLength={40}
            required
            onChange={(e) =>
              handleChange("implementingOrganization", e.target.value)
            }
          />

          <Input
            label="Partner / Sponsor"
            value={formData.partnerSponsor}
            maxLength={40}
            required
            onChange={(e) => handleChange("partnerSponsor", e.target.value)}
          />

          <Input
            type="number"
            label="Project Duration (Months)"
            value={formData.projectDuration}
            min={1}
            required
            placeholder="e.g. 12"
            onChange={(e) => handleChange("projectDuration", e.target.value)}
          />

          <Input
            label="Location"
            value={formData.location}
            maxLength={40}
            required
            onChange={(e) => handleChange("location", e.target.value)}
          />

          <Input
            type="date"
            label="Start Date"
            value={formData.startDate || ""}
            max={formData.endDate}
            required
            onChange={(e) => handleChange("startDate", e.target.value)}
          />

          <Input
            type="date"
            label="End Date"
            value={formData.endDate || ""}
            min={formData.startDate}
            required
            onChange={(e) => handleChange("endDate", e.target.value)}
          />

          <div className="md:col-span-2">
            <Input
              label="Target Beneficiaries"
              value={formData.targetBeneficiaries}
              maxLength={200}
              required
              onChange={(e) =>
                handleChange("targetBeneficiaries", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <TextareaInput
              label="Problem Statement"
              rows={5}
              value={formData.problemStatement}
              maxLength={1000}
              required
              placeholder="Describe the challenges this project addresses..."
              onChange={(e) => handleChange("problemStatement", e.target.value)}
            />
          </div>
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

export default ProjectForm;
