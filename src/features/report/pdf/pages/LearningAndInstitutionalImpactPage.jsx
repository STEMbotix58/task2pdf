import { View } from "@react-pdf/renderer";
import LearningSection from "../sections/LearningSection";
import InstitutionalSection from "../sections/InstitutionalSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const LearningAndInstitutionalImpactPage = () => {
  return (
    <PDFPageLayout>
      <View id="learning-and-skill">
        <SectionTitle title="Learning & Skill Outcomes" />
        <LearningSection />
      </View>

      <View style={{ marginTop: 20 }} />

      <View id="institutional-impact">
        <SectionTitle title="Institutional / Ecosystem Impact" />
        <InstitutionalSection />
      </View>
    </PDFPageLayout>
  );
};
