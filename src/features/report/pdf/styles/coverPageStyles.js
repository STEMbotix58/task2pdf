import { StyleSheet } from "@react-pdf/renderer";

export const coverPageStyles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 80,
  },
  logoLeft: {
    width: 120,
    height: "auto",
  },
  logoRight: {
    width: 140,
    height: "auto",
  },
  mainBody: {
    flexGrow: 1,
    marginTop: 20,
  },
  accentBar: {
    width: 40,
    height: 4,
    backgroundColor: "#1A365D", // Deep professional blue
    marginBottom: 20,
  },
  reportType: {
    fontSize: 14,
    color: "#4A5568",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A365D",
    lineHeight: 1.2,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  subtitleContainer: {
    maxWidth: "80%",
  },
  subtitle: {
    fontSize: 12,
    color: "#718096",
    lineHeight: 1.5,
    fontStyle: "italic",
  },
  footerInfo: {
    borderTop: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 20,
    marginBottom: 40,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    color: "#718096",
    width: 150,
    fontWeight: "bold",
  },
  value: {
    fontSize: 10,
    color: "#2D3748",
    flex: 1,
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 15,
    backgroundColor: "#1A365D",
  },
});
