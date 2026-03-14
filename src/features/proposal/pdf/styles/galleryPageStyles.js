import { StyleSheet } from "@react-pdf/renderer";

export const galleryPageStyles = StyleSheet.create({
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 9,
  },
  photo: {
    height: 120,
    width: 165,
    objectFit: "cover",
  },
});
