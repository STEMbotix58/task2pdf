import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { studentCertificationPageStyles as styles } from "../styles/studentCertificationPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure to match these paths with your actual assets
import CertificationIcon from "@/shared/assets/icons/certification-cap.png";
import TeacherRupeeImg from "@/shared/assets/images/flp-report/teacher-rupee-sign.jpg";

export const StudentCertificationPage = () => {
  const studentCertification = useFLPStore(
    (state) => state.studentCertification,
  );

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>06</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>Student Certification</Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={CertificationIcon} style={styles.iconRight} />
          </View>

          <View style={styles.wideImage}>
            <Image
              src={studentCertification[0] || TeacherRupeeImg}
              style={styles.photo}
            />
          </View>

          <Text style={styles.paragraph}>
            {studentCertification["description"].split("\n").join("\n\n")}
          </Text>

          <View style={styles.wideImage}>
            <Image
              src={studentCertification[1] || TeacherRupeeImg}
              style={styles.photo}
            />
          </View>

          <View style={styles.footerLine} />
        </View>
      </Page>
    </>
  );
};
