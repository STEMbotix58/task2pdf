import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { conclusionPageStyles as styles } from "../styles/conclusionPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import ConclusionIcon from "@/shared/assets/icons/glow-bulb.png";
import StudentsRaisingHandsImg from "@/shared/assets/images/flp-report/outcomes-students-raising-hands.jpg";

export const ConclusionPage = () => {
  const { description, conclusionImg } = useFLPStore(
    (state) => state.conclusion,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>12</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>Conclusion</Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={ConclusionIcon} style={styles.iconRight} />
        </View>

        <Text style={styles.paragraph}>
          {description?.split("\n").join("\n\n")}
        </Text>

        <View style={styles.wideImage}>
          <Image
            src={conclusionImg?.[0] || StudentsRaisingHandsImg}
            style={styles.photo}
          />
        </View>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
