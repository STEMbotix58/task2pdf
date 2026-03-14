import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { sustainabilityStyles } from "../styles/sustainabilityStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const SustainabilitySection = () => {
  const { continuationPlan, scalabilityPotential, replicationPossibilities } =
    useReportStore((state) => state.sustainability || {});

  return (
    <View style={sustainabilityStyles.container}>
      <View style={sustainabilityStyles.sectionCard}>
        <View style={sustainabilityStyles.headerRow}>
          <View
            style={[
              sustainabilityStyles.statusIndicator,
              { backgroundColor: "#10b981" },
            ]}
          />
          <Text style={sustainabilityStyles.sectionLabel}>
            POST-PROJECT CONTINUATION PLAN
          </Text>
        </View>
        <Text style={sustainabilityStyles.bodyText}>
          {continuationPlan ||
            "A detailed plan for institutionalizing the lab activities within the school's daily curriculum ensures long-term impact."}
        </Text>
      </View>

      <View style={sustainabilityStyles.sectionCard}>
        <View style={sustainabilityStyles.headerRow}>
          <View
            style={[
              sustainabilityStyles.statusIndicator,
              { backgroundColor: "#3b82f6" },
            ]}
          />
          <Text style={sustainabilityStyles.sectionLabel}>
            SCALABILITY POTENTIAL
          </Text>
        </View>
        <Text style={sustainabilityStyles.bodyText}>
          {scalabilityPotential ||
            "The modular nature of the AI and Robotics labs allows for expansion into additional grade levels and advanced modules."}
        </Text>
      </View>

      <View style={[sustainabilityStyles.sectionCard, { marginBottom: 0 }]}>
        <View style={sustainabilityStyles.headerRow}>
          <View
            style={[
              sustainabilityStyles.statusIndicator,
              { backgroundColor: "#8b5cf6" },
            ]}
          />
          <Text style={sustainabilityStyles.sectionLabel}>
            REPLICATION POSSIBILITIES
          </Text>
        </View>
        <Text style={sustainabilityStyles.bodyText}>
          {replicationPossibilities ||
            "This phygital learning model can be replicated across other government and private schools to bridge the digital divide."}
        </Text>
      </View>
    </View>
  );
};

export default SustainabilitySection;
