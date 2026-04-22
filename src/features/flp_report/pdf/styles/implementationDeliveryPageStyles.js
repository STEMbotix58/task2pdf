import { StyleSheet } from "@react-pdf/renderer";

export const implementationDeliveryPageStyles = StyleSheet.create({
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

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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

  imageGridRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  wideImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
  },

  bottomScreenshot: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    marginTop: 5,
  },

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
