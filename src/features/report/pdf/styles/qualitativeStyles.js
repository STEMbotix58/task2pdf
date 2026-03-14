import { StyleSheet } from "@react-pdf/renderer";

export const qualitativeStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "column",
    gap: 15,
  },
  heroRow: {
    flexDirection: "row",
    gap: 15,
  },
  heroBox: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#f8fafc",
    border: "1pt solid #e2e8f0",
    alignItems: "center",
  },
  heroLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    letterSpacing: 1,
    marginBottom: 8,
  },
  heroValue: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  progressSection: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    border: "1pt solid #f1f5f9",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    marginBottom: 20,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  metricItem: {
    marginBottom: 18,
  },
  metricHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  metricName: {
    fontSize: 10,
    color: "#475569",
    fontFamily: "Helvetica-Bold",
  },
  metricPercent: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#f1f5f9",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 4,
  },
  footerNote: {
    marginTop: 10,
  },
  noteText: {
    fontSize: 8,
    color: "#94a3b8",
    fontFamily: "Helvetica-Oblique",
    textAlign: "center",
  },
});
