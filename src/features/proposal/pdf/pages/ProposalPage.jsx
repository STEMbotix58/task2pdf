import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { proposalPageStyles } from "../styles/proposalPageStyles";

export const ProposalPage = () => {
  const { to, subject, description, date, salutation } = useProposalStore(
    (state) => state.proposal,
  );

  return (
    <PDFPageLayout>
      <View id="proposal">
        {/* Date Section */}
        <Text style={proposalPageStyles.dateText}>Date: {date}</Text>

        {/* Recipient Section */}
        <View style={proposalPageStyles.recipientBlock}>
          <Text style={proposalPageStyles.toLabel}>To,</Text>
          <Text style={proposalPageStyles.toValue}>{to}</Text>
        </View>

        {/* Subject Section */}
        <View style={proposalPageStyles.subjectBox}>
          <Text style={proposalPageStyles.subjectText}>Subject: {subject}</Text>
        </View>

        {/* Content Section */}
        <Text style={proposalPageStyles.salutation}>{salutation},</Text>

        {/* We split description by new lines to maintain paragraph spacing */}
        {description?.split("\n").map((paragraph, index) => (
          <Text key={index} style={proposalPageStyles.bodyText}>
            {paragraph}
          </Text>
        ))}
      </View>
    </PDFPageLayout>
  );
};
