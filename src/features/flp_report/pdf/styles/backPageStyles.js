import { StyleSheet } from "@react-pdf/renderer";

export const backPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },

  leftColumn: {
    width: "55%",
    height: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 40,
    paddingRight: 0,
  },
  leftImageContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 4,
  },
  leftImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  rightColumn: {
    width: "45%",
    height: "100%",
    backgroundColor: "#FF3131",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  logoContainer: {
    marginTop: 100,
    width: "60%",
    display: "flex",
    alignItems: "center",
  },
  yuvaLogo: {
    width: "100%",
    objectFit: "contain",
  },

  titleContainer: {
    marginTop: 80,
    width: "100%",
    paddingLeft: 40,
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 40,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    lineHeight: 1.05,
    letterSpacing: -1,
  },

  illustrationContainer: {
    marginTop: "auto",
    marginBottom: 50,
    width: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    width: "100%",
    objectFit: "contain",
  },
});
