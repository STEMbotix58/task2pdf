import { StyleSheet } from "@react-pdf/renderer";

export const economicStyles = StyleSheet.create({
  metricsRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  metricCard: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    border: "1pt solid #e2e8f0",
    backgroundColor: "#f8fafc",
    alignItems: "center",
  },
  metricLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  metricValue: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  contentSection: {
    flexDirection: "column",
  },
  infoBlock: {
    width: "100%",
  },
  iconHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: "#3b82f6",
    borderRadius: 4,
    marginRight: 8,
  },
  blockTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    letterSpacing: 0.5,
  },
  textArea: {
    paddingLeft: 16,
    borderLeft: "1pt solid #cbd5e1",
    marginLeft: 3,
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
  footerNote: {
    marginTop: "auto",
    paddingTop: 10,
    borderTop: "1pt solid #f1f5f9",
  },
  noteText: {
    fontSize: 8,
    color: "#94a3b8",
    fontFamily: "Helvetica-Oblique",
  },
});
