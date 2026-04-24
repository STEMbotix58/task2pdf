import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { phasePageStyles as styles } from "../styles/phasePageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

import SurveyIcon from "@/shared/assets/icons/survey-icon.png";
import LogisticsIcon from "@/shared/assets/icons/logistics-icon.png";
import InstallationIcon from "@/shared/assets/icons/installation-icon.png";

import StudentLearningImg from "@/shared/assets/images/yuva-stem/impact-1.jpg";

export const PhasePage = () => {
  const phase = useStemLabStore((state) => state.phase);

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.redSidebar} />
        <View style={styles.mainContent}>
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.phaseTitleText}>
                PHASE 1:{"\n"}
                {phase[0]?.title.toUpperCase()}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.wideImage,
              { padding: 4, backgroundColor: "#FF3131" },
            ]}
          >
            <Image
              src={phase[0]?.images[0] || StudentLearningImg}
              style={styles.photo}
            />
          </View>

          <Text style={styles.paragraph}>{phase[0]?.description}</Text>

          <View style={[styles.row, { marginBottom: 0 }]}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[0]?.images[1] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[0]?.images[2] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
          <View style={[styles.row, { marginBottom: 0 }]}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[0]?.images[3] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[0]?.images[4] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
        </View>
      </Page>

      {/* PAGE 2 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.redSidebar} />
        <View style={styles.mainContent}>
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.phaseTitleText}>
                PHASE 2:{"\n"}
                {phase[1]?.title.toUpperCase()}
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.wideImage,
              { padding: 4, backgroundColor: "#000000" },
            ]}
          >
            <Image
              src={phase[1]?.images[0] || StudentLearningImg}
              style={styles.photo}
            />
          </View>

          <Text style={styles.paragraph}>{phase[1]?.description}</Text>

          <View style={[styles.row, { marginBottom: 0 }]}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[1]?.images[1] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[1]?.images[2] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
          <View style={[styles.row, { marginBottom: 0 }]}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[1]?.images[3] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[1]?.images[4] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
        </View>
      </Page>

      {/* PAGE 3 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.redSidebar} />
        <View style={styles.mainContent}>
          {/* PHASE 3 SECTION */}
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.phaseTitleText}>
                PHASE 3:{"\n"}
                {phase[2]?.title.toUpperCase()}
              </Text>
            </View>
            {/* <Image src={LogisticsIcon} style={styles.headerIcon} /> */}
          </View>

          <View style={styles.row}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[2]?.images[0] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[2]?.description.split("\n")[0]}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[2]?.description.split("\n")[1]}
              </Text>
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[2]?.images[1] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[2]?.images[2] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[2]?.description.split("\n")[2]}
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* PAGE 4 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.redSidebar} />
        <View style={styles.mainContent}>
          {/* PHASE 4 SECTION */}
          <View style={styles.headerRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.phaseTitleText}>
                PHASE 4:{"\n"}
                {phase[3]?.title.toUpperCase()}
              </Text>
            </View>
            {/* <Image
              src={InstallationIcon}
              style={[styles.headerIcon, { top: -35, left: 0 }]}
            /> */}
          </View>

          <View style={styles.row}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[3]?.images[0] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[3]?.description.split("\n")[0]}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[3]?.description.split("\n")[1]}
              </Text>
            </View>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#FF3131" },
              ]}
            >
              <Image
                src={phase[3]?.images[1] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.halfImage,
                { padding: 4, backgroundColor: "#000000" },
              ]}
            >
              <Image
                src={phase[3]?.images[2] || StudentLearningImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {phase[3]?.description.split("\n")[2]}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </>
  );
};
