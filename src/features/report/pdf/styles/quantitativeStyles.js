import { StyleSheet } from "@react-pdf/renderer";

export const quantitativeStyles = StyleSheet.create({
  introBox: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: "#f8fafc",
    borderLeft: "3pt solid #cbd5e1",
  },
  introText: {
    fontSize: 10,
    color: "#475569",
    lineHeight: 1.5,
    fontFamily: "Helvetica-Oblique",
  },
  grid: {
    flexDirection: "column",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    padding: 10,
    border: "1pt solid #f1f5f9",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  indicator: {
    width: 20,
    height: 3,
    borderRadius: 2,
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    letterSpacing: 1,
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#334155",
    textAlign: "justify",
  },
  observationNote: {
    marginTop: "auto",
    paddingTop: 10,
    borderTop: "1pt solid #f1f5f9",
  },
  noteText: {
    fontSize: 8,
    color: "#94a3b8",
    fontFamily: "Helvetica-Oblique",
  },
  summaryNote: {
    marginTop: 15,
    padding: 12,
    backgroundColor: "#f9fafb",
    borderLeft: "3pt solid #3b82f6",
  },
  summaryTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 9,
    color: "#64748b",
    lineHeight: 1.4,
  },
});
