import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { keyOutcomesPageStyles as styles } from "../styles/keyOutcomesPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure these paths match your actual assets folder structure
import OutcomesChartIcon from "@/shared/assets/icons/outcomes-chart.png";
import StudentsWritingImg from "@/shared/assets/images/flp-report/outcomes-students-writing.jpg";

export const KeyOutcomesPage = () => {
  const { description, keyOutcomesImg } = useFLPStore(
    (state) => state.keyOutcomes,
  );

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>11</Text>
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.titleText}>Key Outcomes</Text>
            <View style={styles.yellowDivider} />
          </View>
          <Image src={OutcomesChartIcon} style={styles.iconRight} />
        </View>
        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[0]}</Text>
          </View>
          <View style={styles.halfImage}>
            <Image
              src={keyOutcomesImg[0] || StudentsWritingImg}
              style={styles.photo}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.halfImage}>
            <Image
              src={keyOutcomesImg[1] || StudentsWritingImg}
              style={styles.photo}
            />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[1]}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[2]}</Text>
          </View>
          <View style={styles.halfImage}>
            <Image
              src={keyOutcomesImg[2] || StudentsWritingImg}
              style={styles.photo}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.halfImage}>
            <Image
              src={keyOutcomesImg[3] || StudentsWritingImg}
              style={styles.photo}
            />
          </View>
          <View style={styles.halfContent}>
            <Text style={styles.paragraph}>{description.split("\n")[3]}</Text>
          </View>
        </View>

        <View style={styles.footerLine} />
      </View>
    </Page>
  );
};
