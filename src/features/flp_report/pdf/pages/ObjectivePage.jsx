import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { objectivePageStyles as styles } from "../styles/objectivePageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Update paths to match your assets directory
import ClassroomStudyImg from "@/shared/assets/images/flp-report/classroom-study.jpg";
import ObjectivesIcon from "@/shared/assets/icons/objectives-gears-people.png";

export const ObjectivePage = () => {
  const { description, objectiveImg } = useFLPStore((state) => state.objective);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>02</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>Program Objectives</Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={ObjectivesIcon} style={styles.iconRight} />
        </View>

        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[0]}</Text>
          </View>
          <View style={styles.halfImage}>
            <Image
              src={objectiveImg[0] || ClassroomStudyImg}
              style={styles.photo}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfImage}>
            <Image
              src={objectiveImg[1] || ClassroomStudyImg}
              style={styles.photo}
            />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[1]}</Text>
          </View>
        </View>

        <Text style={styles.paragraph}>
          {description.split("\n").slice(2).join("\n\n")}
        </Text>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
