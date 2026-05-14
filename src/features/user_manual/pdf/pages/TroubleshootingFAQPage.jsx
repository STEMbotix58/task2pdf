import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { userManualStyles } from "../styles/userManualStyles";

export const TroubleshootingFAQPage = ({ data }) => {
  if (!data?.troubleshootingFAQ || data.troubleshootingFAQ.length === 0) {
    return null;
  }

  const hasContent = data.troubleshootingFAQ.some((item) => item.question);
  if (!hasContent) return null;

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer}>
        <SectionTitle title="Troubleshooting & FAQ" />

        {data.troubleshootingFAQ.map((faq, idx) => (
          <View id={`faq-${idx}`} key={idx} style={userManualStyles.faqItem}>
            {/* Question */}
            {faq.question && (
              <Text style={userManualStyles.faqQuestion}>
                Q: {faq.question}
              </Text>
            )}

            {/* Answer */}
            {faq.answer && (
              <Text style={userManualStyles.faqAnswer}>A: {faq.answer}</Text>
            )}

            {/* Images */}
            {faq.image && faq.image.length > 0 && (
              <View style={{ marginTop: 6, marginBottom: 6 }}>
                {faq.image.map((img, imgIdx) => (
                  <Image
                    key={imgIdx}
                    src={img}
                    style={[userManualStyles.sectionImage, { marginBottom: 6 }]}
                  />
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
