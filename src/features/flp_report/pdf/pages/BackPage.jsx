import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { backPageStyles as styles } from "../styles/backPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure these paths match your actual assets folder structure
import YuvaLogoSticker from "@/shared/assets/images/yuva-stem/yuva-logo.png";
import ClassroomImg from "@/shared/assets/images/flp-report/classroom-teaching.jpg";
import FinanceIllustration from "@/shared/assets/images/flp-report/finance-reading-illustration.png";

export const BackPage = () => {
  const { projectTitle, backPageImages, stemLogo } = useFLPStore(
    (state) => state.basicInfo,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <View style={styles.leftImageContainer}>
          <Image
            src={backPageImages[0] || ClassroomImg}
            style={styles.leftImage}
          />
        </View>
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.logoContainer}>
          <Image src={stemLogo[0] || YuvaLogoSticker} style={styles.yuvaLogo} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{projectTitle}</Text>
        </View>

        <View style={styles.illustrationContainer}>
          <Image src={FinanceIllustration} style={styles.illustration} />
        </View>
      </View>
    </Page>
  );
};
