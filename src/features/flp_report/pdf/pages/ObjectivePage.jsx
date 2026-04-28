import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { objectivePageStyles as styles } from "../styles/objectivePageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Update paths to match your assets directory
import ClassroomStudyImg from "@/shared/assets/images/flp-report/classroom-study.jpg";
import ObjectivesIcon from "@/shared/assets/icons/objectives-gears-people.png";

export const ObjectivePage = () => {
  const { description, objectiveImg } = useFLPStore((state) => state.objective);

  return (
    <Page size="A4" style={gStyles.page}>
      <View style={gStyles.contentWrapper}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>02</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>Program Objectives</Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={ObjectivesIcon} style={gStyles.iconRight} />
        </View>

        <View style={gStyles.row}>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[0]}</Text>
          </View>
          <View style={gStyles.halfImage}>
            <Image
              src={objectiveImg[0] || ClassroomStudyImg}
              style={gStyles.photo}
            />
          </View>
        </View>

        <View style={gStyles.row}>
          <View style={gStyles.halfImage}>
            <Image
              src={objectiveImg[1] || ClassroomStudyImg}
              style={gStyles.photo}
            />
          </View>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[1]}</Text>
          </View>
        </View>

        <Text style={gStyles.paragraph}>
          {description.split("\n").slice(2).join("\n\n")}
        </Text>

        <View style={gStyles.footerLine} />
      </View>
    </Page>
  );
};
