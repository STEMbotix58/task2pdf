import { StyleSheet } from "@react-pdf/renderer";

export const prefacePageStyles = StyleSheet.create({
  pageContainer: {
    paddingBottom: 40,
    position: "relative",
    height: "100%",
  },
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
  bodyContainer: {
    paddingHorizontal: 50,
  },
  sectionRow: {
    flexDirection: "row",
    marginBottom: 35,
    alignItems: "flex-start",
  },
  imageWrapper: {
    width: "25%",
    marginRight: 15,
  },
  profileImage: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    objectPosition: "top",
  },
  textWrapper: {
    width: "75%",
  },
  name: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: "#000000",
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  designation: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#38c1c4",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333333",
    fontFamily: "Helvetica",
    textAlign: "justify",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    backgroundColor: "#eef1f4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  pageNumber: {
    fontSize: 10,
    color: "#666666",
  },
  website: {
    fontSize: 10,
    color: "#666666",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});
