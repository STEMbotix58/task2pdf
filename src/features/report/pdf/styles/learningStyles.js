import { StyleSheet } from "@react-pdf/renderer";

export const learningStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  heroMetric: {
    backgroundColor: "#1e293b",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  heroLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#94a3b8",
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  heroValue: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
  },
  heroSubtext: {
    fontSize: 8,
    color: "#cbd5e1",
    marginTop: 4,
  },
  mainGrid: {
    flexDirection: "column",
    gap: 20,
    marginBottom: 20,
  },
  skillsRow: {
    flexDirection: "row",
    gap: 15,
  },
  skillCard: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f8fafc",
    borderRadius: 4,
    border: "1pt solid #e2e8f0",
  },
  skillTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#2563eb",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  skillBody: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#475569",
    textAlign: "justify",
  },
  toolsSection: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "#fff7ed",
    border: "1pt solid #fdba74",
    borderRadius: 8,
  },
  toolsHeader: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#9a3412",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  toolsContent: {
    borderTop: "1pt solid #ffedd5",
    paddingTop: 10,
  },
  toolsText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#7c2d12",
    textAlign: "center",
  },
});
