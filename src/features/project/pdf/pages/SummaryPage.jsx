import { Text, View, Image, Page } from "@react-pdf/renderer";
import { summaryPageStyles } from "../styles/summaryPageStyles";
import { useProjectStore } from "@/features/project/model/projectStore";

import BackgroundImage from "@/shared/assets/images/ai-robotics/img8.jpg";

import Electron from "@/shared/assets/icons/electron.png";
import Mind from "@/shared/assets/icons/mind.png";
import SaveWater from "@/shared/assets/icons/save-water.png";

export const SummaryPage = () => {
  const summary = useProjectStore((state) => state.summary);
  return (
    <Page size="A4" style={summaryPageStyles.pageContainer}>
      <View style={summaryPageStyles.headerContainer}>
        <View style={summaryPageStyles.cyanLine} />
        <Text style={summaryPageStyles.title}>Executive Summary</Text>
        <Text style={summaryPageStyles.paragraph}>
          {summary || "No summary provided."}
        </Text>
      </View>

      <Image
        src={BackgroundImage}
        style={[summaryPageStyles.gridContainer, { objectFit: "cover" }]}
      />
      <View style={summaryPageStyles.gridContainer}>
        {/* ROW 1 */}
        <View
          style={[
            summaryPageStyles.blockSpan2,
            summaryPageStyles.bgTeal,
            { top: "0%", left: "0%" },
          ]}
        >
          <Image src={Electron} style={summaryPageStyles.iconPlaceholder} />
          <Text style={summaryPageStyles.iconText}>Impact</Text>
        </View>
        <View style={[summaryPageStyles.block, { top: "0%", left: "50%" }]} />
        <View style={[summaryPageStyles.block, { top: "0%", left: "75%" }]} />

        {/* ROW 2 */}
        <View
          style={[summaryPageStyles.block, { top: "33.33%", left: "0%" }]}
        />

        <View
          style={[summaryPageStyles.block, { top: "33.33%", left: "25%" }]}
        />
        <View
          style={[summaryPageStyles.block, { top: "33.33%", left: "50%" }]}
        />
        <View
          style={[
            summaryPageStyles.block,
            summaryPageStyles.bgDarkBlue,
            { top: "33.33%", left: "75%" },
          ]}
        >
          <Image src={Mind} style={summaryPageStyles.iconPlaceholder} />
          <Text style={summaryPageStyles.iconText}>Innovation</Text>
        </View>

        {/* ROW 3 */}
        <View
          style={[summaryPageStyles.block, { top: "66.66%", left: "0%" }]}
        />
        <View
          style={[summaryPageStyles.block, { top: "66.66%", left: "25%" }]}
        />
        <View
          style={[
            summaryPageStyles.block,
            summaryPageStyles.bgYellow,
            { top: "66.66%", left: "50%" },
          ]}
        >
          <Image src={SaveWater} style={summaryPageStyles.iconPlaceholder} />
          <Text style={summaryPageStyles.iconText}>Empowerment</Text>
        </View>
        <View
          style={[summaryPageStyles.block, { top: "66.66%", left: "75%" }]}
        />
      </View>
    </Page>
  );
};
