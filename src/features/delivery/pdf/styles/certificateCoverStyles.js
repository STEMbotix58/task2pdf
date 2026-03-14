import { StyleSheet } from "@react-pdf/renderer";

export const certificateCoverStyles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 20,
    fontSize: 9,
  },
  refText: {
    fontSize: 9,
  },
  dateText: {
    fontSize: 11,
    fontWeight: "bold",
  },

  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
  },

  salutation: {
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    marginBottom: 20,
    fontSize: 11,
  },

  subjectBox: {
    flexDirection: "row",
    marginBottom: 16,
  },
  subjectLabel: {
    fontWeight: "bold",
    fontSize: 10,
  },
  subjectText: {
    fontSize: 10,
    marginLeft: 5,
  },

  contentBody: {
    marginBottom: 16,
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
    fontSize: 10,
    lineHeight: 1.4,
  },
  bold: {
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    marginTop: 6,
  },

  table: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 18,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    minHeight: 24,
    alignItems: "center",
  },

  labelCol: {
    width: "25%",
    padding: 6,
    borderRightWidth: 1,
    borderRightColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  valueCol: {
    width: "75%",
    padding: 6,
  },

  halfCol: {
    width: "35%",
    padding: 6,
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  smallLabelCol: {
    width: "15%",
    padding: 6,
    borderRightWidth: 1,
    borderRightColor: "#000",
    backgroundColor: "#f2f2f2",
  },
  smallValueCol: {
    width: "25%",
    padding: 6,
  },

  tableLabel: {
    fontSize: 9,
    fontWeight: "bold",
  },
  tableValue: {
    fontSize: 9,
  },

  declarationSection: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f9fafb",
  },
  declarationTitle: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 10,
  },
  declarationText: {
    fontSize: 9,
    lineHeight: 1.4,
    textAlign: "justify",
  },

  signatureSection: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sigBox: {
    width: 200,
    textAlign: "center",
  },
  sigLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 6,
  },
  sigLabel: {
    fontSize: 9,
  },
});
