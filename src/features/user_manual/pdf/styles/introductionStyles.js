import { StyleSheet } from "@react-pdf/renderer";

export const introStyles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  textContainer: {
    marginBottom: 20,
  },
  introductionText: {
    fontSize: 12,
    color: "#334155",
    lineHeight: 1.6,
    textAlign: "justify",
    marginBottom: 24,
  },
  galleryWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 15,
  },
  imageFrame: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 4,
    backgroundColor: "#EEEEEE",
    width: "31%",
    height: 120,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
});
