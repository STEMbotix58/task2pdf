import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { summaryPageStyles as styles } from "../styles/summaryPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure these paths match your actual assets
import ClassroomComputerImg from "@/shared/assets/images/flp-report/classroom-computers.jpg";
import SummaryIcon from "@/shared/assets/icons/executive-summary-icon.png";

export const SummaryPage = () => {
  const { description, summaryImg } = useFLPStore((state) => state.summary);
  return (
    <Page size="A4" style={gStyles.page}>
      <View style={styles.topImageContainer}>
        <Image
          src={summaryImg[0] || ClassroomComputerImg}
          style={styles.topImage}
        />
      </View>

      <View style={[gStyles.contentWrapper, {paddingTop: 30}]}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>01</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>Executive Summary</Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={SummaryIcon} style={gStyles.iconRight} />
        </View>

        <Text style={gStyles.paragraph}>
          {description.split("\n").join("\n\n")}
        </Text>

        <View style={gStyles.footerLine} />
      </View>
    </Page>
  );
};
