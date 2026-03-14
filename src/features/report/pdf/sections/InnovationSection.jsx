import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { innovationStyles } from "../styles/innovationStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const InnovationSection = () => {
  const { newTechnologies, innovationProjects, research } = useReportStore(
    (state) => state.innovationImpact || {},
  );

  return (
    <View style={innovationStyles.container}>
      <View style={innovationStyles.techSection}>
        <View style={innovationStyles.sectionHeader}>
          <Text style={innovationStyles.sectionTitle}>
            NEW TECHNOLOGIES ADOPTED
          </Text>
        </View>
        <View style={innovationStyles.card}>
          <Text style={innovationStyles.bodyText}>
            {newTechnologies || "No new technology adoption data recorded."}
          </Text>
        </View>
      </View>

      <View style={innovationStyles.techSection}>
        <View style={innovationStyles.sectionHeader}>
          <Text style={innovationStyles.sectionTitle}>
            INNOVATION PROJECTS DEVELOPED
          </Text>
        </View>
        <View style={innovationStyles.card}>
          <Text style={innovationStyles.bodyText}>
            {innovationProjects ||
              "No specific innovation projects documented."}
          </Text>
        </View>
      </View>

      <View style={innovationStyles.techSection}>
        <View style={innovationStyles.sectionHeader}>
          <Text style={innovationStyles.sectionTitle}>
            RESEARCH & IP OUTCOMES
          </Text>
        </View>
        <View style={innovationStyles.researchCard}>
          <Text style={innovationStyles.researchText}>
            {research ||
              "No research or intellectual property outcomes recorded for this phase."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InnovationSection;
