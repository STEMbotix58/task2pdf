import {
  View,
  Text,
  StyleSheet,
  Svg,
  Polygon,
  Image,
  Path,
  Rect,
  Circle,
} from "@react-pdf/renderer";
import QRCode from "@/shared/assets/images/Footer-Qr-Code.png";

const PDFFooter = () => (
  <View style={styles.footerContainer} fixed>
    <View style={styles.ribbonWrapper}>
      <Svg viewBox="0 0 240 60" style={styles.svg}>
        <Polygon points="215,0 235,0 210,60 190,60" fill="#F15A24" />
        <Polygon points="160,0 205,0 180,60 135,60" fill="#2E3192" />
        <Polygon points="125,60 0,60 0,0 150,0" fill="#F15A24" />
      </Svg>
    </View>

    <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <View style={[styles.icon, { backgroundColor: "#2E3192" }]}>
            <Svg width={12} height={12} viewBox="0 0 24 24">
              <Path
                d="M6.6 10.8c1.8 3.5 4.7 6.3 8.2 8.2l2.7-2.7c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1 C10.3 23 1 13.7 1 2c0-.6.4-1 1-1h4.5c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8z"
                fill="#FFFFFF"
              />
            </Svg>
          </View>
          <Text style={styles.infoText}>(+91) 904 905 9006</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={[styles.icon, { backgroundColor: "#F15A24" }]}>
            <Svg width={12} height={12} viewBox="0 0 24 24">
              <Path
                d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                fill="#FFFFFF"
              />
              <Circle cx="12" cy="10" r="3" fill="#F15A24" />
            </Svg>
          </View>
          <Text style={[styles.addressText, { flex: 1 }]}>
            {`B/33, Electronics Estate SECTOR 25 GIDC,
Gandhinagar 24-GUJARAT 382024`}
          </Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <View style={[styles.icon, { backgroundColor: "#F15A24" }]}>
            <Svg width={12} height={12} viewBox="0 0 24 24">
              <Rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
                ry="2"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
              <Path
                d="M3 7l9 6 9-6"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
            </Svg>
          </View>
          <Text style={styles.infoText}>info@stembotix.com</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={[styles.icon, { backgroundColor: "#2E3192" }]}>
            <Svg width={12} height={12} viewBox="0 0 24 24">
              <Circle
                cx="12"
                cy="12"
                r="10"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
              />
              <Path
                d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                fill="none"
              />
            </Svg>
          </View>
          <Text style={styles.infoText}>www.stembotix.com</Text>
        </View>
      </View>
    </View>

    <View style={styles.qrContainer}>
      <Image src={QRCode} style={styles.qrImage} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  ribbonWrapper: {
    width: 300,
    height: 60,
  },
  svg: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "column",
    paddingLeft: 10,
    justifyContent: "center",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoText: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
  },
  addressText: {
    fontSize: 7,
    fontWeight: "bold",
    color: "#000",
    width: 140,
    flex: 1,
  },
  qrContainer: {
    width: 65,
    height: 65,
    backgroundColor: "#FFF",
    flexShrink: 0,
    flexGrow: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  qrImage: {
    width: 60,
    height: 60,
  },
});

export default PDFFooter;
