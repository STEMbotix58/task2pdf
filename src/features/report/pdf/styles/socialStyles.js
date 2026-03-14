import { StyleSheet } from "@react-pdf/renderer";

export const socialStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  impactSection: {
    marginBottom: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  sectionHeader: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    letterSpacing: 1,
  },
  contentBox: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f8fafc",
    border: "1pt solid #e2e8f0",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "justify",
  },
  splitRow: {
    flexDirection: "row",
    gap: 15,
  },
  splitCard: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    border: "1pt solid #f1f5f9",
    backgroundColor: "#fafafa",
  },
  splitHeader: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  smallBody: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#334155",
  },
});
