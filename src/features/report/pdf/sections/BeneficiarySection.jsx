import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { beneficiaryStyles } from "../styles/beneficiaryStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const GenderBar = ({ label, percentage }) => {
  const colors = {
    female: "#ec4899",
    male: "#3b82f6",
    other: "#94a3b8",
  };
  const color = colors[label.toLowerCase()] || colors.other;

  return (
    <View style={beneficiaryStyles.genderBarContainer}>
      <View style={beneficiaryStyles.genderBarHeader}>
        <Text style={beneficiaryStyles.genderBarLabel}>
          {label.toUpperCase()}
        </Text>
        <Text style={beneficiaryStyles.genderBarPercentage}>{percentage}%</Text>
      </View>
      <View style={beneficiaryStyles.genderBarBg}>
        <View
          style={[
            beneficiaryStyles.genderBarFill,
            { width: `${percentage}%`, backgroundColor: color },
          ]}
        />
      </View>
    </View>
  );
};

const BeneficiarySection = () => {
  const {
    totalBeneficiaries,
    ageGroup,
    educationBackground,
    genderDistribution = {},
    geographicCoverage,
    socioEconomicBackground,
  } = useReportStore((state) => state.beneficiaryProfile || {});

  return (
    <>
      <View style={beneficiaryStyles.statsRow}>
        <View style={beneficiaryStyles.mainStatBox}>
          <Text style={beneficiaryStyles.statLabel}>TOTAL BENEFICIARIES</Text>
          <Text style={beneficiaryStyles.statValue}>{totalBeneficiaries}</Text>
          <Text style={beneficiaryStyles.statSubtext}>
            (Direct & Indirect Impact)
          </Text>
        </View>

        <View style={beneficiaryStyles.sideStatBox}>
          <Text style={beneficiaryStyles.statLabel}>PRIMARY AGE GROUP</Text>
          <Text style={beneficiaryStyles.statValueSmall}>
            {ageGroup?.toLowerCase().replace("years", "").replace("year", "")}{" "}
            Years
          </Text>
        </View>
      </View>

      <View style={beneficiaryStyles.mainGrid}>
        <View style={beneficiaryStyles.column}>
          <View style={beneficiaryStyles.sectionCard}>
            <Text style={beneficiaryStyles.cardHeader}>
              GENDER DISTRIBUTION
            </Text>
            {Object.entries(genderDistribution).map(([label, value], i) => (
              <GenderBar key={i} label={label} percentage={value} />
            ))}
          </View>

          <View style={[beneficiaryStyles.sectionCard, { marginTop: 15 }]}>
            <Text style={beneficiaryStyles.cardHeader}>
              EDUCATIONAL BACKGROUND
            </Text>
            <Text style={beneficiaryStyles.bodyText}>
              {educationBackground}
            </Text>
          </View>
        </View>

        <View style={beneficiaryStyles.column}>
          <View style={beneficiaryStyles.sectionCard}>
            <Text style={beneficiaryStyles.cardHeader}>
              SOCIO-ECONOMIC PROFILE
            </Text>
            <Text style={beneficiaryStyles.bodyText}>
              {socioEconomicBackground}
            </Text>
          </View>

          <View
            style={[
              beneficiaryStyles.sectionCard,
              { marginTop: 15, backgroundColor: "#f0f9ff" },
            ]}
          >
            <Text style={beneficiaryStyles.cardHeader}>
              GEOGRAPHIC COVERAGE
            </Text>
            <Text style={[beneficiaryStyles.bodyText, { color: "#0369a1" }]}>
              {geographicCoverage}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default BeneficiarySection;
