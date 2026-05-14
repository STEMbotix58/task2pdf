import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { hardwareSetupPageStyles as styles } from "../styles/hardwareSetupPageStyles";

export const HardwareSetupPage = ({ data }) => {
  if (!data?.hardwareSetup || data.hardwareSetup.length === 0) {
    return null;
  }

  const hasContent = data.hardwareSetup.some((item) => item.title);
  if (!hasContent) return null;

  return (
    <PDFPageLayout>
      <View style={styles.sectionContainer}>
        <SectionTitle title="Hardware Setup" />

        {data.hardwareSetup.map((step, idx) => (
          <View
            id={`hardware-step-${idx}`}
            key={idx}
            style={styles.itemContainer}
          >
            <View>
              <View style={styles.stepHeaderContainer}>
                <Text style={styles.itemTitle}>
                  STEP {step.stepNumber}: {step.title}
                </Text>
              </View>

              {step.description && (
                <View style={styles.contentWrapper}>
                  <Text style={styles.itemDescription}>{step.description}</Text>
                </View>
              )}
            </View>

            <View style={styles.contentWrapper}>
              {step.image && step.image.length > 0 && (
                <View style={styles.imagesContainer} wrap={false}>
                  {step.image.map((img, imgIdx) => {
                    const isSingleImage = step.image.length === 1;

                    return (
                      <View
                        key={imgIdx}
                        style={[
                          styles.imageWrapper,
                          { width: isSingleImage ? "100%" : "48%" },
                        ]}
                      >
                        <Image src={img} style={styles.sectionImage} />
                      </View>
                    );
                  })}
                </View>
              )}

              {step.notes && (
                <View style={styles.noteBox} wrap={false}>
                  <Text style={styles.noteText}>⚠ Note: {step.notes}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
