import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { studentCertificationPageStyles as styles } from "../styles/studentCertificationPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
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
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>06</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>Student Certification</Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={CertificationIcon} style={gStyles.iconRight} />
          </View>

          <View style={gStyles.wideImage}>
            <Image
              src={studentCertification[0] || TeacherRupeeImg}
              style={gStyles.photo}
            />
          </View>

          <Text style={gStyles.paragraph}>
            {studentCertification["description"].split("\n").join("\n\n")}
          </Text>

          <View style={gStyles.wideImage}>
            <Image
              src={studentCertification[1] || TeacherRupeeImg}
              style={gStyles.photo}
            />
          </View>

          <View style={gStyles.footerLine} />
        </View>
      </Page>
    </>
  );
};
