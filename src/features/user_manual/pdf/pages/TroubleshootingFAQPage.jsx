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

  const images = data?.troubleshootingFAQ?.image || [];
  const isSingleImage = images.length === 1;

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer} id="faq">
        <SectionTitle title="Troubleshooting & FAQ" />

        {data.troubleshootingFAQ.map((faq, idx) => (
          <View key={`faqs-${idx}`} style={userManualStyles.faqItem}>
            {/* Question */}
            {faq.question && (
              <Text style={userManualStyles.faqQuestion} id={`faq-${idx + 1}`}>
                Q: {faq.question}
              </Text>
            )}

            {/* Answer */}
            {faq.answer && (
              <Text style={userManualStyles.faqAnswer}>A: {faq.answer}</Text>
            )}

            {/* Images */}
            {faq.image && faq.image.length > 0 && (
              <View style={userManualStyles.imagesContainer} wrap={false}>
                {faq.image.map((img, imgIdx) => (
                  <View
                    key={`${img}-${imgIdx}`}
                    style={[
                      userManualStyles.saftyImageWrapper,
                      isSingleImage
                        ? userManualStyles.fullWidthImage
                        : userManualStyles.halfWidthImage,
                    ]}
                  >
                    <Image
                      key={imgIdx}
                      src={img}
                      style={userManualStyles.saftyImage}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
