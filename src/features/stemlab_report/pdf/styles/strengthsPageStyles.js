import { StyleSheet } from "@react-pdf/renderer";

export const strengthsPageStyles = StyleSheet.create({
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
  headerIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#262358",
    borderRadius: 50,
    marginLeft: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#1A1A1B",
    marginBottom: 12,
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
  },
  highlightBlockContainer: {
    backgroundColor: "#F4CE14",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 20,
    paddingRight: 20,
  },
  redImageWrapper: {
    width: "45%",
    height: 140,
    backgroundColor: "#FF3131",
    padding: 12,
    top: -20,
    left: 0,
  },
  yellowTextWrapper: {
    width: "55%",
    paddingLeft: 10,
  },
  yellowBoxText: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#1A1A1B",
  },
  // New
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
});
