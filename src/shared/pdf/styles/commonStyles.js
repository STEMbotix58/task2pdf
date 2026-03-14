import { StyleSheet } from "@react-pdf/renderer";

export const commonStyles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 70,
    paddingBottom: 90,
    fontFamily: "Helvetica",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
  },
  watermark: {
    position: "absolute",
    top: "40%",
    left: "10%",
    width: "80%",
    opacity: 0.1,
    zIndex: -1,
  },
});
