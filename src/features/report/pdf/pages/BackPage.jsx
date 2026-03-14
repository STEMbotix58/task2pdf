import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import { backPageStyles } from "../styles/backPageStyles";
import STEMbotixLogo from "@/shared/assets/images/STEMbotix-Logo.png";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const BackPage = () => {
  return (
    <PDFPageLayout>
      <View id="back-page">
        <View style={backPageStyles.backContent}>
          <Text style={backPageStyles.thankYouText}>
            Thank you for your partnership in driving impact.
          </Text>

          <Text style={backPageStyles.conclusionNote}>
            This report was generated to summarize the progress and outcomes of
            our joint initiatives. For further inquiries regarding the data or
            future collaborations, please reach out to us.
          </Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
