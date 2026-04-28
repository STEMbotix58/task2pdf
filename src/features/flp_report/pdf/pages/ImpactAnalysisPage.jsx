import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { impactAnalysisPageStyles as styles } from "../styles/impactAnalysisPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Paths to images - Update these to match your actual project structure
import ImpactChartIcon from "@/shared/assets/icons/impact-growth-chart.png";
import TeacherScreenImg from "@/shared/assets/images/flp-report/impact-teacher-screen.jpg";
import BehavioralChange from "@/shared/assets/images/flp-report/impact-behavioral-change.jpg";
import CommunityEngagement from "@/shared/assets/images/flp-report/impact-community-engagement.jpg";
import DigitalFinancialAwareness from "@/shared/assets/images/flp-report/impact-digital-financial-awareness.jpg";
import DigitalLearningAdoption from "@/shared/assets/images/flp-report/impact-digital-learning-adoption.jpg";

export const ImpactAnalysisPage = () => {
  const impactAnalysis = useFLPStore((state) => state.impactAnalysis);

  return (
    <>
      {/* PAGE 1: */}
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>08</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>Impact Analysis</Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={ImpactChartIcon} style={gStyles.iconRight} />
          </View>

          <View style={gStyles.wideImage}>
            <Image
              src={impactAnalysis["studentLearningImg"][0] || TeacherScreenImg}
              style={gStyles.photo}
            />
          </View>

          <Text style={gStyles.paragraph}>
            {impactAnalysis["objective"].split("\n").join("\n\n")}
          </Text>

          <View style={gStyles.row}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                Student Learning:{"\n"}
                {impactAnalysis["studentLearning"]}
              </Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={
                  impactAnalysis["studentLearningImg"][0] || TeacherScreenImg
                }
                style={gStyles.photo}
              />
            </View>
          </View>

          <View style={gStyles.footerLine} />
        </View>
      </Page>
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfImage}>
              <Image
                src={
                  impactAnalysis["behavioralChangeImg"][0] || BehavioralChange
                }
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                Behavioral Change:{"\n"}
                {impactAnalysis["behavioralChange"]}
              </Text>
            </View>
          </View>
          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                Digital Financial Awareness:{"\n"}
                {impactAnalysis["digitalFinancialAwareness"]}
              </Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={
                  impactAnalysis["digitalFinancialAwarenessImg"][0] ||
                  DigitalFinancialAwareness
                }
                style={gStyles.photo}
              />
            </View>
          </View>
          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfImage}>
              <Image
                src={
                  impactAnalysis["digitalLearningAdoptionImg"][0] ||
                  DigitalLearningAdoption
                }
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                Digital Learning Adoption:{"\n"}
                {impactAnalysis["digitalLearningAdoption"]}
              </Text>
            </View>
          </View>
          <View style={[gStyles.row, { marginBottom: 10 }]}>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                Community Engagement:{"\n"}
                {impactAnalysis["communityEngagement"]}
              </Text>
            </View>
            <View style={gStyles.halfImage}>
              <Image
                src={
                  impactAnalysis["communityEngagementImg"][0] ||
                  CommunityEngagement
                }
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
