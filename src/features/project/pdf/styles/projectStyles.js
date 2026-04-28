import { StyleSheet } from "@react-pdf/renderer";

export const projectStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffffff",
    position: "relative",
  },

  /* Top Section */
  topSection: {
    flexDirection: "row",
    height: 320,
  },
  heroImageWrapper: {
    width: "35%",
    height: "100%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  topContent: {
    width: "65%",
    paddingTop: 45,
    paddingRight: 40,
    paddingLeft: 30,
    backgroundColor: "#EEEEEE",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0c2340",
    marginBottom: 20,
    paddingRight: 20,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c2340",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0c2340",
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 11,
    lineHeight: 1.5,
    color: "#222222",
    textAlign: "justify",
  },

  /* Main Middle Section */
  mainContainer: {
    paddingHorizontal: 40,
    paddingTop: 25,
  },
  boxesWrapper: {
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  boxColumn: {
    width: "50%",
    padding: 12,
    backgroundColor: "#3a7f9a",
  },
  boxRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  boxIcon: {
    fontSize: 10,
    marginRight: 6,
    marginTop: 2,
  },
  boxText: {
    color: "#ffffff",
    fontSize: 10,
    lineHeight: 1.2,
    flex: 1,
  },
  boxTextBold: {
    fontWeight: "bold",
  },
  costText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
  },

  /* Divider */
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    borderBottomStyle: "dashed", // Dashed line effect
    marginBottom: 20,
    marginTop: 5,
  },

  /* Bottom Split Section */
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomColumnLeft: {
    width: "48%",
    borderRightWidth: 1,
    borderRightColor: "#cccccc",
    paddingRight: 15,
  },
  bottomColumnRight: {
    width: "48%",
    paddingLeft: 10,
  },
  bulletList: {
    marginTop: 2,
    marginBottom: 5,
    paddingLeft: 10,
  },
  bulletItem: {
    flexDirection: "row",
  },
  bulletDot: {
    width: 10,
    fontSize: 12,
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
    color: "#222222",
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
