import { StyleSheet } from "@react-pdf/renderer";

export const conclusionPageStyles = StyleSheet.create({
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
    marginTop: 45,
    display: "flex",
    flexDirection: "column",
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 20,
  },
  headerText: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
    letterSpacing: -0.5,
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#1A1A1B",
    marginBottom: 12,
  },
  bottomWidePhoto: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    padding: 20,
  },
});
