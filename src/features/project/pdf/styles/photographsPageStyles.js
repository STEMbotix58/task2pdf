import { StyleSheet } from "@react-pdf/renderer";

export const photographsPageStyles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: 50,
  },
  cyanLine: {
    width: 140,
    height: 4,
    backgroundColor: "#38c1c4",
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: "#081d3a",
    marginBottom: 25,
  },

  photoGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 14,
    paddingHorizontal: 50,
  },

  photo: {
    width: "48%",
    height: 140,
    objectFit: "cover",
    marginBottom: 7,
  },
});
