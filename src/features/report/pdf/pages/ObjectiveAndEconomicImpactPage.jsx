import React from "react";
import { View } from "@react-pdf/renderer";
import ObjectivesSection from "../sections/ObjectivesSection";
import EconomicSection from "../sections/EconomicSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

const isEmptyText = (text) => !text || text.trim() === "";

const isEmptyNumber = (n) =>
  n === "" || n === null || n === undefined || Number.isNaN(n);

const isEconomicImpactEmpty = (e) => {
  return (
    isEmptyText(e.employabilityEnhancement) &&
    isEmptyText(e.incomeOpportunities) &&
    isEmptyNumber(e.costPerBeneficiary) &&
    isEmptyNumber(e.roi)
  );
};

export const ObjectiveAndEconomicImpactPage = ({ data }) => {
  const hideEconomic = isEconomicImpactEmpty(data.economicImpact);

  return (
    <PDFPageLayout>
      <View id="objectives">
        <SectionTitle title="Objectives & Intended Outcomes" />
        <ObjectivesSection />
      </View>

      <View style={{ marginTop: 20 }} />

      {!hideEconomic && (
        <View id="economic-impact">
          <SectionTitle title="Economic Impact" />
          <EconomicSection />
        </View>
      )}
    </PDFPageLayout>
  );
};
