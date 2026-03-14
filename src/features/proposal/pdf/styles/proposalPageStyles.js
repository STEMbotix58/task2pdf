import { StyleSheet } from "@react-pdf/renderer";

export const proposalPageStyles = StyleSheet.create({
  dateText: {
    fontSize: 10,
    textAlign: "right",
    marginBottom: 18,
    color: "#333",
    fontWeight: 500,
  },

  recipientBlock: {
    marginBottom: 20,
  },

  toLabel: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },

  toValue: {
    fontSize: 11,
    color: "#000",
  },

  subjectBox: {
    marginTop: 10,
    marginBottom: 22,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#F4F8FB",
    borderLeft: "3 solid #1F3C88",
  },

  subjectText: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#1F3C88",
    letterSpacing: 0.5,
  },

  salutation: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 14,
    color: "#000",
  },

  bodyText: {
    fontSize: 11,
    lineHeight: 1.7,
    marginBottom: 12,
    textAlign: "justify",
    color: "#222",
  },
});
