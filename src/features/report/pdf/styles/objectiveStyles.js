import { StyleSheet } from "@react-pdf/renderer";

export const objectiveStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  sectionRow: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  },
  goalCard: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    border: "1pt solid #e2e8f0",
    backgroundColor: "#ffffff",
  },
  cardLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#3b82f6",
    letterSpacing: 1,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#334155",
  },
  timelineSection: {
    marginTop: 5,
  },
  timelineHeader: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 1,
  },
  outcomeRow: {
    flexDirection: "row",
    marginBottom: 15,
    paddingLeft: 10,
  },
  outcomeIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  iconLetter: {
    color: "#ffffff",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  outcomeContent: {
    flex: 1,
    borderLeft: "1pt solid #e2e8f0",
    paddingLeft: 12,
  },
  outcomeLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#475569",
    marginBottom: 4,
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#64748b",
  },
  alignmentBox: {
    padding: 15,
    backgroundColor: "#eff6ff",
    borderRadius: 8,
    border: "1pt solid #bfdbfe",
  },
  alignmentLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#1e40af",
    marginBottom: 6,
    textAlign: "center",
  },
  alignmentText: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#1e3a8a",
    textAlign: "center",
  },
});
