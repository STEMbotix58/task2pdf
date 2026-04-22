import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { reachCoveragePageStyles as styles } from "../styles/reachCoveragePageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure to match these paths with your actual assets
import ReachIcon from "@/shared/assets/icons/reach-presentation.png";
import ReachClassroomImg from "@/shared/assets/images/flp-report/reach-classroom.jpg";

export const ReachCoveragePage = () => {
  const reachAndCoverage = useFLPStore((state) => state.reachAndCoverage);

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>04</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>
                Program Reach &{"\n"}Coverage
              </Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={ReachIcon} style={styles.iconRight} />
          </View>

          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {reachAndCoverage["description"].split("\n")[0]}
              </Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={reachAndCoverage[0] || ReachClassroomImg}
                style={styles.photo}
              />
            </View>
          </View>

          <Text style={styles.paragraph}>
            {reachAndCoverage["description"].split("\n").slice(1).join("\n\n")}
          </Text>
          <View style={styles.footerLine} />
        </View>
      </Page>
    </>
  );
};
