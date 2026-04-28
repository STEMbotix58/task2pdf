import { Text, View, Image, Page } from "@react-pdf/renderer";
import { prefacePageStyles } from "../styles/prefacePageStyles";
import { useProjectStore } from "@/features/project/model/projectStore";

export const PrefacePage = () => {
  const preface = useProjectStore((state) => state.preface);
  const { website } = useProjectStore((state) => state.contact);

  return (
    <Page size="A4" style={prefacePageStyles.pageContainer}>
      {/* Header Section */}
      <View style={prefacePageStyles.headerContainer}>
        <View style={prefacePageStyles.cyanLine} />
        <Text style={prefacePageStyles.title}>Preface</Text>
      </View>

      {/* Content Sections */}
      <View style={prefacePageStyles.bodyContainer}>
        {preface.map((item, index) => {
          const imageUrl = item.image?.[0];
          return (
            <View key={index} style={prefacePageStyles.sectionRow}>
              {imageUrl && (
                <View style={prefacePageStyles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    style={prefacePageStyles.profileImage}
                  />
                </View>
              )}

              <View style={prefacePageStyles.textWrapper}>
                <Text style={prefacePageStyles.name}>{item.name || ""}</Text>

                <Text style={prefacePageStyles.designation}>
                  {item.designation || ""}
                </Text>

                <Text style={prefacePageStyles.paragraph}>
                  {item.testimonial || ""}
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Footer */}
      <View style={prefacePageStyles.footer}>
        <Text style={prefacePageStyles.pageNumber}>2</Text>
        <Text style={prefacePageStyles.website}>{website}</Text>
      </View>
    </Page>
  );
};
