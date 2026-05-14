import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { userManualStyles } from "../styles/userManualStyles";

export const SafetyInformationPage = ({ data }) => {
  if (
    !data?.safetyInformation?.content &&
    (!data?.safetyInformation?.images ||
      data.safetyInformation.images.length === 0)
  ) {
    return null;
  }

  return (
    <PDFPageLayout>
      <View style={userManualStyles.sectionContainer}>
        <SectionTitle title="Safety Information" />

        {/* Content */}
        {data?.safetyInformation?.content && (
          <Text style={userManualStyles.sectionContent}>
            {data.safetyInformation.content}
          </Text>
        )}

        {/* Images */}
        {data?.safetyInformation?.images &&
          data.safetyInformation.images.length > 0 &&
          data.safetyInformation.images.map((image, idx) => (
            <View key={idx} style={{ marginBottom: 12 }}>
              <Image src={image} style={userManualStyles.sectionImage} />
            </View>
          ))}
      </View>
    </PDFPageLayout>
  );
};
