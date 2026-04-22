import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { projectStrengthsPageStyles as styles } from "../styles/projectStrengthsPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import MussleMemory from "@/shared/assets/icons/mussle-memory.png";
import GirlsGroupTalking from "@/shared/assets/images/flp-report/girls-group-talking.jpg";

export const ProjectStrengthsPage = () => {
  const { description, projectStrengthsImg } = useFLPStore(
    (state) => state.projectStrengths,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>09</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>Project Strengths</Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={MussleMemory} style={styles.iconRight} />
        </View>

        <Text style={styles.paragraph}>
          {description.split("\n").join("\n\n")}
        </Text>

        <View style={styles.wideImage}>
          <Image
            src={projectStrengthsImg[0] || GirlsGroupTalking}
            style={styles.photo}
          />
        </View>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
