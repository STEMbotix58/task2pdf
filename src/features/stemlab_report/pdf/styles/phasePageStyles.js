import { StyleSheet } from "@react-pdf/renderer";

export const phasePageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
  },
  // --- BACKGROUND & STRUCTURAL ---
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
    marginBottom: 40,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  // --- Title ---
  headerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  phaseTitleText: {
    fontSize: 26,
    fontWeight: "heavy",
    color: "#FF3131",
    letterSpacing: -0.5,
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
  paragraph: {
    fontSize: 13,
    lineHeight: 1.2,
    textAlign: "justify",
    marginBottom: 10,
  },
  wideImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
  },
});
