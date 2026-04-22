import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { projectPageStyles as styles } from "../styles/projectPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import OverviewImg1 from "@/shared/assets/images/yuva-stem/overview-img-1.jpg";
import OverviewImg2 from "@/shared/assets/images/yuva-stem/overview-img-2.jpg";
import GearTargetIcon from "@/shared/assets/icons/gear-target.png";

export const ProjectPage = () => {
  const { objective, description, projectImg } = useStemLabStore(
    (state) => state.project,
  );
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />

      <View style={styles.mainContent}>
        <View style={styles.infoBlockContainer}>
          <View style={styles.yellowContentBox}>
            <View style={styles.blockHeaderContainer}>
              <Text style={styles.blockHeaderText}>Project Objectives</Text>
            </View>
            <Text style={styles.introText}>{objective}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          {description.split("\n").join("\n\n")}
        </Text>

        <View style={styles.row}>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#FF3131" },
            ]}
          >
            <Image src={projectImg[0] || OverviewImg1} style={styles.photo} />
          </View>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#000000" },
            ]}
          >
            <Image src={projectImg[1] || OverviewImg2} style={styles.photo} />
          </View>
        </View>
      </View>
    </Page>
  );
};
