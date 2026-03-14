import { Text, View } from "@react-pdf/renderer";
import { economicStyles } from "../styles/economicStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const EconomicSection = () => {
  const {
    employabilityEnhancement,
    incomeOpportunities,
    costPerBeneficiary,
    roi,
  } = useReportStore((state) => state.economicImpact || {});

  return (
    <>
      {/* Financial Metrics Row */}
      <View style={economicStyles.metricsRow}>
        <View style={economicStyles.metricCard}>
          <Text style={economicStyles.metricLabel}>COST PER BENEFICIARY</Text>
          <Text style={economicStyles.metricValue}>
            {Number(costPerBeneficiary).toLocaleString()}
          </Text>
        </View>
        <View
          style={[
            economicStyles.metricCard,
            { backgroundColor: "#f0fdf4", borderColor: "#bcf0da" },
          ]}
        >
          <Text style={[economicStyles.metricLabel, { color: "#166534" }]}>
            RETURN ON INVESTMENT (ROI)
          </Text>
          <Text style={[economicStyles.metricValue, { color: "#15803d" }]}>
            {roi}%
          </Text>
        </View>
      </View>

      <View style={economicStyles.contentSection}>
        {/* Employability Enhancement */}
        <View style={economicStyles.infoBlock}>
          <View style={economicStyles.iconHeader}>
            <View style={economicStyles.bullet} />
            <Text style={economicStyles.blockTitle}>
              EMPLOYABILITY ENHANCEMENT
            </Text>
          </View>
          <View style={economicStyles.textArea}>
            <Text style={economicStyles.bodyText}>
              {employabilityEnhancement ||
                "No employability data recorded for this period."}
            </Text>
          </View>
        </View>

        {/* Income Opportunities */}
        <View style={[economicStyles.infoBlock, { marginTop: 10 }]}>
          <View style={economicStyles.iconHeader}>
            <View
              style={[economicStyles.bullet, { backgroundColor: "#10b981" }]}
            />
            <Text style={economicStyles.blockTitle}>
              INCOME GENERATION OPPORTUNITIES
            </Text>
          </View>
          <View style={economicStyles.textArea}>
            <Text style={economicStyles.bodyText}>
              {incomeOpportunities ||
                "No specific income opportunities documented."}
            </Text>
          </View>
        </View>
      </View>

      {/* Sustainability Disclaimer */}
      {/* <View style={economicStyles.footerNote}>
        <Text style={economicStyles.noteText}>
          * ROI and Cost calculations are based on project implementation
          expenses versus estimated market value of skills acquired by
          beneficiaries.
        </Text>
      </View> */}
    </>
  );
};

export default EconomicSection;
