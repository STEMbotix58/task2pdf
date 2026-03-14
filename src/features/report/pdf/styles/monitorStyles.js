import { StyleSheet } from "@react-pdf/renderer";

export const monitorStyles = StyleSheet.create({
  introContainer: {
    marginBottom: 20,
    marginTop: 10,
  },
  introText: {
    fontSize: 10,
    color: "#64748b",
    lineHeight: 1.5,
    fontFamily: "Helvetica-Oblique",
  },
  methodologyGrid: {
    flexDirection: "column",
  },
  frequencyBox: {
    backgroundColor: "#f8fafc",
    padding: 15,
    borderRadius: 8,
    border: "1pt solid #e2e8f0",
    borderLeft: "4pt solid #0f172a",
  },
  frequencyLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    letterSpacing: 1,
    marginBottom: 4,
  },
  frequencyValue: {
    fontSize: 10,
    color: "#1e293b",
    fontFamily: "Helvetica-Bold",
  },
  methodCard: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    border: "1pt solid #f1f5f9",
  },
  cardHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  cardTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    letterSpacing: 0.5,
  },
  cardBody: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    paddingLeft: 14,
  },
  complianceNote: {
    marginTop: "auto",
    padding: 12,
    borderTop: "1pt solid #f1f5f9",
  },
  complianceText: {
    fontSize: 8,
    color: "#94a3b8",
    textAlign: "center",
  },
});
