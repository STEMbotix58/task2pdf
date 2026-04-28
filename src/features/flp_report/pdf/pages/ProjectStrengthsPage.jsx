import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { projectStrengthsPageStyles as styles } from "../styles/projectStrengthsPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import MussleMemory from "@/shared/assets/icons/mussle-memory.png";
import GirlsGroupTalking from "@/shared/assets/images/flp-report/girls-group-talking.jpg";

export const ProjectStrengthsPage = () => {
  const { description, projectStrengthsImg } = useFLPStore(
    (state) => state.projectStrengths,
  );
  return (
    <Page size="A4" style={gStyles.page}>
      <View style={gStyles.contentWrapper}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>09</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>Project Strengths</Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={MussleMemory} style={gStyles.iconRight} />
        </View>

        <Text style={gStyles.paragraph}>
          {description.split("\n").join("\n\n")}
        </Text>

        <View style={[gStyles.wideImage, {marginBottom: 0}]}>
          <Image
            src={projectStrengthsImg[0] || GirlsGroupTalking}
            style={gStyles.photo}
          />
        </View>

        <View style={[gStyles.footerLine, {marginBottom: 20}]} />
      </View>
    </Page>
  );
};
