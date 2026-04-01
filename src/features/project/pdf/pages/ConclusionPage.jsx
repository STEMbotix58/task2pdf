import React from "react";
import { Text, View, Image, Page } from "@react-pdf/renderer";
import { conclusionStyles } from "../styles/conclusionStyles";
import { useProjectStore } from "@/features/project/model/projectStore";

import BackgroundImage from "@/shared/assets/images/ai-robotics/img8.jpg";

export const ConclusionPage = () => {
  const conclusion = useProjectStore((state) => state.conclusion);
  return (
    <Page size="A4">
      <View style={conclusionStyles.headerContainer}>
        <Image
          src={BackgroundImage}
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            },
          ]}
        />
        <View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#0F2646",
              opacity: 0.9,
            },
          ]}
        />
        <View style={[conclusionStyles.cyanLine, conclusionStyles.lineWhite]} />
        <Text style={[conclusionStyles.title, { color: "white" }]}>
          Conclusion
        </Text>
        <Text style={[conclusionStyles.paragraph, { color: "white" }]}>
          {conclusion || "No Conclusion"}
        </Text>
      </View>
    </Page>
  );
};
