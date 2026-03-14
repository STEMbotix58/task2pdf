import React, { useState } from "react";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const VerificationForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const verification = useDeliveryStore((state) => state.verification);

  const setSection = useDeliveryStore((state) => state.setSection);

  const [formData, setFormData] = useState(verification);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("verification", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Verification and Authorization"
        subtitle="Confirm and authorize delivery completion details."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="School Authority Name"
            type="text"
            id="schoolAuthorityName"
            value={formData.schoolAuthorityName}
            maxLength={60}
            placeholder="Enter Authority Name"
            onChange={(e) =>
              handleChange("schoolAuthorityName", e.target.value)
            }
            required
          />

          <Input
            label="School Authority Designation"
            type="text"
            id="schoolAuthorityDesignation"
            value={formData.schoolAuthorityDesignation}
            maxLength={80}
            placeholder="Enter Authority Designation"
            onChange={(e) =>
              handleChange("schoolAuthorityDesignation", e.target.value)
            }
            required
          />

          <Input
            label="Stembotix Representative Name"
            type="text"
            id="stembotixRepresentativeName"
            value={formData.stembotixRepresentativeName}
            maxLength={60}
            placeholder="Enter Representative Name"
            onChange={(e) =>
              handleChange("stembotixRepresentativeName", e.target.value)
            }
            required
          />

          <Input
            label="Yuva Coordinator Name"
            type="text"
            id="yuvaCoordinatorName"
            value={formData.yuvaCoordinatorName}
            maxLength={60}
            placeholder="Enter Coordinator Name"
            onChange={(e) =>
              handleChange("yuvaCoordinatorName", e.target.value)
            }
          />

          <Input
            label="Verification Date"
            type="date"
            id="verificationDate"
            value={formData.verificationDate}
            onChange={(e) => handleChange("verificationDate", e.target.value)}
          />
        </div>

        <div className="mt-8">
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

export default VerificationForm;
