import { StyleSheet } from "@react-pdf/renderer";

export const coverPageStyles = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  topSection: {
    height: "45%",
    paddingTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },
  greySwoopBg: {
    position: "absolute",
    right: -100,
    bottom: -50,
    width: 300,
    height: 300,
    backgroundColor: "#F4F4F4",
    borderRadius: 150,
    zIndex: -1,
  },
  topLogosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  topLogo: {
    width: "40%",
    height: 170,
    objectFit: "contain",
    objectPosition: "center",
  },
  titleContainer: {
    marginTop: "auto",
  },
  titleRed: {
    fontSize: 76,
    width: "90%",
    fontWeight: "heavy",
    color: "#E31E24",
    textTransform: "uppercase",
    letterSpacing: -1.5,
    marginBottom: -12,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleBlack: {
    fontSize: 76,
    fontWeight: "heavy",
    color: "#1A1A1B",
    letterSpacing: -1.5,
  },
  arrowCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },

  gridContainer: {
    height: "55%",
    display: "flex",
    flexDirection: "column",
  },
  gridRow: {
    flex: 1,
    flexDirection: "row",
  },

  colLeft: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  colMiddle: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  colRight: {
    width: "40%",
    padding: 25,
    justifyContent: "center",
  },

  bgYellow: { backgroundColor: "#F4CE14" },
  bgRed: { backgroundColor: "#FF3131" },
  bgDarkBlue: { backgroundColor: "#262358" },
  bgWhite: { backgroundColor: "#FFFFFF" },

  iconLarge: {
    width: 70,
  },
  photoFrame: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    objectFit: "cover",
  },
  impactText: {
    fontSize: 36,
    color: "#000000",
  },
  impactIcon: {
    width: 70,
    marginTop: 15,
  },
  redCornerCurve: {
    position: "absolute",
    bottom: -120,
    right: -120,
    width: 240,
    height: 240,
    backgroundColor: "#E31E24",
    borderTopLeftRadius: 120,
    zIndex: 0,
  },
  preparedByText: {
    fontSize: 11,
    color: "#262358",
    marginBottom: 8,
  },
  yuvaLogo: {
    width: 80,
    height: 40,
    marginBottom: 15,
    objectFit: "contain",
  },
  electronIcon: {
    position: "absolute",
    top: 100,
    left: 15,
    width: 30,
  },
  smallLogosRow: {
    flexDirection: "row",
    gap: 10,
  },
  astronautGraphic: {
    position: "absolute",
    marginTop: -20,
    marginLeft: 100,
    width: 90,
  },
});
