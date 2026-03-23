import React, { useState, Suspense, useMemo } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";

const Stepper = ({
  steps = [],
  useStore,
  pdfComponent: PDFComponent,
  fileName = "document.pdf",
  containerClass = "",
  extraContext = {},
  onBeforeGenerate,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const getLatestStoreData = () => useStore.getState();

  const navigate = useNavigate();

  const totalSteps = useMemo(() => steps.length - 1, [steps]);

  if (!steps.length) return null;
  if (!steps[currentStep]?.component) return null;

  const ActiveStep = steps[currentStep];
  const ActiveForm = ActiveStep.component;

  const nextStep = () => {
    setCurrentStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // PDF Generation Handler with optional database save
  const generatePDF = async () => {
    if (!PDFComponent) return;

    setIsGenerating(true);

    try {
      // If a save function is provided, save to database first
      if (onBeforeGenerate) {
        const latestData = getLatestStoreData(); // ALWAYS FRESH
        await onBeforeGenerate(latestData);
      }

      // EXISTING: Then generate PDF (unchanged)
      setTimeout(() => {
        const btn = document.getElementById("pdf-download-btn");
        btn?.click();
        setIsGenerating(false);
      }, 500);
    } catch (err) {
      console.error("Error during submission:", err);
      setIsGenerating(false);
      alert(
        "Warning: Could not save to database, but PDF will still generate.\n\nError: " +
          err.message,
      );
    }
    navigate("/");
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-2xl relative ${containerClass}`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <ActiveForm
          {...ActiveStep.props}
          {...extraContext}
          nextStep={nextStep}
          prevStep={prevStep}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === totalSteps}
          generatePDF={generatePDF}
          isGenerating={isGenerating}
        />
      </Suspense>

      {PDFComponent && (
        <Suspense fallback={null}>
          <PDFDownloadLink
            id="pdf-download-btn"
            document={
              <PDFComponent data={getLatestStoreData()} {...extraContext} />
            }
            fileName={fileName}
            style={{ display: "none" }}
          >
            Download
          </PDFDownloadLink>
        </Suspense>
      )}

      {isGenerating && (
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center z-50">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-white mt-3 font-semibold">Generating PDF...</p>
        </div>
      )}
    </div>
  );
};

export default Stepper;
