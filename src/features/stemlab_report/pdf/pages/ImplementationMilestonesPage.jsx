import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { implementationMilestonesPageStyles as styles } from "../styles/implementationMilestonesPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import KitsLayoutImg from "@/shared/assets/images/yuva-stem/kits-layout.jpg";
import ClassroomTelescopeImg from "@/shared/assets/images/yuva-stem/classroom-telescope.jpg";
import BulbGearIcon from "@/shared/assets/icons/bulb-gear-icon.png";

export const ImplementationMilestonesPage = () => {
  const { description, implementationImg } = useStemLabStore(
    (state) => state.implementationAndMilestones,
  );

  return (
    <Page size="A4" style={styles.page}>
      {/* RED SIDEBAR */}
      <View style={styles.redSidebar} />

      {/* MAIN CONTENT AREA */}
      <View style={styles.mainContent}>
        <View style={styles.infoBlockContainer}>
          <View style={styles.yellowContentBox}>
            <View style={styles.blockHeaderContainer}>
              <Text style={styles.blockHeaderText}>
                Project Implementation & Milestones
              </Text>
            </View>
            <Text style={styles.introText}>{description.split("\n")[0]}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#FF3131" },
            ]}
          >
            <Image
              src={implementationImg[0] || KitsLayoutImg}
              style={styles.topPhoto}
            />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[1]}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[2]}</Text>
          </View>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#000000" },
            ]}
          >
            <Image
              src={implementationImg[1] || KitsLayoutImg}
              style={styles.topPhoto}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#FF3131" },
            ]}
          >
            <Image
              src={implementationImg[2] || KitsLayoutImg}
              style={styles.topPhoto}
            />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[3]}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};
