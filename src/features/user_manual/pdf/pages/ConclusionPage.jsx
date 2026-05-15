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

  const images = data?.conclusion?.image || [];
  const isSingleImage = images.length === 1;

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer} id="conclusion">
        <SectionTitle title="Conclusion" />

        {/* Content */}
        {data?.conclusion?.content && (
          <Text style={userManualStyles.sectionContent}>
            {data.conclusion.content}
          </Text>
        )}

        {/* Images */}
        <View style={userManualStyles.imagesContainer} wrap={false}>
          {data?.conclusion?.images &&
            data.conclusion.images.length > 0 &&
            data.conclusion.images.map((image, idx) => (
              <View
                key={`${image}-${idx}`}
                style={[
                  userManualStyles.saftyImageWrapper,
                  isSingleImage
                    ? userManualStyles.fullWidthImage
                    : userManualStyles.halfWidthImage,
                ]}
              >
                <Image src={image} style={userManualStyles.saftyImage} />
              </View>
            ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
