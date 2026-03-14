import { StyleSheet } from "@react-pdf/renderer";

export const innovationStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  techSection: {
    marginBottom: 15,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    letterSpacing: 1,
  },
  card: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f8fafc",
    border: "1pt solid #e2e8f0",
  },
  researchCard: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f0fdf4",
    border: "1pt dashed #10b981",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
  researchText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#065f46",
    fontFamily: "Helvetica-Oblique",
  },
});
