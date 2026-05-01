import { StyleSheet } from "@react-pdf/renderer";

export const photosPageStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 9,
  },
  photo: {
    height: 115,
    width: 158,
    objectFit: "cover",
  },
});
