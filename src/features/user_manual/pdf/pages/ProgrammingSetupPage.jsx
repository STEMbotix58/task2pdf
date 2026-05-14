import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import { programmingSetupPageStyles as styles } from "../styles/programmingSetupPageStyles";

export const ProgrammingSetupPage = ({ data }) => {
  if (!data?.programmingSetup || data.programmingSetup.length === 0) {
    return null;
  }

  const hasContent = data.programmingSetup.some((item) => item.title);
  if (!hasContent) return null;

  return (
    <PDFPageLayout>
      <View style={styles.sectionContainer}>
        <SectionTitle title="Programming Setup" />

        {data.programmingSetup.map((step, idx) => (
          <View
            id={`programming-step-${idx}`}
            key={idx}
            style={styles.itemContainer}
          >
            <View>
              {/* Step Header formatted as "STEP X: Title" */}
              <View style={styles.stepHeaderContainer}>
                <Text style={styles.itemTitle}>
                  STEP {step.stepNumber}: {step.title}
                </Text>
              </View>

              {/* Description */}
              {step.description && (
                <View style={styles.contentWrapper}>
                  <Text style={styles.itemDescription}>{step.description}</Text>
                </View>
              )}
            </View>

            <View style={styles.contentWrapper}>
              {/* Dynamic Screenshots */}
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

              {/* Code Snippet Block */}
              {step.codeSnippet && (
                <View style={styles.codeBlockContainer} wrap={false}>
                  {/* Top Bar for Syntax Label */}
                  {step.syntaxLabel && (
                    <View style={styles.codeHeader}>
                      <Text style={styles.codeLabel}>{step.syntaxLabel}</Text>
                    </View>
                  )}
                  {/* The Code Itself */}
                  <View style={styles.codeContent}>
                    <Text style={styles.codeText}>{step.codeSnippet}</Text>
                  </View>
                </View>
              )}

              {/* Post-Code Explanation */}
              {step.explanation && (
                <View wrap={false}>
                  <Text style={styles.explanationText}>
                    💡 {step.explanation}
                  </Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
