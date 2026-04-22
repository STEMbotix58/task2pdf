import { StyleSheet } from "@react-pdf/renderer";

export const coverPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },

  redSidebar: {
    left: 0,
    top: 0,
    width: "10%",
    backgroundColor: "#FF3131",
  },

  mainContent: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
  },

  logoContainer: {
    display: "flex",
    alignItems: "flex-end",
    paddingRight: 50,
    paddingVertical: 20,
  },

  yuvaLogo: {
    width: 150,
    objectFit: "contain",
  },

  titleContainer: {
    position: "relative",
    paddingRight: 25,
    paddingLeft: 50,
    paddingBottom: 20,
  },

  titleText: {
    fontSize: 58,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
    lineHeight: 1.05,
    letterSpacing: -1,
  },

  clipboardIcon: {
    position: "absolute",
    right: 10,
    top: 40,
    width: 65,
    objectFit: "contain",
  },

  subtitleText: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: "#333333",
    lineHeight: 1.2,
    textAlign: "justify",
    paddingRight: 25,
    paddingLeft: 50,
    paddingBottom: 10,
  },

  partnerContainer: {
    backgroundColor: "#F4F4F4",
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  partnerSection: {
    marginBottom: 25,
  },
  partnerTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
    marginBottom: 8,
  },
  partnerText: {
    fontSize: 10.5,
    color: "#1A1A1B",
    lineHeight: 1.4,
    marginBottom: 8,
  },

  footerContainer: {
    position: "absolute",
    bottom: 40,
    right: 50,
    display: "flex",
    alignItems: "flex-end",
  },
  bottomLeftIcon: {
    position: "absolute",
    bottom: 40,
    left: 50,
    width: 70,
    objectFit: "cover",
  },
});
