import { StyleSheet } from "@react-pdf/renderer";

export const verificationStyles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 18,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 8,
  },

  declarationBox: {
    borderWidth: 0.8,
    borderColor: "#444",
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#f5f7fa",
    borderRadius: 2,
  },

  declarationText: {
    fontSize: 10.5,
    lineHeight: 1.5,
    textAlign: "justify",
    color: "#222",
  },

  bold: {
    fontWeight: "bold",
  },

  table: {
    borderWidth: 0.8,
    marginBottom: 26,
  },

  row: {
    flexDirection: "row",
    minHeight: 34,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#999",
  },

  altRow: {
    backgroundColor: "#fafafa",
  },

  headerRow: {
    backgroundColor: "#e9ecef",
    minHeight: 30,
  },

  cell: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    fontSize: 9.5,
    borderRightWidth: 0.5,
    borderRightColor: "#aaa",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 10,
  },

  colRole: {
    width: "30%",
  },

  colName: {
    width: "40%",
  },

  colSign: {
    width: "30%",
    minHeight: 34,
  },

  footerRow: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dateText: {
    fontSize: 11,
    fontWeight: "bold",
  },

  stampText: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
