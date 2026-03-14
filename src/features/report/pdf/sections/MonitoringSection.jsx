import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { monitorStyles } from "../styles/monitorStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const MonitoringSection = () => {
  const { dataCollectionTools, assessmentMethods, monitoringFrequency } =
    useReportStore((state) => state.monitoringEvaluation || {});

  return (
    <>
      <View style={monitorStyles.methodologyGrid}>
        <View style={monitorStyles.methodCard}>
          <View style={monitorStyles.cardHeaderRow}>
            <View style={[monitorStyles.dot, { backgroundColor: "#3b82f6" }]} />
            <Text style={monitorStyles.cardTitle}>DATA COLLECTION TOOLS</Text>
          </View>
          <Text style={monitorStyles.cardBody}>
            {dataCollectionTools ||
              "Standardized surveys, digital logs, and observation checklists were utilized."}
          </Text>
        </View>

        <View style={monitorStyles.methodCard}>
          <View style={monitorStyles.cardHeaderRow}>
            <View style={[monitorStyles.dot, { backgroundColor: "#8b5cf6" }]} />
            <Text style={monitorStyles.cardTitle}>ASSESSMENT METHODS</Text>
          </View>
          <Text style={monitorStyles.cardBody}>
            {assessmentMethods ||
              "Impact was measured through baseline-endline comparisons and practical skill evaluations."}
          </Text>
        </View>
      </View>

      <View style={monitorStyles.frequencyBox}>
        <Text style={monitorStyles.frequencyLabel}>MONITORING FREQUENCY</Text>
        <Text style={monitorStyles.frequencyValue}>
          {monitoringFrequency ||
            "Regular periodic assessments performed throughout the project duration."}
        </Text>
      </View>
    </>
  );
};

export default MonitoringSection;
