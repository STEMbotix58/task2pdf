import { View } from "@react-pdf/renderer";
import BeneficiarySection from "../sections/BeneficiarySection";
import BaselineEndlineSection from "../sections/BaselineEndlineSection";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

export const BeneficiaryAndBaselinePage = () => {
  return (
    <PDFPageLayout>
      <View id="beneficiary">
        <SectionTitle title="Beneficiary Profile" />
        <BeneficiarySection />
      </View>

      <View id="baseline">
        <SectionTitle title="Baseline vs Endline" />
        <BaselineEndlineSection />
      </View>
    </PDFPageLayout>
  );
};
