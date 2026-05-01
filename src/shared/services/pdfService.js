import React from "react";
import { pdf } from "@react-pdf/renderer";

export const generatePdfBlob = async (PdfComponent, props = {}) => {
  if (!PdfComponent) {
    throw new Error("PDF component is required to generate a PDF blob.");
  }

  const element = React.createElement(PdfComponent, props);
  const blob = await pdf(element).toBlob();

  if (!blob) {
    throw new Error("PDF generation returned an empty blob.");
  }

  return blob;
};
