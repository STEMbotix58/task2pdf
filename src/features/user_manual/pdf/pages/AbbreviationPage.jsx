import { Text, View } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { abbreviationPageStyles as styles } from "../styles/abbreviationPageStyles";

export const AbbreviationPage = ({ data }) => {
  const abbreviations = data?.abbreviations || [];

  return (
    <PDFPageLayout wrap={false}>
      <View style={styles.container} id="abbreviations">
        <SectionTitle title="Abbreviations" />

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <View style={styles.columnShort}>
              <Text style={styles.headerText}>Term</Text>
            </View>
            <View style={styles.columnFull}>
              <Text style={styles.headerText}>Definition / Full Form</Text>
            </View>
          </View>

          {abbreviations.map((item, idx) => (
            <View
              key={`${item.shortForm}-${idx}`}
              style={[
                styles.tableRow,
                idx % 2 === 1 ? styles.tableRowAlternate : {},
              ]}
              wrap={false}
            >
              <View style={styles.columnShort}>
                <View style={styles.badge}>
                  <Text style={styles.textShort}>{item.shortForm}</Text>
                </View>
              </View>

              <View style={styles.columnFull}>
                <Text style={styles.textFull}>{item.fullForm}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
