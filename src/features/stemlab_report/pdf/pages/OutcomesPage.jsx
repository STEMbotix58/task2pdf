import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import { outcomesPageStyles as styles } from "../styles/outcomesPageStyles";
import { useStemLabStore } from "@/features/stemlab_report/model/stemLabReportStore";

// Make sure to add/update these paths to match your assets
import OutcomesSidebarIcon from "@/shared/assets/icons/gear-check-hands.png"; // Placeholder for the sidebar icon
import OutcomesImg1 from "@/shared/assets/images/yuva-stem/outcomes-1.jpg";
import OutcomesImg2 from "@/shared/assets/images/yuva-stem/outcomes-2.jpg";

export const OutcomesPage = () => {
  const { description, images } = useStemLabStore((state) => state.outcomes);

  return (
    <Page size="A4" style={styles.page}>
      {/* BACKGROUND ELEMENTS */}
      <View style={styles.redSidebar}>
        {/* <Image src={OutcomesSidebarIcon} style={styles.sidebarIcon} /> */}
      </View>
      <View style={styles.bgSwoop} />

      {/* MAIN CONTENT */}
      <View style={styles.mainContent}>
        {/* Title */}
        <Text style={styles.headerText}>KEY OUTCOMES</Text>

        {/* Top Image in Yellow Box */}
        <View style={styles.topImageWrapper}>
          <Image src={images[0] || OutcomesImg1} style={styles.topImage} />
        </View>

        {/* Text Paragraphs */}
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            {description.split("\n").join("\n\n")}
          </Text>
        </View>

        {/* Bottom Image (Yellow background extends to the right edge) */}
        <View style={styles.bottomImageWrapper}>
          <Image src={images[1] || OutcomesImg2} style={styles.bottomImage} />
        </View>
      </View>
    </Page>
  );
};
