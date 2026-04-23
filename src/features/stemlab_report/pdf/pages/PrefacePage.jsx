import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { prefacePageStyles as styles } from "../styles/prefacePageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

// Update these paths if they differ in your project
import YuvaLogo from "@/shared/assets/images/yuva-stem/yuva-logo.jpg";
import DeutscheBankLogo from "@/shared/assets/images/deutsche-bank-logo.jpg";
import STEMbotixLogo from "@/shared/assets/images/STEMbotix-Logo.png";

export const PrefacePage = () => {
  const preface = useStemLabStore((state) => state.preface);
  
  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.yellowSidebar} />

      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>PREFACE</Text>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <Image
              src={preface[0]?.image[0] || DeutscheBankLogo}
              style={styles.photo}
            />
          </View>
          <View style={[styles.dashedBox, { alignItems: "flex-start" }]}>
            <Text style={styles.boxText}>{preface[0]?.description}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.dashedBox, { alignItems: "flex-end" }]}>
            <Text style={styles.boxText}>{preface[1]?.description}</Text>
          </View>
          <View style={styles.logoContainer}>
            <Image
              src={preface[1]?.image[0] || YuvaLogo}
              style={styles.photo}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <Image
              src={preface[2]?.image[0] || STEMbotixLogo}
              style={styles.photo}
            />
          </View>
          <View style={[styles.dashedBox, { alignItems: "flex-start" }]}>
            <Text style={styles.boxText}>{preface[2]?.description}</Text>
          </View>
        </View>
      </View>

      <View style={styles.redBanner} />
    </Page>
  );
};
