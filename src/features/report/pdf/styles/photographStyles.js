import { StyleSheet } from "@react-pdf/renderer";

export const photographStyles = StyleSheet.create({
  photoGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
  },

  photo: {
    width: "48%",
    height: 140,
    objectFit: "cover",
    marginBottom: 7,
  },
});
