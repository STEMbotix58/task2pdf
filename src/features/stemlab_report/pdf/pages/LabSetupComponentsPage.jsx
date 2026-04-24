import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { labSetupComponentPageStyles as styles } from "../styles/labSetupComponentPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import KitsLayoutImg from "@/shared/assets/images/yuva-stem/kits-layout.jpg";
import ClassroomTelescopeImg from "@/shared/assets/images/yuva-stem/classroom-telescope.jpg";

export const LabSetupComponentsPage = () => {
  const { description, labImg } = useStemLabStore(
    (state) => state.labSetupAndComponents,
  );

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />

      <View style={styles.mainContent}>
        <View style={styles.infoBlockContainer}>
          <View style={styles.yellowContentBox}>
            <View style={styles.blockHeaderContainer}>
              <Text style={styles.blockHeaderText}>Lab Setup & Components</Text>
            </View>
            <Text style={styles.introText}>{description?.split("\n")[0]}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View
            style={[
              styles.halfImage,
              { padding: 8, backgroundColor: "#FF3131" },
            ]}
          >
            <Image src={labImg?.[0] || KitsLayoutImg} style={styles.photo} />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description?.split("\n")[1]}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          {description?.split("\n").slice(2)}
        </Text>

        <Image src={ClassroomTelescopeImg} style={styles.middleWidePhoto} />
      </View>
    </Page>
  );
};
