import { Text, View } from "@react-pdf/renderer";
import { useReportStore } from "@/features/report/model/reportStore";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { coverPageStyles } from "../styles/coverPageStyles";

export const CoverPage = () => {
  const { projectTitle } = useReportStore((state) => state.projectOverview);

  return (
    <PDFPageLayout>
      {/* <View style={coverPageStyles.logoContainer}>
        <Image src={HaitianLogo} style={coverPageStyles.logoLeft} />
        <Image src={STEMbotixLogo} style={coverPageStyles.logoRight} />
      </View> */}

      <View style={coverPageStyles.mainBody}>
        <View style={coverPageStyles.accentBar} />

        <Text style={coverPageStyles.reportType}>IMPACT ANALYSIS REPORT</Text>
        <Text style={coverPageStyles.title}>{projectTitle}</Text>

        <View style={coverPageStyles.subtitleContainer}>
          <Text style={coverPageStyles.subtitle}>
            A comprehensive evaluation of outcomes, socio-economic impact, and
            institutional growth.
          </Text>
        </View>
      </View>

      {/* <View style={coverPageStyles.footerInfo}>
        <View style={coverPageStyles.infoRow}>
          <Text style={coverPageStyles.label}>Implementing Organization:</Text>
          <Text style={coverPageStyles.value}>STEMbotix</Text>
        </View>
        <View style={coverPageStyles.infoRow}>
          <Text style={coverPageStyles.label}>Location:</Text>
          <Text style={coverPageStyles.value}>Ahmedabad</Text>
        </View>
        <View style={coverPageStyles.infoRow}>
          <Text style={coverPageStyles.label}>Duration:</Text>
          <Text style={coverPageStyles.value}>2025 - 2026</Text>
        </View>
      </View> */}
    </PDFPageLayout>
  );
};
