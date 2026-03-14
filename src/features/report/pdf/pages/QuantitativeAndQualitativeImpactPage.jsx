import React from "react";
import { View } from "@react-pdf/renderer";
import QualitativeSection from "../sections/QualitativeSection";
import QuantitativeSection from "../sections/QuantitativeSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const QuantitativeAndQualitativeImpactPage = () => {
  return (
    <PDFPageLayout>
      <View id="qualitative-impact">
        <SectionTitle title="Qualitative Impact & Behavioral Change" />
        <QualitativeSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="quantitative-impact">
        <SectionTitle title="Quantitative Impact" />
        <QuantitativeSection />
      </View>
    </PDFPageLayout>
  );
};
