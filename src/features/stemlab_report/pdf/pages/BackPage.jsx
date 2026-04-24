import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { backPageStyles as styles } from "../styles/backPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import AdultLabImg from "@/shared/assets/images/yuva-stem/back-left-lab.jpg";
import KidsCircleImg from "@/shared/assets/images/yuva-stem/back-right-kids.jpg";
import DeutscheBankLogo from "@/shared/assets/images/deutsche-bank-logo.png";
import YuvaLogo from "@/shared/assets/images/yuva-stem/yuva-logo.png";
import STEMLettersGraphic from "@/shared/assets/images/yuva-stem/stem-letters-graphic.jpg";

export const BackPage = () => {
  const { projectTitle, preparedBy, partnerLogo, backPageImages } =
    useStemLabStore((state) => state.basicInfo);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topSection}>
        <View style={styles.leftCol}>
          <Image
            src={backPageImages[0] || AdultLabImg}
            style={styles.leftCurvedImage}
          />
        </View>

        <View style={styles.rightCol}>
          <Image
            src={partnerLogo[0] || DeutscheBankLogo}
            style={styles.logoImg}
          />

          <View style={styles.rightCircleWrapper}>
            <View style={styles.redDecorativeDot} />
            <Image
              src={backPageImages[1] || KidsCircleImg}
              style={styles.rightCircleImage}
            />
          </View>

          <Image src={preparedBy[0] || YuvaLogo} style={styles.logoImg} />
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.titleRow}>
          <Text style={styles.titleRed}>{projectTitle}</Text>
        </View>

        <Image src={STEMLettersGraphic} style={styles.stemGraphic} />
      </View>
    </Page>
  );
};
