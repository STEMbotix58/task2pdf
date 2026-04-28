import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { outcomesImpactPageStyles as styles } from "../styles/outcomesImpactPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
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
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>07</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>Outcomes and Impact</Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={OutcomesIcon} style={gStyles.iconRight} />
          </View>

          <View style={gStyles.row}>
            <View style={gStyles.halfImage}>
              <Image
                src={outcomesAndImpactImg[0] || StudentsComputerImg}
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>{description.split("\n")[0]}</Text>
            </View>
          </View>

          <Text style={gStyles.paragraph}>
            {description.split("\n").slice(3, -1).join("\n\n")}
          </Text>

          <View style={gStyles.row}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                {description.split("\n").slice(-1).join("\n\n")}
              </Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={outcomesAndImpactImg[1] || StudentsClassroomImg}
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
