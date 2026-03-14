import { StyleSheet } from "@react-pdf/renderer";

export const baselineStyles = StyleSheet.create({
  introSection: {
    marginBottom: 20,
  },
  introText: {
    fontSize: 10,
    color: "#64748b",
    lineHeight: 1.5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 4,
    overflow: "hidden",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#f1f5f9",
    borderBottomWidth: 1,
    minHeight: 35,
    alignItems: "center",
  },
  tableHeader: {
    backgroundColor: "#f8fafc",
    borderBottomWidth: 2,
    borderBottomColor: "#e2e8f0",
  },
  tableCol: {
    flex: 1,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  headerText: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    letterSpacing: 0.5,
  },
  cellText: {
    fontSize: 10,
    color: "#475569",
  },
  cellTextBold: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  changeCol: {
    backgroundColor: "#f0fdf4", // Light green background for the change column
    height: "100%",
    justifyContent: "center",
  },
  changeText: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  summaryNote: {
    marginTop: 25,
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
