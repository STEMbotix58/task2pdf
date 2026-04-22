import { StyleSheet } from "@react-pdf/renderer";

export const impactAnalysisPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
  },
  redSidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "10%",
    backgroundColor: "#FF3131",
    zIndex: -1,
  },
  mainContent: {
    marginLeft: "16%",
    marginRight: "6%",
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
  },

  // Start Block
  infoBlockContainer: {
    position: "relative",
    marginBottom: 20,
  },
  blockHeaderContainer: {
    backgroundColor: "#FF3131",
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    position: "absolute",
    top: -8,
    left: 20,
    zIndex: 0,
  },
  blockHeaderText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "heavy",
  },
  yellowContentBox: {
    backgroundColor: "#F4CE14",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 25,
    position: "relative",
  },
  introText: {
    fontSize: 12,
    lineHeight: 1.4,
    textAlign: "justify",
    color: "#1A1A1B",
  },
  headerIcon: {
    position: "absolute",
    top: -30,
    right: 0,
    width: 60,
    objectFit: "contain",
  },
  // End Block

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  halfImage: {
    width: "48%",
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },
  halfContent: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 1.2,
    textAlign: "justify",
    color: "#1A1A1B",
  },
  sectionTitleRed: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
  },
});
