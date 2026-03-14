import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { coverPageStyles } from "../styles/coverPageStyles";

export const CoverPage = () => {
  const { to, subject, date } = useProposalStore((state) => state.proposal);

  return (
    <PDFPageLayout>
      <View style={coverPageStyles.container}>
        {/* TOP BRAND BLOCK */}
        <View style={coverPageStyles.topDecoration}>
          <Text style={coverPageStyles.companyName}>STEMbotix</Text>
          <Text style={coverPageStyles.mainTitle}>Project Proposal</Text>
          <Text style={coverPageStyles.subTitle}>
            Empowering the Next Generation of Innovators
          </Text>
        </View>

        {/* DETAILS */}
        <View style={coverPageStyles.detailsSection}>
          <View style={coverPageStyles.infoRow}>
            <Text style={coverPageStyles.label}>Prepared For</Text>
            <Text style={coverPageStyles.value}>
              {to || "Valued Institution"}
            </Text>
          </View>

          <View style={coverPageStyles.infoRow}>
            <Text style={coverPageStyles.label}>Subject</Text>
            <Text style={coverPageStyles.value}>
              {subject || "STEM Lab Setup & Implementation"}
            </Text>
          </View>

          <View style={coverPageStyles.infoRow}>
            <Text style={coverPageStyles.label}>Date</Text>
            <Text style={coverPageStyles.value}>{date || "-"}</Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
