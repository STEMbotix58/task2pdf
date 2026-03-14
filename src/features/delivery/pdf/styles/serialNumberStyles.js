import { StyleSheet } from "@react-pdf/renderer";

export const serialNumberStyles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    textTransform: "uppercase",
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
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

  colSr: {
    width: "15%",
    textAlign: "center",
  },

  colSerial: {
    width: "85%",
  },

  footerRow: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  dateText: {
    fontSize: 11,
    fontWeight: "bold",
  },

  stampText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  emptyText: {
    padding: 8,
    fontSize: 9,
    textAlign: "center",
    width: "100%",
  },
});
