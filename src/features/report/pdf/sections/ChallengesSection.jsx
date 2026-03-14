import { Text, View } from "@react-pdf/renderer";
import { challengesStyles } from "../styles/challengesStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const ChallengesSection = () => {
  const { keyChallenges, mitigationStrategies, lessonsLearned } =
    useReportStore((state) => state.challengesAndLearnings || {});

  return (
    <View style={challengesStyles.contentContainer}>
      <View style={challengesStyles.sectionBox}>
        <View
          style={[challengesStyles.accentBar, { backgroundColor: "#ef4444" }]}
        />
        <Text style={challengesStyles.sectionLabel}>KEY CHALLENGES</Text>
        <Text style={challengesStyles.contentText}>
          {keyChallenges || "No specific challenges recorded."}
        </Text>
      </View>

      <View style={challengesStyles.sectionBox}>
        <View
          style={[challengesStyles.accentBar, { backgroundColor: "#3b82f6" }]}
        />
        <Text style={challengesStyles.sectionLabel}>MITIGATION STRATEGIES</Text>
        <Text style={challengesStyles.contentText}>
          {mitigationStrategies || "No mitigation strategies recorded."}
        </Text>
      </View>

      <View style={challengesStyles.lessonsContainer}>
        <Text style={challengesStyles.lessonsLabel}>
          LESSONS LEARNED & FUTURE INSIGHTS
        </Text>
        <View style={challengesStyles.lessonsContent}>
          <Text style={challengesStyles.lessonsText}>
            {lessonsLearned || "No lessons learned documented for this phase."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChallengesSection;
