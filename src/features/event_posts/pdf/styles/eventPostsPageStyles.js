import { StyleSheet } from "@react-pdf/renderer";

export const eventPostsPageStyles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 25,
    borderBottom: 2,
    borderBottomColor: "#1a73e8", // Accent color
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 10,
    color: "#777",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#EEE",
    borderRadius: 6,
    backgroundColor: "#F9FAFB",
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 12,
    textDecoration: "underline",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  detailItem: {
    width: "48%",
    marginBottom: 14,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#CBD5E1", // Soft vertical line for visual structure
  },
  label: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#64748B",
    marginBottom: 3,
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 11,
    fontWeight: 500,
    color: "#1E293B",
  },
  footer: {
    marginTop: "auto",
    textAlign: "center",
    fontSize: 8,
    color: "#999",
  },
});
