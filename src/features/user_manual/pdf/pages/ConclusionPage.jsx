import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { userManualStyles } from "../styles/userManualStyles";

export const ConclusionPage = ({ data }) => {
  if (
    !data?.conclusion?.content &&
    (!data?.conclusion?.images || data.conclusion.images.length === 0)
  ) {
    return null;
  }

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer}>
        <SectionTitle title="Conclusion" />

        {/* Content */}
        {data?.conclusion?.content && (
          <Text style={userManualStyles.sectionContent}>
            {data.conclusion.content}
          </Text>
        )}

        {/* Images */}
        {data?.conclusion?.images &&
          data.conclusion.images.length > 0 &&
          data.conclusion.images.map((image, idx) => (
            <View key={idx} style={{ marginBottom: 12 }}>
              <Image src={image} style={userManualStyles.sectionImage} />
            </View>
          ))}
      </View>
    </PDFPageLayout>
  );
};
