import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { conclusionPageStyles as styles } from "../styles/conclusionPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import ConclusionIcon from "@/shared/assets/icons/glow-bulb.png";
import StudentsRaisingHandsImg from "@/shared/assets/images/flp-report/outcomes-students-raising-hands.jpg";

export const ConclusionPage = () => {
  const { description, conclusionImg } = useFLPStore(
    (state) => state.conclusion,
  );
  return (
    <Page size="A4" style={gStyles.page}>
      <View style={gStyles.contentWrapper}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>12</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>Conclusion</Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={ConclusionIcon} style={gStyles.iconRight} />
        </View>

        <Text style={gStyles.paragraph}>
          {description?.split("\n").join("\n\n")}
        </Text>

        <View style={gStyles.wideImage}>
          <Image
            src={conclusionImg?.[0] || StudentsRaisingHandsImg}
            style={gStyles.photo}
          />
        </View>

        <View style={gStyles.footerLine} />
      </View>
    </Page>
  );
};
