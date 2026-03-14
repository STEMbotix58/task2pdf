import { View, Text } from "@react-pdf/renderer";
import { baselineStyles } from "../styles/baselineStyles";
import { useReportStore } from "@/features/report/model/reportStore";

const BaselineEndlineSection = () => {
  const baselineEndline = useReportStore(
    (state) => state.baselineEndline || [],
  );

  return (
    <>
      <Text style={baselineStyles.introText}>
        The following comparison highlights the measurable progress achieved
        during the project intervention.
      </Text>

      <View style={[baselineStyles.table, { marginTop: 15 }]}>
        {/* Header */}
        <View style={[baselineStyles.tableRow, baselineStyles.tableHeader]}>
          <View style={[baselineStyles.tableCol, { flex: 3 }]}>
            <Text style={baselineStyles.headerText}>PARAMETER</Text>
          </View>
          <View style={baselineStyles.tableCol}>
            <Text style={baselineStyles.headerText}>BASELINE</Text>
          </View>
          <View style={baselineStyles.tableCol}>
            <Text style={baselineStyles.headerText}>ENDLINE</Text>
          </View>
          <View style={baselineStyles.tableCol}>
            <Text style={baselineStyles.headerText}>% CHANGE</Text>
          </View>
        </View>

        {baselineEndline.length > 0 ? (
          baselineEndline.map((item, index) => (
            <View key={index} style={baselineStyles.tableRow}>
              <View style={[baselineStyles.tableCol, { flex: 3 }]}>
                <Text style={baselineStyles.cellTextBold}>
                  {item.parameter || "—"}
                </Text>
              </View>

              <View style={baselineStyles.tableCol}>
                <Text style={baselineStyles.cellText}>
                  {item.baselineValue || 0}
                </Text>
              </View>

              <View style={baselineStyles.tableCol}>
                <Text style={baselineStyles.cellText}>
                  {item.endlineValue || 0}
                </Text>
              </View>

              <View style={[baselineStyles.tableCol, baselineStyles.changeCol]}>
                <Text
                  style={[
                    baselineStyles.changeText,
                    { color: item.percentChange >= 0 ? "#16a34a" : "#dc2626" },
                  ]}
                >
                  {item.percentChange >= 0 ? "+" : ""}
                  {item.percentChange}%
                </Text>
              </View>
            </View>
          ))
        ) : (
          <View style={baselineStyles.tableRow}>
            <View style={[baselineStyles.tableCol, { flex: 6 }]}>
              <Text style={baselineStyles.cellText}>
                No comparison data available.
              </Text>
            </View>
          </View>
        )}
      </View>

      <View style={baselineStyles.summaryNote}>
        <Text style={baselineStyles.summaryTitle}>Data Interpretation:</Text>
        <Text style={baselineStyles.summaryText}>
          A positive percentage change indicates improvement post-intervention.
        </Text>
      </View>
    </>
  );
};

export default BaselineEndlineSection;
