import React from "react";
import { Text, View, Image, Page, Svg, Path } from "@react-pdf/renderer";
import { useProjectStore } from "@/features/project/model/projectStore";
import { contactStyles } from "../styles/contactStyles";

import CoverImg1 from "@/shared/assets/images/ai-robotics/img7.jpg";
import CoverImg2 from "@/shared/assets/images/ai-robotics/img8.jpg";
import CoverImg3 from "@/shared/assets/images/ai-robotics/img9.jpg";
import QRcode from "@/shared/assets/images/googleQRcodes.png";

import AIHeadphones from "@/shared/assets/icons/ai-headphones.png";
import Bulb from "@/shared/assets/icons/bulb.png";

export const ContactPage = () => {
  const { name, address, phone, email, website } = useProjectStore(
    (state) => state.contact,
  );

  const qrCodeImg = useProjectStore((state) => state.qrCodeImg);
  const qrCodeVid = useProjectStore((state) => state.qrCodeVid);

  const resolveImage = (img, fallback) => {
    if (!img) return fallback;

    if (typeof img === "string") return img;

    if (img instanceof File) {
      return URL.createObjectURL(img);
    }

    return fallback;
  };

  return (
    <Page size="A4" style={contactStyles.page}>
      {/* Header Section */}
      <View style={[contactStyles.headerContainer, { paddingBottom: 0 }]}>
        <View style={contactStyles.cyanLine} />
        <Text style={contactStyles.title}>References</Text>
      </View>
      {/*QR Code*/}
      <View style={contactStyles.qrRow}>
        {/* Videos QR Card */}
        <View style={contactStyles.qrCard}>
          <Text style={contactStyles.qrText}>Videos</Text>
          <Image
            src={resolveImage(qrCodeImg?.[0], QRcode)}
            style={contactStyles.qrImagePlaceholder}
          />
        </View>

        {/* Photographs QR Card */}
        <View style={contactStyles.qrCard}>
          <Text style={contactStyles.qrText}>Photographs</Text>
          <Image
            src={resolveImage(qrCodeVid?.[0], QRcode)}
            style={contactStyles.qrImagePlaceholder}
          />
        </View>
      </View>

      {/*Contact */}
      <View style={contactStyles.contactInfoBlock}>
        <Text style={contactStyles.contactTitle}>CONTACT</Text>
        <Text
          style={[contactStyles.contactText, { fontFamily: "Helvetica-Bold" }]}
        >
          {name || "ISTEM COLLECTIVE FOUNDATION"}
        </Text>
        <Text style={contactStyles.contactText}>
          {address || "Shop No.E/310, Joyos Hub Town Mehsana"}
        </Text>
        <Text style={contactStyles.contactText}>
          P: {phone || "+91 96874 76525"}
        </Text>
        <Text style={contactStyles.contactText}>
          E: {email || "info@istemcf.org"}
        </Text>
        <Text style={contactStyles.contactText}>
          W: {website || "www.istemcf.org"}
        </Text>
      </View>

      {/* Contact */}
      <View style={contactStyles.gridContainer}>
        {/* ROW 1 */}
        <View style={[contactStyles.blockSpan2, { top: "0%", left: "60%" }]}>
          <Image src={CoverImg1} style={contactStyles.placeholderImage} />
        </View>

        {/* ROW 2 */}
        <View style={[contactStyles.blockSpan2, { top: "33.33%", left: "0%" }]}>
          <Image src={CoverImg2} style={contactStyles.placeholderImage} />
        </View>

        <View style={[contactStyles.block, { top: "33.33%", left: "40%" }]}>
          <Svg width="100%" height="100%" viewBox="0 0 95 95">
            <Path d="M0 100 L100 100 L100 0 Z" fill="#cce235" />
          </Svg>
        </View>
        <View
          style={[
            contactStyles.block,
            contactStyles.bgDarkBlue,
            { top: "33.33%", left: "60%" },
          ]}
        ></View>
        <View style={[contactStyles.block, { top: "33.33%", left: "80%" }]}>
          <Image src={CoverImg3} style={contactStyles.placeholderImage} />
        </View>

        {/* ROW 3 */}
        <View style={[contactStyles.blockSpan2, { top: "66.66%", left: "0%" }]}>
          <Image src={CoverImg1} style={contactStyles.placeholderImage} />
        </View>
        <View
          style={[
            contactStyles.block,
            contactStyles.bgTeal,
            { top: "66.66%", left: "40%" },
          ]}
        >
          <Image src={AIHeadphones} style={contactStyles.iconPlaceholder} />
        </View>
        <View style={[contactStyles.block, { top: "66.66%", left: "60%" }]}>
          <Svg width="100%" height="100%" viewBox="0 0 95 95">
            <Path d="M0 100 L100 100 L100 0 Z" fill="#CCCCCC" />
          </Svg>
        </View>
        <View
          style={[
            contactStyles.block,
            { top: "66.66%", left: "80%", backgroundColor: "#cce235" },
          ]}
        >
          <Image src={Bulb} style={contactStyles.iconPlaceholder} />
        </View>
      </View>
    </Page>
  );
};
