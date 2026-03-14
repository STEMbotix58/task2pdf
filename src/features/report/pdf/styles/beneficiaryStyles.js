import { StyleSheet } from "@react-pdf/renderer";

export const beneficiaryStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  statsRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  mainStatBox: {
    flex: 2,
    backgroundColor: "#1e293b",
    padding: 20,
    borderRadius: 8,
    color: "#ffffff",
  },
  sideStatBox: {
    flex: 1,
    border: "1pt solid #e2e8f0",
    padding: 20,
    borderRadius: 8,
    justifyContent: "center",
  },
  statLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
    marginBottom: 8,
    color: "#94a3b8",
  },
  statValue: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
  },
  statValueSmall: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
  },
  statSubtext: {
    fontSize: 8,
    marginTop: 4,
    color: "#cbd5e1",
  },
  mainGrid: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30,
  },
  column: {
    flex: 1,
  },
  sectionCard: {
    padding: 15,
    borderRadius: 8,
    border: "1pt solid #f1f5f9",
    backgroundColor: "#fafafa",
  },
  cardHeader: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#334155",
    marginBottom: 10,
    borderBottom: "1pt solid #e2e8f0",
    paddingBottom: 4,
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#475569",
  },
  // Gender Bar Specifics
  genderBarContainer: {
    marginBottom: 10,
  },
  genderBarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  genderBarLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
  },
  genderBarPercentage: {
    fontSize: 8,
    color: "#1e293b",
  },
  genderBarBg: {
    height: 6,
    backgroundColor: "#e2e8f0",
    borderRadius: 3,
    overflow: "hidden",
  },
  genderBarFill: {
    height: "100%",
  },
});
