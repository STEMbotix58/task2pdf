import { StyleSheet } from "@react-pdf/renderer";

export const tableOfContentsStyles = StyleSheet.create({
  tocContainer: {
    marginTop: 25,
    flexDirection: "column",
  },
  tocItem: {
    flexDirection: "row",
    alignItems: "flex-end", // Aligns text and dots perfectly
    marginBottom: 12,
  },
  tocIndent: {
    marginLeft: 20,
  },
  tocText: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    textDecoration: "none",
  },
  dotLeader: {
    flexGrow: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    borderBottomStyle: "dotted",
    marginHorizontal: 8,
    marginBottom: 3, // Adjusts dots to sit slightly above the baseline
  },
  tocPage: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#3b82f6",
    minWidth: 25,
    textAlign: "right",
  },
});
