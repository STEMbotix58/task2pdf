import { StyleSheet } from "@react-pdf/renderer";

export const prefacePageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative",
  },

  yellowSidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "10%",
    backgroundColor: "#F4CE14",
    zIndex: -1,
  },
  redBanner: {
    position: "absolute",
    bottom: 0,
    left: "10%",
    right: 0,
    height: 70,
    backgroundColor: "#FF3131",
  },
  bgCircle: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 125,
    opacity: 0.6,
    zIndex: -2,
  },

  headerContainer: {
    marginTop: 60,
    marginLeft: "18%",
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 42,
    fontWeight: "heavy",
    color: "#FF3131",
    letterSpacing: -1,
  },

  mainContent: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "18%",
    paddingRight: "8%",
    gap: 80,
    marginTop: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  logoContainer: {
    width: "35%",
    height: 70,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  dashedBox: {
    width: "60%",
    borderWidth: 1.5,
    borderColor: "#1A1A1B",
    borderStyle: "dashed",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  boxText: {
    fontSize: 12,
    color: "#1A1A1B",
  },
});
