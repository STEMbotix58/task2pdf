import React from "react";
import { View } from "@react-pdf/renderer";
import SustainabilitySection from "../sections/SustainabilitySection";
import MonitoringSection from "../sections/MonitoringSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const SustainabilityAndMonitoringPage = () => {
  return (
    <PDFPageLayout>
      <View id="sustainability">
        <SectionTitle title="Sustainability & Scalability" />
        <SustainabilitySection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="monitoring-evaluation">
        <SectionTitle title="Monitoring & Evaluation Methodology" />
        <MonitoringSection />
      </View>
    </PDFPageLayout>
  );
};
