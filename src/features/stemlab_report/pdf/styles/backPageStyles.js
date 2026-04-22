import { StyleSheet } from "@react-pdf/renderer";

export const backPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  topSection: {
    display: "flex",
    flexDirection: "row",
    height: "78%",
    width: "100%",
  },

  leftCol: {
    width: "55%",
    backgroundColor: "#FF3131",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  leftCurvedImage: {
    position: "absolute",
    left: "-105%",
    width: "200%",
    height: "105%",
    borderRadius: 600,
    objectFit: "cover",
    objectPosition: "center left",
  },

  rightCol: {
    width: "45%",
    backgroundColor: "#1A1A1B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  dbCard: {
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dbLogo: {
    width: "100%",
    objectFit: "contain",
  },
  rightCircleWrapper: {
    position: "relative",
    marginTop: 10,
  },
  rightCircleImage: {
    width: 230,
    height: 230,
    borderRadius: 115,
    objectFit: "cover",
    borderWidth: 2,
    borderColor: "#1A1A1B",
  },
  redDecorativeDot: {
    position: "absolute",
    top: 5,
    left: -10,
    width: 50,
    height: 50,
    backgroundColor: "#FF3131",
    borderRadius: 25,
    zIndex: 2,
  },

  yuvaLogo: {
    width: 160,
    objectFit: "contain",
  },

  bottomSection: {
    height: "22%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  titleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  titleRed: {
    fontSize: 54,
    fontFamily: "Helvetica-Bold",
    color: "#FF3131",
    letterSpacing: -2,
  },
  titleBlack: {
    fontSize: 54,
    fontFamily: "Helvetica-Bold",
    color: "#1A1A1B",
    letterSpacing: -2,
    marginLeft: 12,
  },
  stemGraphic: {
    height: 110,
    objectFit: "contain",
    marginTop: 5,
  },
});
