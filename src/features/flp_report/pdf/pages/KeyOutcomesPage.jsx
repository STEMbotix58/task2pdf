import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { keyOutcomesPageStyles as styles } from "../styles/keyOutcomesPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure these paths match your actual assets folder structure
import OutcomesChartIcon from "@/shared/assets/icons/outcomes-chart.png";
import StudentsWritingImg from "@/shared/assets/images/flp-report/outcomes-students-writing.jpg";

export const KeyOutcomesPage = () => {
  const { description, keyOutcomesImg } = useFLPStore(
    (state) => state.keyOutcomes,
  );

  return (
    <Page size="A4" style={gStyles.page}>
      <View style={gStyles.contentWrapper}>
        <View style={gStyles.headerContainer}>
          <View style={gStyles.numberBadge}>
            <Text style={gStyles.numberText}>11</Text>
          </View>
          <View style={gStyles.titleBlock}>
            <Text style={gStyles.titleText}>Key Outcomes</Text>
            <View style={gStyles.yellowDivider} />
          </View>
          <Image src={OutcomesChartIcon} style={gStyles.iconRight} />
        </View>
        <View style={[gStyles.row, { marginBottom: 10 }]}>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[0]}</Text>
          </View>
          <View style={gStyles.halfImage}>
            <Image
              src={keyOutcomesImg[0] || StudentsWritingImg}
              style={gStyles.photo}
            />
          </View>
        </View>
        <View style={[gStyles.row, { marginBottom: 10 }]}>
          <View style={gStyles.halfImage}>
            <Image
              src={keyOutcomesImg[1] || StudentsWritingImg}
              style={gStyles.photo}
            />
          </View>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[1]}</Text>
          </View>
        </View>
        <View style={[gStyles.row, { marginBottom: 10 }]}>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[2]}</Text>
          </View>
          <View style={gStyles.halfImage}>
            <Image
              src={keyOutcomesImg[2] || StudentsWritingImg}
              style={gStyles.photo}
            />
          </View>
        </View>
        <View style={[gStyles.row, { marginBottom: 10 }]}>
          <View style={gStyles.halfImage}>
            <Image
              src={keyOutcomesImg[3] || StudentsWritingImg}
              style={gStyles.photo}
            />
          </View>
          <View style={gStyles.halfContent}>
            <Text style={gStyles.paragraph}>{description.split("\n")[3]}</Text>
          </View>
        </View>

        <View style={gStyles.footerLine} />
      </View>
    </Page>
  );
};
