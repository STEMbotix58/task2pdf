import { StyleSheet } from "@react-pdf/renderer";

export const coverPageStyles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  brandSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 140,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 10,
    letterSpacing: 2,
    color: "#64748b",
    textTransform: "uppercase",
  },
  titleGroup: {
    alignItems: "center",
    textAlign: "center",
    marginVertical: "auto",
  },
  companyName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2563eb",
    letterSpacing: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: "heavy",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#475569",
    fontFamily: "Helvetica-Oblique",
  },
  metaSection: {
    borderTop: 1,
    borderTopColor: "#e2e8f0",
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  metaRow: {
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#94a3b8",
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 11,
    color: "#1e293b",
    fontWeight: "medium",
  },
});
