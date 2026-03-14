import React, { useState } from "react";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const DeliveryBasicInfoForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const deliveryBasicInfo = useDeliveryStore(
    (state) => state.deliveryBasicInfo,
  );

  const setSection = useDeliveryStore((state) => state.setSection);

  const [formData, setFormData] = useState(deliveryBasicInfo);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("deliveryBasicInfo", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Delivery Basic Info"
        subtitle="Provide core delivery and purchase order details."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div className="md:col-span-2">
            <Input
              label="Date"
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              required
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <Input
              label="Subject"
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Describe Subject..."
              required
            />
          </div>

          {/* Purchase Order No */}
          <Input
            label="Purchase Order No"
            type="number"
            id="purchaseOrderNo"
            value={formData.purchaseOrderNo}
            onChange={(e) => handleChange("purchaseOrderNo", e.target.value)}
            placeholder="Purchase Order No"
            required
          />

          {/* Purchase Order Date */}
          <Input
            label="Purchase Order Date"
            type="date"
            id="purchaseOrderDate"
            value={formData.purchaseOrderDate}
            onChange={(e) => handleChange("purchaseOrderDate", e.target.value)}
            required
          />

          {/* Project Name */}
          <div className="md:col-span-2">
            <Input
              label="Project Name"
              type="text"
              id="projectName"
              value={formData.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
              maxLength={150}
              placeholder="Project Name"
              required
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

export default DeliveryBasicInfoForm;
