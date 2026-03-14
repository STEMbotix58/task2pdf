import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { institutionalStyles } from "../styles/institutionalStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const InstitutionalSection = () => {
  const {
    teacherCapacityBuilding,
    infrastructureUse,
    curriculumEnhancement,
    sustainabilityMeasures,
  } = useReportStore((state) => state.institutionalImpact || {});

  return (
    <View style={institutionalStyles.container}>
      <View style={institutionalStyles.impactCard}>
        <Text style={institutionalStyles.cardHeader}>
          CAPACITY BUILDING OF TEACHERS/STAFF
        </Text>
        <Text style={institutionalStyles.cardBody}>
          {teacherCapacityBuilding ||
            "No specific data on staff training recorded."}
        </Text>
      </View>

      <View style={institutionalStyles.impactCard}>
        <Text style={institutionalStyles.cardHeader}>
          INFRASTRUCTURE UTILIZATION
        </Text>
        <Text style={institutionalStyles.cardBody}>
          {infrastructureUse || "No infrastructure usage data documented."}
        </Text>
      </View>

      <View style={institutionalStyles.impactCard}>
        <Text style={institutionalStyles.cardHeader}>
          CURRICULUM ENHANCEMENT
        </Text>
        <Text style={institutionalStyles.cardBody}>
          {curriculumEnhancement ||
            "No curriculum updates recorded for this phase."}
        </Text>
      </View>

      <View
        style={[
          institutionalStyles.impactCard,
          institutionalStyles.sustainabilityHighlight,
        ]}
      >
        <View style={institutionalStyles.row}>
          <View style={institutionalStyles.leafIcon} />
          <Text
            style={[
              institutionalStyles.cardHeader,
              { marginBottom: 0, color: "#166534" },
            ]}
          >
            SUSTAINABILITY MEASURES
          </Text>
        </View>
        <View style={institutionalStyles.separator} />
        <Text style={[institutionalStyles.cardBody, { color: "#14532d" }]}>
          {sustainabilityMeasures ||
            "No long-term sustainability plans documented."}
        </Text>
      </View>
    </View>
  );
};

export default InstitutionalSection;
