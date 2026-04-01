import { StyleSheet } from "@react-pdf/renderer";

export const conclusionStyles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    width: "100%",
    height: "100%",
  },
  cyanLine: {
    width: 140,
    height: 4,
    backgroundColor: "#38c1c4",
    marginBottom: 25,
  },
  lineWhite: {
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    color: "#081d3a",
    marginBottom: 25,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#333333",
    fontFamily: "Helvetica",
    textAlign: "justify",
  },
});
