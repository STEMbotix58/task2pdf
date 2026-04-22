import { StyleSheet } from "@react-pdf/renderer";

export const summaryPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },

  topImageContainer: {
    width: "100%",
    height: "52%",
  },
  topImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  contentWrapper: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 30,
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },

  /* Header Start*/
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    position: "relative",
  },
  numberBadge: {
    backgroundColor: "#F3A738",
    width: 65,
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontFamily: "Helvetica-Bold",
  },
  titleBlock: {
    marginLeft: 20,
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
    height: 3,
    backgroundColor: "#F3A738",
    marginTop: 10,
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

  footerLine: {
    marginTop: "auto",
    marginBottom: 30,
    height: 1.5,
    backgroundColor: "#333333",
    width: "100%",
  },
});
