import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { challengesMitigationPageStyles as styles } from "../styles/challengesMitigationPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Add these to your assets based on the UI
import MitigationIcon from "@/shared/assets/icons/mitigation-hands-gear.png";
import FullClassroom from "@/shared/assets/images/flp-report/full-classroom.jpg";
import StrategiesClassroom from "@/shared/assets/images/flp-report/strategies-classroom.jpg";

export const ChallengesMitigationPage = () => {
  const { description, challengesAndMigrationImg } = useFLPStore(
    (state) => state.challengesAndMigration,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>10</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>
              Challenges and{"\n"}Mitigation Strategies
            </Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={MitigationIcon} style={styles.iconRight} />
        </View>

        <View style={styles.wideImage}>
          <Image
            src={challengesAndMigrationImg[0] || FullClassroom}
            style={styles.photo}
          />
        </View>

        <Text style={styles.paragraph}>
          {description.split("\n").slice(0, -1).join("\n\n")}
        </Text>

        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>
              {description.split("\n").slice(-1).join("\n")}
            </Text>
          </View>
          <View style={styles.halfImage}>
            <Image
              src={challengesAndMigrationImg[1] || StrategiesClassroom}
              style={styles.photo}
            />
          </View>
        </View>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
