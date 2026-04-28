import { StyleSheet, Font } from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Noto Sans",
  fonts: [
    {
      src: "/fonts/NotoSans-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/NotoSans-Medium.ttf",
      fontWeight: "medium",
    },
    {
      src: "/fonts/NotoSans-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

export const coverPageStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  logoLeft: {
    width: 120,
    height: 40,
  },
  logoRight: {
    width: 120,
    height: 40,
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  gridContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "70.7%",
  },
  textContainer: {
    position: "absolute",
    top: "-20%", // Slightly elevated to clear the image flow visually
    left: 0,
    width: "65%",
    // height: "50%",
    paddingLeft: 40,
    paddingRight: 20,
    justifyContent: "flex-start",
    zIndex: 10,
  },

  // Typography
  mainTitle: {
    fontSize: 34,
    color: "#0F2646",
    marginBottom: 25,
    fontFamily: "Noto Sans",
    wordBreak: "normal",
    lineHeight: 1.3,
  },
  titleBold: {
    fontWeight: "bold",
  },
  accentBar: {
    width: 170,
    height: 5,
    backgroundColor: "#48B5A3",
    marginBottom: 15,
    borderRadius: "50",
  },
  preparedBy: {
    fontSize: 15,
    fontFamily: "Noto Sans",
    fontWeight: "medium",
    width: "60%",
    color: "#0F2646",
    marginBottom: 20,
    lineHeight: 1.2,
  },
  dateText: {
    fontSize: 14,
    color: "#0F2646",
  },

  // Grid Block Layout System
  block: {
    position: "absolute",
    width: "25%",
    height: "25%",
  },
  blockSpan2: {
    position: "absolute",
    width: "50%",
    height: "25%",
  },

  // Colors & Helpers
  bgTeal: {
    backgroundColor: "#48B5A3",
    justifyContent: "center",
    alignItems: "center",
  },
  bgDarkBlue: {
    backgroundColor: "#0F2646",
  },
  bgYellow: {
    backgroundColor: "#E4EA7A", // Pale green-yellow
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#CBD5E1",
    objectFit: "cover", // Apply this to your actual <Image> tags
  },
  iconPlaceholder: {
    width: "70%",
    height: "70%",
    borderRadius: 4,
    objectFit: "contain", // Apply this to your actual icon <Image> tags
  },
});
