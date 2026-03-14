import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { learningStyles } from "../styles/learningStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const LearningSection = () => {
  const {
    technicalSkillsGained,
    softSkillsDeveloped,
    toolsPlatformsUsed,
    handsOnLearningHours,
  } = useReportStore((state) => state.learningOutcomes || {});

  return (
    <>
      <View style={learningStyles.mainGrid}>
        <View style={[learningStyles.skillsRow, { alignItems: "stretch" }]}>
          <View style={[learningStyles.heroMetric, { flex: 1 }]}>
            <Text style={learningStyles.heroLabel}>
              TOTAL HANDS-ON LEARNING HOURS
            </Text>
            <Text style={learningStyles.heroValue}>
              {handsOnLearningHours}h+
            </Text>
            <Text style={learningStyles.heroSubtext}>
              Practical Experience in STEM & Innovation
            </Text>
          </View>

          <View
            style={[
              learningStyles.skillCard,
              { borderLeft: "4pt solid #fdba74" },
            ]}
          >
            <Text style={[learningStyles.skillTitle, { color: "#fdba74" }]}>
              TOOLS & PLATFORMS UTILIZED
            </Text>
            <Text style={learningStyles.skillBody}>
              {toolsPlatformsUsed ||
                "Various industry-standard tools and digital platforms were integrated into the training."}
            </Text>
          </View>
        </View>
      </View>
      <View style={learningStyles.mainGrid}>
        <View style={learningStyles.skillsRow}>
          <View
            style={[
              learningStyles.skillCard,
              { borderLeft: "4pt solid #3b82f6" },
            ]}
          >
            <Text style={learningStyles.skillTitle}>
              TECHNICAL SKILLS GAINED
            </Text>
            <Text style={learningStyles.skillBody}>
              {technicalSkillsGained ||
                "Specific technical competencies have been developed through interactive modules."}
            </Text>
          </View>

          <View
            style={[
              learningStyles.skillCard,
              { borderLeft: "4pt solid #10b981" },
            ]}
          >
            <Text style={[learningStyles.skillTitle, { color: "#059669" }]}>
              SOFT SKILLS DEVELOPED
            </Text>
            <Text style={learningStyles.skillBody}>
              {softSkillsDeveloped ||
                "Participants enhanced their communication, leadership, and collaboration skills."}
            </Text>
          </View>
        </View>

        {/* <View style={learningStyles.toolsSection}>
          <Text style={learningStyles.toolsHeader}>TOOLS & PLATFORMS UTILIZED</Text>
          <View style={learningStyles.toolsContent}>
            <Text style={learningStyles.toolsText}>
              {toolsPlatformsUsed ||
                "Various industry-standard tools and digital platforms were integrated into the training."}
            </Text>
          </View>
        </View> */}
      </View>
    </>
  );
};

export default LearningSection;
