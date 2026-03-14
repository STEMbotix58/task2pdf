import { StyleSheet } from "@react-pdf/renderer";

export const financialProposalStyles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    minHeight: 28,
    alignItems: "center",
  },

  tableHeader: {
    backgroundColor: "#f3f4f6",
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
    fontWeight: "bold",
  },

  subHeader: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#1e293b",
    marginTop: 10,
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottom: "1px solid #e2e8f0",
    paddingBottom: 2,
  },
  cell: {
    padding: 5,
    fontSize: 9,
  },

  srCol: {
    width: "8%",
    textAlign: "center",
  },

  particularCol: {
    width: "15%",
  },

  specCol: {
    width: "20%",
  },

  boqCol: {
    width: "10%",
    textAlign: "center",
  },

  descCol: {
    width: "30%",
  },

  amountCol: {
    width: "17%",
    textAlign: "right",
  },

  totalRow: {
    marginTop: 6,
    borderTopWidth: 2,
    borderColor: "#111827",
    backgroundColor: "#f9fafb",
  },

  totalLabel: {
    width: "80%",
    textAlign: "right",
    fontSize: 10,
    fontWeight: "bold",
    paddingRight: 8,
  },

  totalAmount: {
    fontSize: 10,
    fontWeight: "bold",
  },

  emptyText: {
    fontSize: 9,
    padding: 8,
    color: "#6b7280",
  },

  contactSection: {
    marginTop: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    fontSize: 10,
  },

  contactHeading: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: "bold",
  },

  contactLine: {
    marginBottom: 2,
  },

  signatureImage: {
    width: 100,
    height: 60,
    objectFit: "contain",
  },
});
