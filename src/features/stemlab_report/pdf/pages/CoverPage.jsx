import React from "react";
import { Page, Text, View, Image, Svg, Path } from "@react-pdf/renderer";
import { coverPageStyles as styles } from "../styles/coverPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

// Assets based on your project structure
import YuvaSTEM from "@/shared/assets/images/yuva-stem/yuva-stem.jpg";
import YuvaLogo from "@/shared/assets/images/yuva-stem/yuva-logo.jpg";
import DeutscheBankLogo from "@/shared/assets/images/deutsche-bank-logo.jpg";
import ImpactChartIcon from "@/shared/assets/icons/impact-chart-icon.png";
import AstronautPencil from "@/shared/assets/icons/astronaut-pencil.png";
import ProcessGears from "@/shared/assets/icons/process-gears.png";
import CoverImgOne from "@/shared/assets/images/yuva-stem/cover-img-1.jpg";
import CoverImgTwo from "@/shared/assets/images/yuva-stem/cover-img-2.jpg";
import MindDialog from "@/shared/assets/icons/mind-dialog.png";
import STEMElectron from "@/shared/assets/icons/stem-electron.png";

export const CoverPage = () => {
  const { projectTitle, stemLogo, partnerLogo, preparedBy, homeImages } =
    useStemLabStore((state) => state.basicInfo);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.topSection}>
        <View style={styles.greySwoopBg} />

        <View style={styles.topLogosContainer}>
          <Image src={stemLogo?.[0] || YuvaSTEM} style={styles.stemGraphic} />
          <Image
            src={partnerLogo?.[0] || DeutscheBankLogo}
            style={styles.bankLogo}
          />
        </View>

        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.titleRed}>
                {projectTitle || "STEM Lab Project"}
              </Text>
            </View>
            <View style={styles.arrowCircle}>
              <Svg width={35} height={35} viewBox="0 0 24 24">
                {/* Arrow */}
                <Path
                  d="M5 12h10M11 7l5 5-5 5"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.gridContainer}>
        {/* ROW 1 */}
        <View style={styles.gridRow}>
          <View
            style={[
              styles.colLeft,
              styles.bgYellow,
              { borderTopRightRadius: 100 },
            ]}
          >
            <Image src={MindDialog} style={styles.iconLarge} />
          </View>

          <View style={[styles.colMiddle, styles.bgRed]}>
            <Image
              src={homeImages?.[0] || CoverImgOne}
              style={styles.photoFrame}
            />
          </View>

          <View
            style={[
              styles.colRight,
              styles.bgYellow,
              { position: "relative", overflow: "hidden" },
            ]}
          >
            <Text style={styles.impactText}>IMPACT</Text>
            <Text style={styles.impactText}>REPORT</Text>
            <Image src={ImpactChartIcon} style={styles.impactIcon} />
            <View style={styles.redCornerCurve} />
          </View>
        </View>

        {/* ROW 2 */}
        <View style={styles.gridRow}>
          <View style={[styles.colLeft, styles.bgDarkBlue]}>
            <Image src={ProcessGears} style={styles.iconLarge} />
          </View>

          <View style={[styles.colMiddle, styles.bgYellow]}>
            <Image
              src={homeImages?.[1] || CoverImgTwo}
              style={styles.photoFrame}
            />
          </View>

          <View
            style={[
              styles.colRight,
              styles.bgWhite,
              { position: "relative", justifyContent: "flex-start" },
            ]}
          >
            <Text style={styles.preparedByText}>Prepared by</Text>
            <View style={styles.smallLogosRow}>
              <Image src={preparedBy?.[0] || YuvaLogo} style={styles.yuvaLogo} />
            </View>

            <Image src={STEMElectron} style={styles.electronIcon} />

            <View
              style={[
                styles.redCornerCurve,
                {
                  bottom: -120,
                  right: -120,
                  width: 360,
                  height: 240,
                  borderTopLeftRadius: 250,
                },
              ]}
            >
              <Image src={AstronautPencil} style={styles.astronautGraphic} />
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};
