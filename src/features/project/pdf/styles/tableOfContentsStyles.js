import { StyleSheet } from "@react-pdf/renderer";

export const tableOfContentsStyles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    backgroundColor: "#f5f6f7",
  },
  cyanLine: {
    width: 140,
    height: 4,
    backgroundColor: "#38c1c4", // Cyan accent line
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: "#081d3a", // Dark navy
  },
  tocContainer: {
    paddingTop: 20,
    paddingHorizontal: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
  },
  tocRow: {
    flexDirection: "row",
    justifyContent: "space-between", // Naturally creates the empty space (no dots)
    alignItems: "center",
    marginBottom: 15,
  },
  tocRowSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginLeft: 25, // Indentation for sub-items
  },
  tocTextMain: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    textDecoration: "none",
  },
  tocTextSub: {
    fontSize: 14,
    fontFamily: "Helvetica", // Regular weight for sub items
    color: "#000000",
    textDecoration: "none",
  },
  tocPage: {
    fontSize: 14,
    fontFamily: "Helvetica",
    color: "#000000",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: "#eef1f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  footerText: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#8aa0af",
    letterSpacing: 1,
  },
});
