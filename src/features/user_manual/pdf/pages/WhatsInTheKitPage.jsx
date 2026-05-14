import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { whatsInTheKitPageStyles as styles } from "../styles/whatsInTheKitPageStyles";

export const WhatsInTheKitPage = ({ data }) => {
  const kitItems = data?.whatsInTheKit || [];
  const hasContent = kitItems.some((item) => item.itemName);

  if (kitItems.length === 0 || !hasContent) return null;

  return (
    <PDFPageLayout>
      <View style={styles.sectionContainer}>
        <SectionTitle title="What's in the Kit" />

        {/* Modern Grid Layout */}
        <View style={styles.gridContainer}>
          {kitItems.map((item, idx) => (
            <View key={idx} style={styles.itemCard}>
              {/* Image Thumbnail Area */}
              {item.image && item.image[0] && (
                <View style={styles.imageWrapper}>
                  <Image src={item.image[0]} style={styles.sectionImage} />
                </View>
              )}

              <View style={styles.textGroup}>
                <Text style={styles.badge}>Item {idx + 1}</Text>

                {item.itemName && (
                  <Text style={styles.itemTitle}>{item.itemName}</Text>
                )}

                {item.description && (
                  <Text style={styles.itemDescription}>{item.description}</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
