import { Text, View } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { summaryStyles } from "../styles/summaryStyles";

export const SummaryPage = () => {
  return (
    <PDFPageLayout>
      <View id="summary">
        <SectionTitle title="Summary" />
        <View style={summaryStyles.container}>
          <View style={summaryStyles.summaryBox}>
            <Text style={summaryStyles.sectionLabel}>SUMMARY OF IMPACT</Text>
            <Text style={summaryStyles.bodyText}>
              "The ISTEM Collective Foundation, with a proven track record of
              installing over 150 STEM labs and 5 AmRit Anganwadis, and training
              over 2,000 students and 500 teachers, has successfully implemented
              two transformative educational projects, fully sponsored by
              Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives
              include the establishment of AI and Robotics Labs in two schools
              and the setup of AmRit Anganwadi centers. The projects were
              inaugurated on March 31, 2025, by Hon'ble MLA Shri Mukesh Bhai
              Patel (Mehsana Constituency) in the gracious presence of Shri
              Sunil Chaudhary, Director of Haitian Huayuan Machinery (India) Pvt
              Ltd, other company members, and the District Education Officer.
              Aligned with the National Education Policy 2020 (NEP2020), these
              projects promote hands-on STEM education and interactive early
              childhood learning. This report details the project
              implementations, including lab setups, training programs,
              educational tools, and outcomes, with placeholders for photographs
              to document the work for submission to Haitian Huayuan Machinery
              (India) Pvt Ltd."
            </Text>
          </View>
          <View style={summaryStyles.takeawaySection}>
            <Text style={summaryStyles.sectionLabel}>KEY TAKEAWAYS</Text>
            <View style={summaryStyles.takeawayCard}>
              <Text style={summaryStyles.italicText}>
                "Strategic partnerships and hands-on technological integration
                are essential for modernizing rural education landscapes."
              </Text>
            </View>
          </View>
          <View style={summaryStyles.recommendationSection}>
            <View style={summaryStyles.headerRow}>
              <View style={summaryStyles.targetIcon} />
              <Text style={summaryStyles.sectionLabel}>
                RECOMMENDATIONS FOR FUTURE PHASES
              </Text>
            </View>
            <View style={summaryStyles.recommendationBox}>
              <Text style={summaryStyles.bodyText}>
                "Expanding digital infrastructure and continuous teacher
                training are recommended to maintain the momentum of
                innovation."
              </Text>
            </View>
          </View>
          <View style={summaryStyles.signOff}>
            <Text style={summaryStyles.signOffText}>
              The ISTEM Collective Foundation remains committed to advancing
              STEM education and early childhood development in collaboration
              with our valued partners.
            </Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
