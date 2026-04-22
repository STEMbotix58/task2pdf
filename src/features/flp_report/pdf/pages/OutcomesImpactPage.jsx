import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { outcomesImpactPageStyles as styles } from "../styles/outcomesImpactPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Paths to images - Update these to match your actual project structure
import OutcomesIcon from "@/shared/assets/icons/outcomes-magnify.png";
import StudentsComputerImg from "@/shared/assets/images/flp-report/outcomes-computers.jpg";
import StudentsClassroomImg from "@/shared/assets/images/flp-report/outcomes-classroom.jpg";

export const OutcomesImpactPage = () => {
  const { description, outcomesAndImpactImg } = useFLPStore(
    (state) => state.outcomesAndImpact,
  );
  return (
    <>
      {/* PAGE 1: */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>07</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>Outcomes and Impact</Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={OutcomesIcon} style={styles.iconRight} />
          </View>

          <View style={styles.row}>
            <View style={styles.halfImage}>
              <Image
                src={outcomesAndImpactImg[0] || StudentsComputerImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>{description.split("\n")[0]}</Text>
            </View>
          </View>

          <Text style={styles.paragraph}>
            {description.split("\n").slice(3, -1).join("\n\n")}
          </Text>

          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {description.split("\n").slice(-1).join("\n\n")}
              </Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={outcomesAndImpactImg[1] || StudentsClassroomImg}
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
