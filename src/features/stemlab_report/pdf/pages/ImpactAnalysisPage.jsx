import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { impactAnalysisPageStyles as styles } from "../styles/impactAnalysisPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

// Paths to icons - Make sure these exist in your assets folder
import HeaderGlassIcon from "@/shared/assets/icons/magnifying-glass-list.png";
import StudentLaptopIcon from "@/shared/assets/icons/student-laptop.png";
import TeacherGroupIcon from "@/shared/assets/icons/growth-group.png";
import SchoolBuildingIcon from "@/shared/assets/icons/school-building.png";
import NetworkHandsIcon from "@/shared/assets/icons/network-hands.png";

// Paths to images
import StudentLearningImpactImg from "@/shared/assets/images/yuva-stem/impact-1.jpg";
import TeacherCapacityImg from "@/shared/assets/images/yuva-stem/impact-2.jpg";
import CommunityEngageImg from "@/shared/assets/images/yuva-stem/impact-3.jpg";

export const ImpactAnalysisPage = () => {
  const { objective, impacts } = useStemLabStore(
    (state) => state.impactAnalysis,
  );

  const resolveImage = (img, fallback) => {
    if (!img) return fallback;

    if (typeof img === "string") return img;

    if (img instanceof File) {
      return URL.createObjectURL(img);
    }

    return fallback;
  };

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.redSidebar} />

      <View style={styles.mainContent}>
        <View style={styles.infoBlockContainer}>
          <View style={styles.yellowContentBox}>
            <View style={styles.blockHeaderContainer}>
              <Text style={styles.blockHeaderText}>IMPACT ANALYSIS</Text>
            </View>
            <Text style={styles.introText}>{objective}</Text>
            <Image src={HeaderGlassIcon} style={styles.headerIcon} />
          </View>
        </View>
        {impacts.map((impact, index) => {
          const isImageLeft = index % 2 === 0;

          return (
            <View key={index} style={styles.row}>
              {isImageLeft && (
                <View
                  style={[
                    styles.halfImage,
                    { padding: 4, backgroundColor: "#000000" },
                  ]}
                >
                  <Image
                    src={resolveImage(impact.image?.[0])}
                    style={styles.photo}
                  />
                </View>
              )}

              <View style={styles.halfContent}>
                <Text style={styles.sectionTitleRed}>{impact.title}</Text>
                <Text style={styles.paragraph}>{impact.description}</Text>
              </View>

              {!isImageLeft && (
                <View
                  style={[
                    styles.halfImage,
                    { padding: 4, backgroundColor: "#FF3131" },
                  ]}
                >
                  <Image
                    src={resolveImage(impact.image?.[0])}
                    style={styles.photo}
                  />
                </View>
              )}
            </View>
          );
        })}
      </View>
    </Page>
  );
};
