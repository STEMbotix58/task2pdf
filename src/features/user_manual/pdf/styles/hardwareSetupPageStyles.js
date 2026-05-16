import { StyleSheet } from "@react-pdf/renderer";

export const hardwareSetupPageStyles = StyleSheet.create({
  sectionContainer: {
    paddingBottom: 30,
  },
  itemContainer: {
    marginBottom: 28,
    display: "flex",
    flexDirection: "column",
  },
  stepHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0f172a", // Slate 900
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 4,
  },
  itemDescription: {
    fontSize: 11,
    lineHeight: 1.3,
    color: "#333333",
    marginBottom: 12,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  imageWrapper: {
    marginBottom: 12,
    height: 200,
    width: "48%",
  },
  sectionImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 2,
  },
  noteBox: {
    marginTop: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fffbeb",
    borderLeftWidth: 3,
    borderLeftColor: "#f59e0b",
    borderRadius: 2,
  },
  noteText: {
    fontSize: 10,
    lineHeight: 1.5,
    color: "#b45309",
    fontFamily: "Helvetica-Oblique",
  },
});
