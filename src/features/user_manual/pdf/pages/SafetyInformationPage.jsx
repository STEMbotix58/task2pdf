import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { userManualStyles } from "../styles/userManualStyles";

export const SafetyInformationPage = ({ data }) => {
  const images = data?.safetyInformation?.images || [];

  if (!data?.safetyInformation?.content && images.length === 0) {
    return null;
  }

  const isSingleImage = images.length === 1;

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer} id="safety-information">
        <SectionTitle title="Safety Information" />

        {/* Content */}
        {data?.safetyInformation?.content && (
          <Text style={userManualStyles.sectionContent}>
            {data.safetyInformation.content}
          </Text>
        )}

        {/* Images */}
        {images.length > 0 && (
          <View style={userManualStyles.imagesContainer}>
            {images.map((image, idx) => (
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
        )}
      </View>
    </PDFPageLayout>
  );
};
