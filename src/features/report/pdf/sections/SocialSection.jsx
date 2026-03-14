import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { socialStyles } from "../styles/socialStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const SocialSection = () => {
  const socialImpact = useReportStore((state) => state.socialImpact || {});

  const {
    inclusionAndEquity = "",
    communityEngagement = "",
    awarenessPrograms = "",
    digitalDivideReduction = "",
  } = socialImpact;

  return (
    <View style={socialStyles.container}>
      <View style={socialStyles.impactSection}>
        <View style={socialStyles.headerContainer}>
          <View style={[socialStyles.circle, { backgroundColor: "#8b5cf6" }]} />
          <Text style={socialStyles.sectionHeader}>
            INCLUSION & EQUITY IMPACT
          </Text>
        </View>
        <View style={socialStyles.contentBox}>
          <Text style={socialStyles.bodyText}>
            {inclusionAndEquity ||
              "Ensuring equal access to STEM resources for all students regardless of gender or socio-economic background."}
          </Text>
        </View>
      </View>

      <View style={socialStyles.impactSection}>
        <View style={socialStyles.headerContainer}>
          <View style={[socialStyles.circle, { backgroundColor: "#3b82f6" }]} />
          <Text style={socialStyles.sectionHeader}>
            DIGITAL DIVIDE REDUCTION
          </Text>
        </View>
        <View
          style={[
            socialStyles.contentBox,
            { backgroundColor: "#eff6ff", borderColor: "#bfdbfe" },
          ]}
        >
          <Text style={[socialStyles.bodyText, { color: "#1e3a8a" }]}>
            {digitalDivideReduction ||
              "Providing rural educational centers with the same high-tech tools found in urban private schools."}
          </Text>
        </View>
      </View>

      <View style={socialStyles.splitRow}>
        <View style={socialStyles.splitCard}>
          <Text style={socialStyles.splitHeader}>COMMUNITY ENGAGEMENT</Text>
          <Text style={socialStyles.smallBody}>
            {communityEngagement ||
              "Involvement of local stakeholders and parents in project inauguration and student showcases."}
          </Text>
        </View>
        <View style={socialStyles.splitCard}>
          <Text style={socialStyles.splitHeader}>AWARENESS GENERATION</Text>
          <Text style={socialStyles.smallBody}>
            {awarenessPrograms ||
              "Promoting the importance of STEM education and early childhood learning (NEP 2020) within the region."}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SocialSection;
