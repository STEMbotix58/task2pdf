import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { impactAnalysisPageStyles as styles } from "../styles/impactAnalysisPageStyles";
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
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>08</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>Impact Analysis</Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={ImpactChartIcon} style={styles.iconRight} />
          </View>

          <View style={styles.wideImage}>
            <Image
              src={impactAnalysis["studentLearningImg"][0] || TeacherScreenImg}
              style={styles.photo}
            />
          </View>

          <Text style={styles.paragraph}>
            {impactAnalysis["objective"].split("\n").join("\n\n")}
          </Text>

          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                Student Learning:{"\n"}
                {impactAnalysis["studentLearning"]}
              </Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={
                  impactAnalysis["studentLearningImg"][0] || TeacherScreenImg
                }
                style={styles.photo}
              />
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.row}>
            <View style={styles.halfImage}>
              <Image
                src={
                  impactAnalysis["behavioralChangeImg"][0] || BehavioralChange
                }
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                Behavioral Change:{"\n"}
                {impactAnalysis["behavioralChange"]}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                Digital Financial Awareness:{"\n"}
                {impactAnalysis["digitalFinancialAwareness"]}
              </Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={
                  impactAnalysis["digitalFinancialAwarenessImg"][0] ||
                  DigitalFinancialAwareness
                }
                style={styles.photo}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfImage}>
              <Image
                src={
                  impactAnalysis["digitalLearningAdoptionImg"][0] ||
                  DigitalLearningAdoption
                }
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                Digital Learning Adoption:{"\n"}
                {impactAnalysis["digitalLearningAdoption"]}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                Community Engagement:{"\n"}
                {impactAnalysis["communityEngagement"]}
              </Text>
            </View>
            <View style={styles.halfImage}>
              <Image
                src={
                  impactAnalysis["communityEngagementImg"][0] ||
                  CommunityEngagement
                }
                style={styles.photo}
              />
            </View>
          </View>
        </View>
      </Page>
    </>
  );
};
