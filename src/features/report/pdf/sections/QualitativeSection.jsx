import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { qualitativeStyles } from "../styles/qualitativeStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const QuantitativeSection = () => {
  const {
    participantsTrained,
    attendanceRate,
    completionRate,
    certificationsAchieved,
    assessmentImprovement,
  } = useReportStore((state) => state.quantitativeImpact || {});

  return (
    <View style={qualitativeStyles.container}>
      <View style={qualitativeStyles.heroRow}>
        <View style={qualitativeStyles.heroBox}>
          <Text style={qualitativeStyles.heroLabel}>PARTICIPANTS TRAINED</Text>
          <Text style={qualitativeStyles.heroValue}>{participantsTrained}</Text>
        </View>
        <View
          style={[qualitativeStyles.heroBox, { backgroundColor: "#3b82f6" }]}
        >
          <Text style={[qualitativeStyles.heroLabel, { color: "#bfdbfe" }]}>
            CERTIFICATIONS ACHIEVED
          </Text>
          <Text style={[qualitativeStyles.heroValue, { color: "#ffffff" }]}>
            {certificationsAchieved}
          </Text>
        </View>
      </View>

      <View style={qualitativeStyles.progressSection}>
        <Text style={qualitativeStyles.sectionTitle}>
          Key Performance Indicators (KPIs)
        </Text>

        <View style={qualitativeStyles.metricItem}>
          <View style={qualitativeStyles.metricHeader}>
            <Text style={qualitativeStyles.metricName}>
              Attendance / Retention Rate
            </Text>
            <Text style={qualitativeStyles.metricPercent}>
              {attendanceRate}%
            </Text>
          </View>
          <View style={qualitativeStyles.progressBarBg}>
            <View
              style={[
                qualitativeStyles.progressBarFill,
                { width: `${attendanceRate}%`, backgroundColor: "#f59e0b" },
              ]}
            />
          </View>
        </View>

        <View style={qualitativeStyles.metricItem}>
          <View style={qualitativeStyles.metricHeader}>
            <Text style={qualitativeStyles.metricName}>Completion Rate</Text>
            <Text style={qualitativeStyles.metricPercent}>
              {completionRate}%
            </Text>
          </View>
          <View style={qualitativeStyles.progressBarBg}>
            <View
              style={[
                qualitativeStyles.progressBarFill,
                { width: `${completionRate}%`, backgroundColor: "#10b981" },
              ]}
            />
          </View>
        </View>

        <View style={[qualitativeStyles.metricItem, { marginBottom: 0 }]}>
          <View style={qualitativeStyles.metricHeader}>
            <Text style={qualitativeStyles.metricName}>
              Improvement in Assessment Scores
            </Text>
            <Text style={qualitativeStyles.metricPercent}>
              +{assessmentImprovement}%
            </Text>
          </View>
          <View style={qualitativeStyles.progressBarBg}>
            <View
              style={[
                qualitativeStyles.progressBarFill,
                {
                  width: `${assessmentImprovement}%`,
                  backgroundColor: "#8b5cf6",
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuantitativeSection;
