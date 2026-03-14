import { StyleSheet } from "@react-pdf/renderer";

export const caseStudyStyles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 60,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
  },
  container: {
    flexDirection: "column",
  },
  block: {
    marginBottom: 18,
  },
  blockHeader: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#3b82f6",
    letterSpacing: 1,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  bodyText: {
    fontSize: 10,
    lineHeight: 1.6,
    color: "#334155",
    textAlign: "justify",
  },
  outcomeHighlight: {
    backgroundColor: "#f0fdf4",
    borderLeft: "3pt solid #16a34a",
    padding: 12,
    marginTop: 4,
  },
  outcomeText: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#166534",
    lineHeight: 1.4,
  },
  testimonialContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    border: "1pt solid #e2e8f0",
    position: "relative",
  },
  testimonialText: {
    fontSize: 11,
    fontFamily: "Helvetica-Oblique",
    color: "#1e293b",
    textAlign: "center",
    lineHeight: 1.5,
    paddingHorizontal: 20,
  },
  testimonialAuthor: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#64748b",
    textAlign: "center",
    marginTop: 10,
    textTransform: "uppercase",
  },
  quoteIcon: {
    position: "absolute",
    top: 5,
    left: 15,
  },
  quoteIconEnd: {
    position: "absolute",
    bottom: 5,
    right: 15,
  },
});
