import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { quantitativeStyles } from "../styles/quantitativeStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const QualitativeSection = () => {
  const {
    confidenceImprovement,
    leadershipSkills,
    teamwork,
    criticalThinking,
    testimonials,
  } = useReportStore((state) => state.qualitativeImpact || {});

  return (
    <>
      <View style={quantitativeStyles.grid}>
        <View style={quantitativeStyles.row}>
          <View style={quantitativeStyles.card}>
            <View
              style={[
                quantitativeStyles.indicator,
                { backgroundColor: "#f59e0b" },
              ]}
            />
            <Text style={quantitativeStyles.cardLabel}>
              CONFIDENCE IMPROVEMENT
            </Text>
            <Text style={quantitativeStyles.cardBody}>
              {confidenceImprovement ||
                "Observed increase in student participation and willingness to present projects publicly."}
            </Text>
          </View>

          <View style={quantitativeStyles.card}>
            <View
              style={[
                quantitativeStyles.indicator,
                { backgroundColor: "#3b82f6" },
              ]}
            />
            <Text style={quantitativeStyles.cardLabel}>
              TEAMWORK & COLLABORATION
            </Text>
            <Text style={quantitativeStyles.cardBody}>
              {teamwork.charAt(0).toUpperCase() + teamwork.slice(1)}
            </Text>
          </View>
        </View>

        <View style={quantitativeStyles.row}>
          <View style={quantitativeStyles.card}>
            <View
              style={[
                quantitativeStyles.indicator,
                { backgroundColor: "#10b981" },
              ]}
            />
            <Text style={quantitativeStyles.cardLabel}>CRITICAL THINKING</Text>
            <Text style={quantitativeStyles.cardBody}>{criticalThinking}</Text>
          </View>

          <View style={quantitativeStyles.card}>
            <View
              style={[
                quantitativeStyles.indicator,
                { backgroundColor: "#8b5cf6" },
              ]}
            />
            <Text style={quantitativeStyles.cardLabel}>LEADERSHIP SKILLS</Text>
            <Text style={quantitativeStyles.cardBody}>
              {leadershipSkills.charAt(0).toUpperCase() +
                leadershipSkills.slice(1)}
            </Text>
          </View>
        </View>
      </View>

      <View style={quantitativeStyles.summaryNote}>
        <Text style={quantitativeStyles.summaryTitle}>Feedback</Text>
        <Text style={quantitativeStyles.summaryText}>{testimonials}</Text>
      </View>
    </>
  );
};

export default QualitativeSection;
