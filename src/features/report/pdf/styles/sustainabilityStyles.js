import { StyleSheet } from "@react-pdf/renderer";

export const sustainabilityStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  sectionCard: {
    padding: 15,
    borderRadius: 8,
    border: "1pt solid #e2e8f0",
    backgroundColor: "#ffffff",
    marginBottom: 15,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 8,
  },
  sectionLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#475569",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    textAlign: "justify",
  },
  replicationBox: {
    marginTop: 5,
    paddingTop: 10,
    borderTop: "1pt solid #f1f5f9",
  },
  replicationText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#1e293b",
    fontFamily: "Helvetica-Oblique",
  },
  visionNote: {
    marginTop: "auto",
    padding: 12,
    backgroundColor: "#f8fafc",
    borderLeft: "3pt solid #3b82f6",
  },
  visionText: {
    fontSize: 8,
    color: "#64748b",
    lineHeight: 1.4,
  },
});
