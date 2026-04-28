import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { challengesMitigationPageStyles as styles } from "../styles/challengesMitigationPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
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
    <Page size="A4" style={gStyles.page}>
      <View style={gStyles.contentWrapper}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>10</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>
              Challenges and{"\n"}Mitigation Strategies
            </Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={MitigationIcon} style={gStyles.iconRight} />
        </View>

        <View style={gStyles.wideImage}>
          <Image
            src={challengesAndMigrationImg[0] || FullClassroom}
            style={gStyles.photo}
          />
        </View>

        <Text style={gStyles.paragraph}>
          {description.split("\n").slice(0, -1).join("\n\n")}
        </Text>

        <View style={gStyles.row}>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>
              {description.split("\n").slice(-1).join("\n")}
            </Text>
          </View>
          <View style={gStyles.halfImage}>
            <Image
              src={challengesAndMigrationImg[1] || StrategiesClassroom}
              style={gStyles.photo}
            />
          </View>
        </View>

        <View style={gStyles.footerLine} />
      </View>
    </Page>
  );
};
