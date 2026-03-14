import { StyleSheet } from "@react-pdf/renderer";

export const annexureStyles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  table: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 2,
    overflow: "hidden",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerRow: {
    backgroundColor: "#e4e4e4",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    minHeight: 26,
  },

  bodyRow: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#aaa",
    minHeight: 24,
    backgroundColor: "#ffffff",
  },

  altRow: {
    backgroundColor: "#f9f9f9",
  },

  cell: {
    paddingVertical: 5,
    paddingHorizontal: 6,
    fontSize: 9,
    borderRightWidth: 0.5,
    borderRightColor: "#aaa",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 9,
  },

  colSr: {
    width: "8%",
    textAlign: "center",
  },

  colName: {
    width: "62%",
  },

  colQty: {
    width: "12%",
    textAlign: "center",
  },

  colCheck: {
    width: "18%",
    textAlign: "center",
  },

  emptyRow: {
    width: "100%",
    paddingVertical: 14,
  },

  emptyText: {
    fontSize: 10,
    textAlign: "center",
    color: "#666",
  },
  declaration: {
    marginTop: 12,
    fontSize: 10,
    lineHeight: 1.3,
  },
  bold: {
    fontWeight: "bold",
  },
});
