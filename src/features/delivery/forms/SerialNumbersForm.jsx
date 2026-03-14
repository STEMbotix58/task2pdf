import React, { useState } from "react";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import Button from "@/shared/components/ui/Button";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const SerialNumbersForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const serialNumbers = useDeliveryStore((state) => state.serialNumbers);
  const setSection = useDeliveryStore((state) => state.setSection);

  const [formData, setFormData] = useState(serialNumbers);

  const printers = formData.printers;
  const laptops = formData.laptops;

  const updatePrinter = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.printers];
      updated[index] = value;

      return {
        ...prev,
        printers: updated,
      };
    });
  };

  const addPrinter = () => {
    setFormData((prev) => ({
      ...prev,
      printers: [...prev.printers, ""],
    }));
  };

  const removePrinter = (index) => {
    setFormData((prev) => ({
      ...prev,
      printers: prev.printers.filter((_, i) => i !== index),
    }));
  };

  const updateLaptop = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.laptops];
      updated[index] = value;

      return {
        ...prev,
        laptops: updated,
      };
    });
  };

  const addLaptop = () => {
    setFormData((prev) => ({
      ...prev,
      laptops: [...prev.laptops, ""],
    }));
  };

  const removeLaptop = (index) => {
    setFormData((prev) => ({
      ...prev,
      laptops: prev.laptops.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("serialNumbers", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Serial Numbers"
        subtitle="Enter serial numbers for all delivered devices."
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-10">
          {/* ================= Printers ================= */}
          <div>
            <h4 className="font-semibold mb-4">3D Printers</h4>

            {printers.map((item, index) => (
              <div
                key={index}
                className="mb-4 p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded"
              >
                <Input
                  type="text"
                  value={item}
                  placeholder="Printer Serial Number"
                  onChange={(e) => updatePrinter(index, e.target.value)}
                  required
                />
                {printers.length > 1 && (
                  <Button
                    title="Remove"
                    type="button"
                    variant="danger"
                    onClick={() => removePrinter(index)}
                    style={{ marginTop: "8px" }}
                  />
                )}
              </div>
            ))}

            <Button
              title="+ Add Printer"
              type="button"
              style={{ borderColor: "blue", color: "blue" }}
              variant="outline"
              onClick={addPrinter}
            />
          </div>

          {/* ================= Laptops ================= */}
          <div>
            <h4 className="font-semibold mb-4">Laptops</h4>

            {laptops.map((item, index) => (
              <div
                key={index}
                className="mb-4 p-4 border-l-4 border-green-500 bg-green-50/30 rounded"
              >
                <Input
                  type="text"
                  value={item}
                  placeholder="Laptop Serial Number"
                  onChange={(e) => updateLaptop(index, e.target.value)}
                  required
                />
                {laptops.length > 1 && (
                  <Button
                    title="Remove"
                    type="button"
                    variant="danger"
                    onClick={() => removeLaptop(index)}
                    style={{ marginTop: "8px" }}
                  />
                )}
              </div>
            ))}

            <Button
              title="+ Add Laptop"
              type="button"
              style={{ borderColor: "green", color: "green" }}
              variant="outline"
              onClick={addLaptop}
            />
          </div>
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

export default SerialNumbersForm;
