import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { summaryPageStyles as styles } from "../styles/summaryPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure these paths match your actual assets
import ClassroomComputerImg from "@/shared/assets/images/flp-report/classroom-computers.jpg";
import SummaryIcon from "@/shared/assets/icons/executive-summary-icon.png";

export const SummaryPage = () => {
  const { description, summaryImg } = useFLPStore((state) => state.summary);
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topImageContainer}>
        <Image
          src={summaryImg[0] || ClassroomComputerImg}
          style={styles.topImage}
        />
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>01</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>Executive Summary</Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={SummaryIcon} style={styles.iconRight} />
        </View>

        <Text style={styles.paragraph}>
          {description.split("\n").join("\n\n")}
        </Text>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
