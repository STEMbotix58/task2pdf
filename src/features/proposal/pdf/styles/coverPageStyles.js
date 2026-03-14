import { StyleSheet } from "@react-pdf/renderer";

export const coverPageStyles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    backgroundColor: "#FFFFFF",
  },
  topDecoration: {
    height: 350,
    backgroundColor: "#1e40af",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderBottomRightRadius: 100,
  },
  companyName: {
    fontSize: 14,
    color: "#bfdbfe",
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  mainTitle: {
    fontSize: 42,
    color: "#FFFFFF",
    fontWeight: "extrabold",
    lineHeight: 1.1,
  },
  subTitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 10,
    fontWeight: "light",
  },
  detailsSection: {
    padding: 40,
    marginBottom: 40,
  },
  infoRow: {
    marginBottom: 20,
  },
  label: {
    fontSize: 10,
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: "#1e293b",
    fontWeight: "bold",
  },
});
