import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { coverPageStyles as styles } from "../styles/coverPageStyles";

export const CoverPage = ({ data }) => {
  const { coverPage } = data || {};

  return (
    <PDFPageLayout>
      <View style={styles.coverContainer}>
        <View style={styles.brandSection}>
          {coverPage?.logo?.[0] && (
            <Image src={coverPage.logo[0]} style={styles.logo} />
          )}
          <Text style={styles.tagline}>Learn • Make • Innovate</Text>
        </View>

        <View style={styles.titleGroup}>
          <Text style={styles.companyName}>
            {coverPage?.companyName || "STEMBOTIX"}
          </Text>
          <Text style={styles.title}>
            {coverPage?.title || "STEM Kit User Manual"}
          </Text>
          <Text style={styles.subtitle}>
            {coverPage?.subtitle || "Getting Started Guide"}
          </Text>
        </View>

        <View style={styles.metaSection}>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>VERSION</Text>
            <Text style={styles.metaValue}>{coverPage?.version || "1.0"}</Text>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.metaLabel}>RELEASED</Text>
            <Text style={styles.metaValue}>
              {coverPage?.date || "2024-01-01"}
            </Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
