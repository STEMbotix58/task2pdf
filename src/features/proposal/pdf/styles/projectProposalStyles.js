import { StyleSheet } from "@react-pdf/renderer";

export const projectProposalStyles = StyleSheet.create({
  headerSection: {
    marginVertical: 15,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 8,
  },
  introText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    textAlign: "justify",
  },

  sectionHeading: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 15,
    marginBottom: 8,
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 2,
    textTransform: "uppercase",
  },

  objectiveGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 15,
  },
  objectiveCard: {
    width: "100%",
    padding: 8,
    backgroundColor: "#f8fafc",
    borderRadius: 4,
    borderLeft: "2px solid #3b82f6",
  },
  objTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 2,
  },
  objDesc: {
    fontSize: 9,
    color: "#64748b",
    lineHeight: 1.3,
  },

  serviceItem: {
    marginBottom: 10,
    paddingLeft: 5,
  },
  serviceHeader: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1e293b",
  },
  serviceBody: {
    fontSize: 9,
    color: "#475569",
    lineHeight: 1.4,
    marginTop: 2,
  },

  highlightBox: {
    backgroundColor: "#eff6ff",
    padding: 10,
    borderRadius: 4,
    marginVertical: 10,
  },
  highlightText: {
    fontSize: 9,
    color: "#1e40af",
    fontWeight: "bold",
  },
});
