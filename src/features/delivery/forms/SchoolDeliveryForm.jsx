import React, { useState } from "react";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const SchoolDeliveryForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const schoolDelivery = useDeliveryStore((state) => state.schoolDelivery);

  const setSection = useDeliveryStore((state) => state.setSection);

  const [formData, setFormData] = useState(schoolDelivery);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("schoolDelivery", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="School Delivery Information"
        subtitle="Provide details of delivery, installation, and acknowledgment."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* School Name */}
          <div className="md:col-span-2">
            <Input
              label="School Name"
              type="text"
              id="schoolName"
              value={formData.schoolName}
              maxLength={80}
              onChange={(e) => handleChange("schoolName", e.target.value)}
              placeholder="School Name"
              required
            />
          </div>

          {/* School Address */}
          <div className="md:col-span-2">
            <Input
              label="School Address"
              type="text"
              id="schoolAddress"
              value={formData.schoolAddress}
              maxLength={120}
              onChange={(e) => handleChange("schoolAddress", e.target.value)}
              placeholder="School Address"
              required
            />
          </div>

          {/* Delivered & Installed By */}
          <Input
            label="Delivered & Installed By"
            type="text"
            id="deliveredAndInstalledBy"
            value={formData.deliveredAndInstalledBy}
            maxLength={60}
            onChange={(e) =>
              handleChange("deliveredAndInstalledBy", e.target.value)
            }
            placeholder="Delivered & Installed By"
            required
          />

          {/* Delivered By Contact No */}
          <Input
            label="Delivered By Contact No"
            type="text"
            id="deliveredByContactNo"
            value={formData.deliveredByContactNo}
            onChange={(e) =>
              handleChange("deliveredByContactNo", e.target.value)
            }
            placeholder="Delivered By Contact No"
            required
          />

          {/* Received By */}
          <Input
            label="Received By"
            type="text"
            id="receivedBy"
            value={formData.receivedBy}
            maxLength={60}
            onChange={(e) => handleChange("receivedBy", e.target.value)}
            placeholder="Received By"
            required
          />

          {/* Received By Contact No */}
          <Input
            label="Received By Contact No"
            type="text"
            id="receivedByContactNo"
            value={formData.receivedByContactNo}
            onChange={(e) =>
              handleChange("receivedByContactNo", e.target.value)
            }
            placeholder="Received By Contact No"
            required
          />
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

export default SchoolDeliveryForm;
