import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { reachCoveragePageStyles as styles } from "../styles/reachCoveragePageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure to match these paths with your actual assets
import ReachIcon from "@/shared/assets/icons/reach-presentation.png";
import ReachClassroomImg from "@/shared/assets/images/flp-report/reach-classroom.jpg";

export const ReachCoveragePage = () => {
  const reachAndCoverage = useFLPStore((state) => state.reachAndCoverage);

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>04</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>
                Program Reach &{"\n"}Coverage
              </Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={ReachIcon} style={gStyles.iconRight} />
          </View>

          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                {reachAndCoverage["description"].split("\n")[0]}
              </Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={reachAndCoverage[0] || ReachClassroomImg}
                style={gStyles.photo}
              />
            </View>
          </View>

          <Text style={gStyles.paragraph}>
            {reachAndCoverage["description"].split("\n").slice(1).join("\n\n")}
          </Text>
          <View style={gStyles.footerLine} />
        </View>
      </Page>
    </>
  );
};
