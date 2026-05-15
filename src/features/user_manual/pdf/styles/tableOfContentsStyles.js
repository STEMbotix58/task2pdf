import { StyleSheet } from "@react-pdf/renderer";

export const tableOfContentsStyles = StyleSheet.create({
  tocContainer: {
    marginTop: 25,
    flexDirection: "column",
  },
  tocItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  tocIndent: {
    marginLeft: 20,
  },
  tocText: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    textDecoration: "none",
  },
  tocSubText: {
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#444444",
    marginLeft: 20,
    textDecoration: "none",
  },
  dotLeader: {
    flexGrow: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: "#cbd5e1",
    borderBottomStyle: "dotted",
    marginHorizontal: 8,
    marginBottom: 3,
  },
  tocPage: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#3b82f6",
    minWidth: 25,
    textAlign: "right",
  },
});
