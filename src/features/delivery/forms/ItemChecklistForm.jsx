import { useEffect, useState } from "react";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

import { useExcelParser } from "@/shared/hooks/useExcelParser";
import { useDeliveryStore } from "../model/deliveryStore";

const ItemChecklistForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
  setItems,
}) => {
  const [localItems, setLocalItems] = useState([]);
  const items = useDeliveryStore((state) => state.items);

  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const { parseFile, isProcessing } = useExcelParser((items) => {
    setLocalItems(items);
    setItems(items);
  });

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    parseFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (localItems.length === 0) {
      alert("Please upload an Excel file before continuing.");
      return;
    }

    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Item Checklist"
        subtitle="Upload the Excel file containing the delivery item list."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="labelClass">Upload Item List (Excel)</label>
            <input
              type="file"
              className="fileInputClass"
              accept=".xlsx,.xls"
              onChange={handleFileUpload}
              required={localItems ? false : true}
            />
            {localItems.length > 0 && (
              <p className="mt-2 text-blue-600 font-semibold">
                No Preview: {localItems.length} items loaded
              </p>
            )}
          </div>
        </div>

        {isProcessing && (
          <p className="text-sm text-gray-500 mt-3">Processing Excel file...</p>
        )}

        <ButtonGroup
          prevStep={prevStep}
          nextStep={nextStep}
          generatePDF={generatePDF}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating || isProcessing}
        />
      </form>
    </FormContainer>
  );
};

export default ItemChecklistForm;
