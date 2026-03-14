import React from "react";
import { View } from "@react-pdf/renderer";
import SocialSection from "../sections/SocialSection";
import InnovationSection from "../sections/InnovationSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const SocialAndInnovationImpactPage = () => {
  return (
    <PDFPageLayout>
      <View id="social-impact">
        <SectionTitle title="Social Impact" />
        <SocialSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="innovation-impact">
        <SectionTitle title="Innovation & Technology Impact" />
        <InnovationSection />
      </View>
    </PDFPageLayout>
  );
};
