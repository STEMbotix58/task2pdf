import { StyleSheet } from "@react-pdf/renderer";

export const institutionalStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 15,
  },
  impactCard: {
    padding: 15,
    borderRadius: 6,
    border: "1pt solid #e2e8f0",
    backgroundColor: "#fcfcfc",
  },
  sustainabilityHighlight: {
    backgroundColor: "#f0fdf4",
    borderColor: "#bbf7d0",
    borderLeft: "4pt solid #22c55e",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  leafIcon: {
    width: 10,
    height: 10,
    backgroundColor: "#22c55e",
    borderRadius: 2,
    marginRight: 8,
  },
  cardHeader: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#475569",
    letterSpacing: 0.8,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  separator: {
    height: 1,
    backgroundColor: "#dcfce7",
    marginBottom: 8,
  },
  cardBody: {
    fontSize: 10,
    color: "#334155",
    textAlign: "justify",
  },
});
