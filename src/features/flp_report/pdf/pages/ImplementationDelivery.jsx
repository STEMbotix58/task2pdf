import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { implementationDeliveryPageStyles as styles } from "../styles/implementationDeliveryPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Paths to images - Update these to match your actual project structure
import ImplementationIcon from "@/shared/assets/icons/coding-screen-user.png";
import TallTeacherImg from "@/shared/assets/images/flp-report/impl-tall-teacher.jpg";
import ComputerLabImg from "@/shared/assets/images/flp-report/impl-computer-lab.jpg";
import ClassroomImg1 from "@/shared/assets/images/flp-report/impl-classroom-1.jpg";
import ClassroomImg2 from "@/shared/assets/images/flp-report/impl-classroom-2.jpg";
import WideTeacherImg from "@/shared/assets/images/flp-report/impl-classroom-3.jpg";
import DhanGyanLoginImg from "@/shared/assets/images/flp-report/dhan-gyan-login.jpg";

export const ImplementationDelivery = () => {
  const { description, implementationAndDeliveryImg } = useFLPStore(
    (state) => state.implementationAndDelivery,
  );
  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>03</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>
                Program{"\n"}Implementation & Delivery
              </Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={ImplementationIcon} style={gStyles.iconRight} />
          </View>

          <View style={gStyles.row}>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[0] || TallTeacherImg}
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>{description.split("\n")[0]}</Text>
            </View>
          </View>

          <View style={gStyles.row}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>{description.split("\n")[1]}</Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[1] || ComputerLabImg}
                style={gStyles.photo}
              />
            </View>
          </View>

          <Text style={[gStyles.paragraph, { marginBottom: 0 }]}>
            {description.split("\n")[2]}
          </Text>

          <View style={[gStyles.row, { marginVertical: 10 }]}>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[2] || ClassroomImg1}
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[3] || ClassroomImg2}
                style={gStyles.photo}
              />
            </View>
          </View>
          <View style={gStyles.footerLine} />
        </View>
      </Page>
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.wideImage}>
            <Image
              src={implementationAndDeliveryImg[4] || WideTeacherImg}
              style={gStyles.photo}
            />
          </View>

          <Text style={gStyles.paragraph}>
            {description.split("\n").slice(3).join("\n\n")}
          </Text>

          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[5] || DhanGyanLoginImg}
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[6] || DhanGyanLoginImg}
                style={gStyles.photo}
              />
            </View>
          </View>

          <View style={gStyles.footerLine} />
        </View>
      </Page>
    </>
  );
};
