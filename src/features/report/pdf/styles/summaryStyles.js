import { StyleSheet } from "@react-pdf/renderer";

export const summaryStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  container: {
    marginTop: 10,
    flexDirection: "column",
    gap: 25,
  },
  sectionLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  summaryBox: {
    paddingBottom: 15,
    borderBottom: "1pt solid #e2e8f0",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    textAlign: "justify",
  },
  takeawaySection: {
    marginTop: 5,
  },
  takeawayCard: {
    padding: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    borderLeft: "4pt solid #3b82f6",
  },
  italicText: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    color: "#1e3a8a",
    lineHeight: 1.5,
  },
  recommendationSection: {
    marginTop: 5,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  targetIcon: {
    width: 8,
    height: 8,
    backgroundColor: "#10b981",
    borderRadius: 4,
    marginRight: 8,
  },
  recommendationBox: {
    padding: 15,
    backgroundColor: "#f0fdf4",
    borderRadius: 8,
    border: "1pt dashed #10b981",
  },
  signOff: {
    marginTop: "auto",
    paddingTop: 20,
    borderTop: "1pt solid #f1f5f9",
    alignItems: "center",
  },
  signOffText: {
    fontSize: 9,
    color: "#64748b",
    textAlign: "center",
    fontFamily: "Helvetica-Oblique",
    maxWidth: "80%",
  },
});
