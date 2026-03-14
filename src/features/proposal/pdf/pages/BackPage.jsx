import React from "react";
import { Text, View } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { backPageStyles } from "../styles/backPageStyles";

export const BackPage = () => {
  return (
    <PDFPageLayout>
      <View style={backPageStyles.container}>
        {/* CENTER CONTENT */}
        <View style={backPageStyles.centerContent}>
          <Text style={backPageStyles.thankYou}>Thank You</Text>

          <Text style={backPageStyles.message}>
            We appreciate the opportunity to present this proposal.{"\n"}
            We look forward to collaborating and building an innovative future
            together.
          </Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
