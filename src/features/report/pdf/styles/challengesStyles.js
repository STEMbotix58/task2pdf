import { StyleSheet } from "@react-pdf/renderer";

export const challengesStyles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
  },
  sectionBox: {
    paddingLeft: 15,
    position: "relative",
    marginBottom: 20,
  },
  accentBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderRadius: 2,
  },
  sectionLabel: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  contentText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    textAlign: "justify",
  },
  lessonsContainer: {
    backgroundColor: "#f8fafc",
    borderRadius: 8,
    border: "1pt solid #e2e8f0",
    padding: 10,
  },
  lessonsLabel: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#1e293b",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  lessonsContent: {
    borderTop: "1pt solid #cbd5e1",
    paddingTop: 12,
  },
  lessonsText: {
    fontSize: 10,
    fontFamily: "Helvetica-Oblique",
    lineHeight: 1.6,
    color: "#475569",
    textAlign: "center",
  },
});
