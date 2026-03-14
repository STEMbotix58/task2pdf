import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { objectiveStyles } from "../styles/objectiveStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const ObjectivesSection = () => {
  const {
    primaryObjectives,
    secondaryObjectives,
    shortTermOutcomes,
    longTermOutcomes,
    sdgAlignment,
  } = useReportStore((state) => state.objectives || {});

  return (
    <View style={objectiveStyles.container}>
      {/* Project Goals Section */}
      <View style={objectiveStyles.sectionRow}>
        <View style={objectiveStyles.goalCard}>
          <Text style={objectiveStyles.cardLabel}>PRIMARY OBJECTIVES</Text>
          <Text style={objectiveStyles.cardText}>
            {primaryObjectives ||
              "To provide hands-on STEM education and prepare students for technological careers."}
          </Text>
        </View>
        <View
          style={[objectiveStyles.goalCard, { backgroundColor: "#f8fafc" }]}
        >
          <Text style={objectiveStyles.cardLabel}>SECONDARY OBJECTIVES</Text>
          <Text style={objectiveStyles.cardText}>
            {secondaryObjectives ||
              "To foster a culture of innovation and collaboration within the school ecosystem."}
          </Text>
        </View>
      </View>

      {/* Outcomes Timeline */}
      <View style={objectiveStyles.timelineSection}>
        <Text style={objectiveStyles.timelineHeader}>INTENDED OUTCOMES</Text>

        <View style={objectiveStyles.outcomeRow}>
          <View style={objectiveStyles.outcomeIcon}>
            <Text style={objectiveStyles.iconLetter}>S</Text>
          </View>
          <View style={objectiveStyles.outcomeContent}>
            <Text style={objectiveStyles.outcomeLabel}>
              SHORT-TERM OUTCOMES
            </Text>
            <Text style={objectiveStyles.bodyText}>
              {shortTermOutcomes ||
                "Immediate engagement with robotics kits and foundational AI concepts."}
            </Text>
          </View>
        </View>

        <View style={objectiveStyles.outcomeRow}>
          <View
            style={[
              objectiveStyles.outcomeIcon,
              { backgroundColor: "#10b981" },
            ]}
          >
            <Text style={objectiveStyles.iconLetter}>L</Text>
          </View>
          <View style={objectiveStyles.outcomeContent}>
            <Text style={objectiveStyles.outcomeLabel}>LONG-TERM OUTCOMES</Text>
            <Text style={objectiveStyles.bodyText}>
              {longTermOutcomes ||
                "Enhanced employability and sustained interest in technology-driven careers."}
            </Text>
          </View>
        </View>
      </View>

      {/* Strategic Alignment */}
      <View style={objectiveStyles.alignmentBox}>
        <Text style={objectiveStyles.alignmentLabel}>
          ALIGNMENT WITH SDGs / NATIONAL PRIORITIES
        </Text>
        <Text style={objectiveStyles.alignmentText}>
          {sdgAlignment ||
            "Aligned with NEP 2020 focusing on experiential learning and early childhood development."}
        </Text>
      </View>
    </View>
  );
};
export default ObjectivesSection;
