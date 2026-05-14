import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { introStyles as styles } from "../styles/introductionStyles";

export const IntroductionPage = ({ data }) => {
  const { content, images } = data?.introduction || {};

  if (!content && (!images || images.length === 0)) {
    return null;
  }

  const displayImages = images ? images.slice(0, 3) : [];
  const imageCount = displayImages.length;

  return (
    <PDFPageLayout wrap={false}>
      <View style={styles.container}>
        <SectionTitle title="Introduction" />

        {content && (
          <View style={styles.textContainer}>
            <Text style={styles.introductionText}>{content}</Text>
          </View>
        )}

        {imageCount > 0 && (
          <View style={styles.galleryWrapper}>
            {displayImages.map((image, idx) => (
              <View key={idx} style={styles.imageFrame}>
                <Image src={image} style={styles.img} />
              </View>
            ))}
          </View>
        )}
      </View>
    </PDFPageLayout>
  );
};
