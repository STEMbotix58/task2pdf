import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { financialOverviewPageStyles as styles } from "../styles/financialOverviewPageStyles";
import { globalStyles as gStyles } from "../styles/globalStyles";
import { useFLPStore } from "@/features/flp_report/model/flpReportStore";

// Make sure to match these paths with your actual assets
import FinanceOverviewIcon from "@/shared/assets/icons/finance-overview-clipboard.png";
import MonitorsClassroomImg from "@/shared/assets/images/flp-report/monitors-classroom.jpg";

export const FinancialOverviewPage = () => {
  const financialOverview = useFLPStore((state) => state.financialOverview);

  return (
    <>
      {/* PAGE 1 */}
      <Page size="A4" style={gStyles.page}>
        <View style={gStyles.contentWrapper}>
          <View style={gStyles.headerContainer}>
            <View style={gStyles.numberBadge}>
              <Text style={gStyles.numberText}>05</Text>
            </View>
            <View style={gStyles.titleBlock}>
              <Text style={gStyles.titleText}>Financial Overview</Text>
              <View style={gStyles.yellowDivider} />
            </View>
            <Image src={FinanceOverviewIcon} style={gStyles.iconRight} />
          </View>

          <View style={gStyles.row}>
            <View style={gStyles.halfImage}>
              <Image
                src={financialOverview[0] || MonitorsClassroomImg}
                style={gStyles.photo}
              />
            </View>
            <View style={gStyles.halfContent}>
              <Text style={gStyles.paragraph}>
                {financialOverview["description"].split("\n")[0]}
              </Text>
            </View>
          </View>

          <Text style={gStyles.paragraph}>
            {financialOverview["description"].split("\n").slice(1).join("\n\n")}
          </Text>

          <View style={gStyles.footerLine} />
        </View>
      </Page>
    </>
  );
};
