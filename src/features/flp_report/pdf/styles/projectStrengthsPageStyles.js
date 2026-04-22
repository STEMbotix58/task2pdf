import { StyleSheet } from "@react-pdf/renderer";

export const projectStrengthsPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 50,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },

  /*Header Start*/
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    position: "relative",
  },
  numberBadge: {
    backgroundColor: "#F3A738",
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: 800,
  },

  titleBlock: {
    marginLeft: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
  },
  titleText: {
    fontSize: 34,
    color: "#F23C41",
    fontFamily: "Helvetica-Bold",
    letterSpacing: -0.5,
  },

  yellowDivider: {
    width: 45,
    height: 5,
    backgroundColor: "#F3A738",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 50,
  },

  iconRight: {
    position: "absolute",
    right: 0,
    top: -5,
    width: 60,
    height: 60,
    objectFit: "contain",
  },

  /*Header End*/
  paragraph: {
    fontSize: 14,
    lineHeight: 1.2,
    textAlign: "justify",
    marginBottom: 10,
  },

  wideImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  footerLine: {
    marginTop: "auto",
    marginBottom: 30,
    height: 1.5,
    backgroundColor: "#333333",
    width: "100%",
  },
});
