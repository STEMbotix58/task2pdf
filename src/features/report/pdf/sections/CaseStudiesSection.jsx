import { Text, View } from "@react-pdf/renderer";
import { caseStudyStyles } from "../styles/caseStudyStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const CaseStudiesSection = () => {
  const {
    beneficiaryBackground,
    interventionDetails,
    outcomeAchieved,
    testimonial,
  } = useReportStore((state) => state.caseStudy || {});

  return (
    <View style={caseStudyStyles.container}>
      <View style={caseStudyStyles.storySection}>
        <View style={[caseStudyStyles.block, { marginBottom: 20 }]}>
          <Text style={caseStudyStyles.blockHeader}>
            BENEFICIARY BACKGROUND
          </Text>
          <Text style={caseStudyStyles.bodyText}>
            {beneficiaryBackground || "No background data provided."}
          </Text>
        </View>

        <View style={caseStudyStyles.block}>
          <Text style={caseStudyStyles.blockHeader}>INTERVENTION DETAILS</Text>
          <Text style={caseStudyStyles.bodyText}>
            {interventionDetails || "No intervention details provided."}
          </Text>
        </View>

        <View style={caseStudyStyles.block}>
          <Text style={caseStudyStyles.blockHeader}>OUTCOME ACHIEVED</Text>
          <View style={caseStudyStyles.outcomeHighlight}>
            <Text style={caseStudyStyles.outcomeText}>
              {outcomeAchieved || "No outcome details provided."}
            </Text>
          </View>
        </View>
      </View>

      <View style={caseStudyStyles.testimonialContainer}>
        <View style={caseStudyStyles.quoteIcon}>
          <Text
            style={{
              fontSize: 30,
              color: "#3b82f6",
              fontFamily: "Helvetica-Bold",
            }}
          >
            “
          </Text>
        </View>
        <Text style={caseStudyStyles.testimonialText}>
          {testimonial ||
            "The impact of this program has been life-changing for our community."}
        </Text>
        <View style={caseStudyStyles.quoteIconEnd}>
          <Text
            style={{
              fontSize: 30,
              color: "#3b82f6",
              fontFamily: "Helvetica-Bold",
            }}
          >
            ”
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CaseStudiesSection;
