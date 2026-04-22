import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { financialOverviewPageStyles as styles } from "../styles/financialOverviewPageStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure to match these paths with your actual assets
import FinanceOverviewIcon from "@/shared/assets/icons/finance-overview-clipboard.png";
import MonitorsClassroomImg from "@/shared/assets/images/flp-report/monitors-classroom.jpg";

export const FinancialOverviewPage = () => {
  const financialOverview = useFLPStore((state) => state.financialOverview);

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.contentWrapper}>
          <View style={styles.headerContainer}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>05</Text>
            </View>
            <View style={styles.titleBlock}>
              <Text style={styles.titleText}>Financial Overview</Text>
              <View style={styles.yellowDivider} />
            </View>
            <Image src={FinanceOverviewIcon} style={styles.iconRight} />
          </View>

          <View style={styles.row}>
            <View style={styles.halfImage}>
              <Image
                src={financialOverview[0] || MonitorsClassroomImg}
                style={styles.photo}
              />
            </View>
            <View style={styles.halfContent}>
              <Text style={styles.paragraph}>
                {financialOverview["description"].split("\n")[0]}
              </Text>
            </View>
          </View>

          <Text style={styles.paragraph}>
            {financialOverview["description"].split("\n").slice(1).join("\n\n")}
          </Text>

          <View style={styles.footerLine} />
        </View>
      </Page>
    </>
  );
};
