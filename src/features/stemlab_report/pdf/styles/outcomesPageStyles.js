import { StyleSheet } from "@react-pdf/renderer";

export const outcomesPageStyles = StyleSheet.create({
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
    display: "flex",
    alignItems: "center",
    paddingTop: 50,
  },
  // sidebarIcon: {
  //   width: 50,
  //   height: 50,
  //   objectFit: "contain",
  // },
  bgSwoop: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 300,
    height: 300,
    backgroundColor: "#F4F6F8",
    borderRadius: 150,
    zIndex: -2,
  },

  mainContent: {
    marginLeft: "16%",
    marginRight: "6%",
    marginTop: 45,
    display: "flex",
    flexDirection: "column",
  },
  headerText: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
    letterSpacing: -0.5,
    marginBottom: 15,
  },

  topImageWrapper: {
    backgroundColor: "#F4CE14",
    padding: 10,
    width: "100%",
    marginBottom: 15,
  },
  topImage: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1A1A1B",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 15,
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#1A1A1B",
  },
  boldText: {
    fontFamily: "Helvetica-Bold",
  },

  bottomImageWrapper: {
    backgroundColor: "#F4CE14",
    paddingVertical: 15,
    paddingLeft: 15,
    marginRight: -40,
    paddingRight: 40,
    marginTop: "auto",
  },
  bottomImage: {
    width: "100%",
    height: 140,
    objectFit: "cover",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#1A1A1B",
  },
});
