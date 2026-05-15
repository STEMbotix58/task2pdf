import { StyleSheet } from "@react-pdf/renderer";

export const userManualStyles = StyleSheet.create({
  // Section containers
  sectionContainer: {
    marginBottom: 20,
    pageBreakInside: "avoid",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 8,
  },

  subsectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 8,
    marginBottom: 6,
  },

  sectionContent: {
    fontSize: 11,
    lineHeight: 1.3,
    color: "#334155",
    marginBottom: 8,
    textAlign: "justify",
  },

  // Items
  itemContainer: {
    marginBottom: 12,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: "#cbd5e1",
  },

  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },

  itemDescription: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#475569",
    marginBottom: 4,
  },

  // Code block
  codeBlock: {
    backgroundColor: "#f1f5f9",
    padding: 10,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#22c55e",
    fontFamily: "Courier",
    fontSize: 9,
    color: "#1e293b",
    lineHeight: 1.3,
    maxHeight: 150,
    overflow: "hidden",
  },

  codeLabel: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 4,
  },

  // Images in sections
  sectionImage: {
    marginBottom: 10,
    maxWidth: "100%",
    maxHeight: 200,
  },

  // Safty Image// Images Container
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  saftyImageWrapper: {
    marginBottom: 12,
    height: 200,
  },

  fullWidthImage: {
    width: "100%",
  },

  halfWidthImage: {
    width: "48%",
  },

  // Image
  saftyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  // FAQ items
  faqItem: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },

  faqQuestion: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },

  faqAnswer: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#475569",
  },

  // List items
  listItem: {
    marginLeft: 12,
    marginBottom: 6,
    fontSize: 10,
    color: "#334155",
    lineHeight: 1.4,
  },

  listBullet: {
    marginRight: 6,
    color: "#2563eb",
  },

  // Table of contents
  tocItem: {
    fontSize: 11,
    marginBottom: 4,
    color: "#0f172a",
  },

  tocPageNumber: {
    fontSize: 11,
    color: "#64748b",
  },
});
