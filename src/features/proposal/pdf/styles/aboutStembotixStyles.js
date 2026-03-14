import { StyleSheet } from "@react-pdf/renderer";

export const aboutStembotixStyles = StyleSheet.create({
  introText: {
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#334155",
    marginBottom: 12,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  techBadge: {
    backgroundColor: "#eff6ff",
    borderLeft: "2px solid #2563eb",
    padding: "4px 8px",
  },
  techText: {
    fontSize: 8,
    color: "#1e40af",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 10,
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 2,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  statCard: {
    width: "30%",
    marginBottom: 5,
    padding: 6,
    backgroundColor: "#f8fafc",
    borderRadius: 4,
  },
  statValue: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2563eb",
  },
  statLabel: {
    fontSize: 8,
    color: "#64748b",
    lineHeight: 1.2,
  },
  methodologyRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: "#2563eb",
  },
  signatureSection: {
    marginTop: 10,
    borderTop: "1px solid #e2e8f0",
    paddingTop: 10,
  },
  methodologyText: {
    fontSize: 9,
    color: "#475569",
  },

  // SPOC Section
  contactSection: {
    marginTop: 5,
    fontSize: 10,
  },

  contactHeading: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: "bold",
  },

  contactLine: {
    marginBottom: 2,
  },

  signatureImage: {
    width: 100,
    height: 60,
    objectFit: "contain",
  },
});
