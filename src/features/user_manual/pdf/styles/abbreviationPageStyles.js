import { StyleSheet } from "@react-pdf/renderer";

export const abbreviationPageStyles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  table: {
    display: "table",
    width: "100%",
    marginTop: 24,
    borderRadius: 6,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F1F5F9",
    borderBottomWidth: 1.5,
    borderBottomColor: "#CBD5E1",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  headerText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  tableRowAlternate: {
    backgroundColor: "#F8FAFC",
  },
  columnShort: {
    width: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  columnFull: {
    width: "75%",
    paddingLeft: 8,
  },
  badge: {
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  textShort: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#1E40AF",
  },
  textFull: {
    fontSize: 11,
    color: "#334155",
    lineHeight: 1.5,
  },
});
