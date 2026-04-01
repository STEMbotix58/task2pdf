import { StyleSheet } from "@react-pdf/renderer";

export const summaryPageStyles = StyleSheet.create({
  pageContainer: {
    position: "relative",
  },
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 50,
  },
  cyanLine: {
    width: 140,
    height: 4,
    backgroundColor: "#38c1c4",
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: "#081d3a",
    marginBottom: 25,
  },
  paragraph: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#333333",
    fontFamily: "Helvetica",
    fontWeight: "medium",
  },

  gridContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
  },
  block: {
    position: "absolute",
    width: "25%",
    height: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
  },
  blockSpan2: {
    position: "absolute",
    width: "50%",
    height: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },

  // Updated Colors to match Image
  bgTeal: {
    backgroundColor: "#00B971", // Impact Green
  },
  bgDarkBlue: {
    backgroundColor: "#0088CE", // Innovation Blue
  },
  bgYellow: {
    backgroundColor: "#FF4C41", // Empowerment Red/Coral
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  iconPlaceholder: {
    width: "40%",
    height: "40%",
    objectFit: "contain",
    marginBottom: 5,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
});
