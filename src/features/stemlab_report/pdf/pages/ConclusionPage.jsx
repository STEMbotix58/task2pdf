import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { conclusionPageStyles as styles } from "../styles/conclusionPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import ScienceSTEM from "@/shared/assets/images/yuva-stem/science-stem.jpg";

export const ConclusionPage = () => {
  const conclusion = useStemLabStore((state) => state.conclusion);
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />
      <View style={styles.mainContent}>
        <View style={[styles.headerRow, { marginTop: 0 }]}>
          <Text style={styles.headerText}>CONCLUSION</Text>
        </View>

        <Text style={styles.paragraph}>
          {conclusion.split("\n").join("\n\n")}
        </Text>

        <Image src={ScienceSTEM} style={styles.bottomWidePhoto} />
      </View>
    </Page>
  );
};
