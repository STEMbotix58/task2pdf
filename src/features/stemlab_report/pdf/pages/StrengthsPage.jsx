import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { strengthsPageStyles as styles } from "../styles/strengthsPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

// Make sure to add/update these paths to match your assets
import StrengthsIcon from "@/shared/assets/icons/checklist-person.png"; // Placeholder for top icon
import ChallengesIcon from "@/shared/assets/icons/gears-warning.png"; // Placeholder for bottom icon
import TeamImg from "@/shared/assets/images/yuva-stem/strengths-team.jpg";

export const StrengthsPage = () => {
  const { description: challengesDescription, challengesImg } = useStemLabStore(
    (state) => state.challengesAndMitigation,
  );
  const { description: strengthsDescription, strengthsImg } = useStemLabStore(
    (state) => state.strengths,
  );

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />
      <View style={styles.mainContent}>
        <View style={[styles.headerRow, { marginTop: 0 }]}>
          <Text style={styles.headerText}>PROJECT STRENGTHS</Text>
          <View style={[styles.headerIconContainer]}>
            <Image src={StrengthsIcon} style={styles.headerIcon} />
          </View>
        </View>

        <Text style={styles.paragraph}>
          {strengthsDescription.split("\n").slice(0, -1).join("\n\n")}
        </Text>
        <View style={styles.highlightBlockContainer}>
          <View style={styles.redImageWrapper}>
            <Image src={strengthsImg?.[0] || TeamImg} style={styles.photo} />
          </View>
          <View style={styles.yellowTextWrapper}>
            <Text style={styles.yellowBoxText}>
              {strengthsDescription.split("\n").slice(-1).join("\n")}
            </Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>
            CHALLENGES AND MITIGATION{"\n"}STRATEGIES
          </Text>
          <View
            style={[styles.headerIconContainer, { backgroundColor: "#FFFFFF" }]}
          >
            <Image src={ChallengesIcon} style={styles.headerIcon} />
          </View>
        </View>

        <Text style={styles.paragraph}>
          {challengesDescription.split("\n").slice(0, -1).join("\n\n")}
        </Text>
        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>
              {challengesDescription.split("\n").slice(-1).join("\n")}
            </Text>
          </View>
          <View
            style={[
              styles.halfImage,
              { padding: 4, backgroundColor: "#000000" },
            ]}
          >
            <Image src={challengesImg?.[0] || TeamImg} style={styles.photo} />
          </View>
        </View>
      </View>
    </Page>
  );
};
