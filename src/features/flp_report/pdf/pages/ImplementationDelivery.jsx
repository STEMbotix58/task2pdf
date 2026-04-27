import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { implementationDeliveryPageStyles as styles } from "../styles/implementationDeliveryPageStyles";
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
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>03</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>
                Program{"\n"}Implementation & Delivery
              </Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={ImplementationIcon} style={styles.iconRight} />
          </View>

          <View style={styles.row}>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[0] || TallTeacherImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>{description.split("\n")[0]}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>{description.split("\n")[1]}</Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[1] || ComputerLabImg}
                style={styles.photo}
              />
            </View>
          </View>

          <Text style={[styles.paragraph, { marginBottom: 0 }]}>
            {description.split("\n")[2]}
          </Text>

          <View style={[styles.row, { marginVertical: 10 }]}>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[2] || ClassroomImg1}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[3] || ClassroomImg2}
                style={styles.photo}
              />
            </View>
          </View>
          <View style={styles.footerLine} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.wideImage}>
            <Image
              src={implementationAndDeliveryImg[4] || WideTeacherImg}
              style={styles.photo}
            />
          </View>

          <Text style={styles.paragraph}>
            {description.split("\n").slice(3).join("\n\n")}
          </Text>

          <View style={[styles.row, { marginBottom: 10 }]}>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[5] || DhanGyanLoginImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfImage}>
              <Image
                src={implementationAndDeliveryImg[6] || DhanGyanLoginImg}
                style={styles.photo}
              />
            </View>
          </View>

          <View style={styles.footerLine} />
        </View>
      </Page>
    </>
  );
};
