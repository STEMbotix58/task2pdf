import React from "react";
import { Text, View } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { projectProposalStyles } from "../styles/projectProposalStyles";

export const ProjectProposalPage = () => {
  const { title, intro, objectives, provision } = useProposalStore(
    (state) => state.projectProposal,
  );

  return (
    <PDFPageLayout>
      <View id="project-proposal">
        <SectionTitle title={"Project Proposal"} />

        <View style={projectProposalStyles.headerSection}>
          <Text style={projectProposalStyles.mainTitle}>{title}</Text>
          <Text style={projectProposalStyles.introText}>{intro}</Text>
        </View>

        <Text style={projectProposalStyles.sectionHeading}>Key Objectives</Text>
        <View style={projectProposalStyles.objectiveGrid}>
          {objectives?.map((obj, i) => (
            <View key={i} style={projectProposalStyles.objectiveCard}>
              <Text style={projectProposalStyles.objTitle}>{obj.name}</Text>
              <Text style={projectProposalStyles.objDesc}>
                {obj.description}
              </Text>
            </View>
          ))}
        </View>

        <Text style={projectProposalStyles.sectionHeading}>
          What STEMbotix Provides
        </Text>
        {provision?.map((item, i) => (
          <View key={i} style={projectProposalStyles.serviceItem}>
            <Text style={projectProposalStyles.serviceHeader}>
              {i + 1}. {item.title}
            </Text>
            <Text style={projectProposalStyles.serviceBody}>
              {/* {item.content} */}
              {/* We split description by new lines to maintain paragraph spacing */}
              {item.content?.split("\n").map((paragraph, index) => (
                <Text key={index} style={projectProposalStyles.serviceBody}>
                  {paragraph}
                </Text>
              ))}
            </Text>
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
