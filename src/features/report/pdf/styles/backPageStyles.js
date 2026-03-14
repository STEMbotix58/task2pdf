import { StyleSheet } from "@react-pdf/renderer";

export const backPageStyles = StyleSheet.create({
  backPage: {
    padding: 60,
    fontFamily: "Helvetica",
    backgroundColor: "#F8FAFC",
    display: "flex",
    flexDirection: "column",
  },
  topAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: "#1A365D",
  },
  backContent: {
    marginTop: 100,
    flexGrow: 1,
    alignItems: "center",
  },
  thankYouText: {
    fontSize: 30,
    color: "#1A365D",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  backDivider: {
    width: 40,
    height: 3,
    backgroundColor: "#3b82f6",
    marginBottom: 20,
  },
  conclusionNote: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 1.6,
    textAlign: "center",
  },
  backFooter: {
    borderTop: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  contactContainer: {
    flexDirection: "column",
  },
  contactHeading: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1A365D",
    letterSpacing: 1,
    marginBottom: 8,
  },
  contactLink: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 4,
  },
  backLogoContainer: {
    alignItems: "flex-end",
  },
  footerLogo: {
    width: 100,
    height: "auto",
    marginBottom: 10,
    opacity: 0.8,
  },
  copyright: {
    fontSize: 8,
    color: "#94a3b8",
  },
});
