import React from "react";
import {
  Page,
  Text,
  View,
  Image,
  Svg,
  Circle,
  Polygon,
  Line,
} from "@react-pdf/renderer";
import { coverPageStyles as styles } from "../styles/coverPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

import YuvaLogo from "@/shared/assets/images/yuva-stem/yuva-logo.jpg";
import ClipboardIcon from "@/shared/assets/icons/clipboard-money.png";
import FinanceElementsIcon from "@/shared/assets/icons/finance-elements.png";

export const CoverPage = () => {
  const { projectTitle, objective, partners, stemLogo } = useFLPStore(
    (state) => state.basicInfo,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />

      <View style={styles.mainContent}>
        <View style={styles.logoContainer}>
          <Image src={stemLogo[0] || YuvaLogo} style={styles.yuvaLogo} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{projectTitle}</Text>
          <Image src={ClipboardIcon} style={styles.clipboardIcon} />
        </View>

        <Text style={styles.subtitleText}>{objective}</Text>

        <View style={styles.partnerContainer}>
          {partners.map((partner, index) => {
            return (
              <View style={styles.partnerSection} key={index}>
                <Text style={styles.partnerTitle}>{partner.title}</Text>
                <Text style={styles.partnerText}>{partner.description}</Text>
              </View>
            );
          })}
        </View>

        <Image src={FinanceElementsIcon} style={styles.bottomLeftIcon} />

        <View style={styles.footerContainer}>
          <Svg width="80" height="60" viewBox="0 0 80 60">
            {/* Row 1 */}
            <Circle cx="10" cy="10" r="3.5" fill="#F3A738" />
            <Circle cx="30" cy="10" r="3.5" fill="#F3A738" />
            <Circle cx="50" cy="10" r="3.5" fill="#F3A738" />
            <Circle cx="70" cy="10" r="3.5" fill="#F3A738" />
            {/* Row 2 */}
            <Circle cx="10" cy="30" r="3.5" fill="#F3A738" />
            <Circle cx="30" cy="30" r="3.5" fill="#F3A738" />
            <Circle cx="50" cy="30" r="3.5" fill="#F3A738" />
            <Circle cx="70" cy="30" r="3.5" fill="#F3A738" />
            {/* Row 3 */}
            <Circle cx="10" cy="50" r="3.5" fill="#F3A738" />
            <Circle cx="30" cy="50" r="3.5" fill="#F3A738" />
            <Circle cx="50" cy="50" r="3.5" fill="#F3A738" />
            <Circle cx="70" cy="50" r="3.5" fill="#F3A738" />
          </Svg>
        </View>
      </View>
    </Page>
  );
};
