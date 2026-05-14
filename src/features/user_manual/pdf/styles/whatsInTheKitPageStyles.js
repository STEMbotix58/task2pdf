import { StyleSheet } from "@react-pdf/renderer";

export const whatsInTheKitPageStyles = StyleSheet.create({
  sectionContainer: {
    paddingBottom: 30,
    pageBreakInside: "avoid",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    marginTop: 20,
  },
  itemCard: {
    width: "48%", // Creates a 2-column grid
    padding: 12,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    border: "1pt solid #E5E7EB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  sectionImage: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
  textGroup: {
    marginTop: 4,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 9,
    color: "#6B7280",
    lineHeight: 1.4,
  },
  badge: {
    fontSize: 8,
    color: "#3B82F6",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 4,
  },
});
