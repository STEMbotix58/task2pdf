import React from "react";
import { View, Image, StyleSheet, Svg, Polygon } from "@react-pdf/renderer";
import STEMbotixLogo from "@/shared/assets/images/STEMbotix-Logo.png";

const PDFHeader = () => (
  <View style={styles.headerContainer} fixed>
    <View style={styles.logoSection}>
      <Image src={STEMbotixLogo} style={styles.logo} />
    </View>

    <View style={styles.ribbonWrapper}>
      <Svg viewBox="0 0 400 60" style={styles.svg}>
        <Polygon points="30,0 0,0 30,60 60,60" fill="#2E3192" />
        <Polygon points="105,0 40,0 70,60 135,60" fill="#F15A24" />
        <Polygon points="145,60 400,60 400,0 115,0" fill="#2E3192" />
      </Svg>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },

  logoSection: {
    marginLeft: 20,
  },
  logo: {
    width: 180,
    height: "auto",
  },
  ribbonWrapper: {
    width: 300,
    height: 60,
  },
  svg: {
    width: "100%",
    height: "100%",
  },
});

export default PDFHeader;
