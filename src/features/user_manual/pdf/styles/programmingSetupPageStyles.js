import { StyleSheet } from "@react-pdf/renderer";

export const programmingSetupPageStyles = StyleSheet.create({
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
    color: "#0f172a",
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
  explanationText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: "#334155",
    marginTop: 6,
    fontFamily: "Helvetica-Oblique",
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  imageWrapper: {
    marginBottom: 12,
    height: 200,
  },
  sectionImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 2,
    marginBottom: 5,
  },
  codeBlockContainer: {
    backgroundColor: "#1e293b",
    borderRadius: 6,
    marginBottom: 12,
    marginTop: 4,
    overflow: "hidden",
  },
  codeHeader: {
    backgroundColor: "#334155",
    paddingVertical: 6,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1pt solid #0f172a",
  },
  codeLabel: {
    color: "#cbd5e1",
    fontSize: 9,
    fontFamily: "Courier-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  codeContent: {
    padding: 12,
  },
  codeText: {
    color: "#f8fafc",
    fontSize: 10,
    fontFamily: "Courier",
    lineHeight: 1.5,
  },
});
