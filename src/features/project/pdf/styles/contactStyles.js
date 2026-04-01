import { StyleSheet } from "@react-pdf/renderer";

export const contactStyles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
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

  container: {
    paddingHorizontal: 50,
    display: "flex",
    flexDirection: "column",
  },

  qrRow: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingHorizontal: 50,
    paddingBottom: 90,
  },
  qrCard: {
    width: "50%",
    height: 260,
    backgroundColor: "#081d3a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  qrText: {
    color: "#ffffff",
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 15,
  },
  qrImagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },

  contactInfoBlock: {
    paddingLeft: 60,
  },
  contactTitle: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: "#081d3a",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  contactText: {
    fontSize: 11,
    fontFamily: "Helvetica",
    marginBottom: 2,
    color: "#081d3a",
  },

  gridContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "90%",
    height: "40%",
  },
  block: {
    position: "absolute",
    width: "20%",
    height: "33.33%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  blockSpan2: {
    position: "absolute",
    width: "40%",
    height: "33.33%",
    alignItems: "center",
    justifyContent: "center",
  },

  // Updated Colors to match Image
  bgTeal: {
    backgroundColor: "#48B5A3",
  },
  bgDarkBlue: {
    backgroundColor: "#0F2646",
  },
  bgYellow: {
    backgroundColor: "#E4EA7A",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#CBD5E1",
    objectFit: "cover",
  },
  iconPlaceholder: {
    width: "70%",
    height: "70%",
    borderRadius: 4,
    objectFit: "contain",
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
});
