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

  const navigate = useNavigate();

  const getLatestStoreData = () => useStore.getState();
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

  const generatePDF = async () => {
    if (!PDFComponent) return;

    setIsGenerating(true);

    try {
      const latestData = getLatestStoreData();

      if (onBeforeGenerate) {
        await onBeforeGenerate(latestData);
      }

      // Give React time to re-render PDFDownloadLink with fresh data
      setTimeout(() => {
        const btn = document.getElementById("pdf-download-btn");

        if (!btn) {
          console.error("Download button not found");
          setIsGenerating(false);
          return;
        }

        btn.click();
        setIsGenerating(false);
        // navigate("/");
      }, 300);
    } catch (err) {
      console.error("Error before PDF generation:", err);
      setIsGenerating(false);
      alert(`PDF generation failed: ${err.message}`);
    } finally {
      setTimeout(() => {
        navigate("/");
      }, 300);
    }
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

      {/* ONLY ONE PDF SYSTEM */}
      {PDFComponent && (
        <PDFDownloadLink
          id="pdf-download-btn"
          document={
            <PDFComponent data={getLatestStoreData()} {...extraContext} />
          }
          fileName={fileName}
          style={{ display: "none" }}
        >
          {({ loading }) => (loading ? "Preparing..." : "Download")}
        </PDFDownloadLink>
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
