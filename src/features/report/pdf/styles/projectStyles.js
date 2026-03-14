import { StyleSheet } from "@react-pdf/renderer";

export const projectStyles = StyleSheet.create({
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
    gap: 15,
  },
  titleCard: {
    padding: 20,
    backgroundColor: "#0f172a",
    borderRadius: 8,
    color: "#ffffff",
  },
  label: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.5,
    color: "#94a3b8",
    marginBottom: 6,
  },
  mainTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.2,
  },
  infoGrid: {
    flexDirection: "row",
    gap: 15,
  },
  gridItem: {
    flex: 1,
    padding: 12,
    border: "1pt solid #e2e8f0",
    borderRadius: 6,
    backgroundColor: "#f8fafc",
  },
  smallLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    letterSpacing: 0.8,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  valueText: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  dateRange: {
    fontSize: 8,
    color: "#64748b",
    marginTop: 2,
  },
  fullWidthCard: {
    padding: 12,
    border: "1pt solid #e2e8f0",
    borderRadius: 6,
  },
  problemBox: {
    backgroundColor: "#fef2f2",
    borderLeft: "4pt solid #ef4444",
    marginTop: 5,
  },
  problemText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
});
