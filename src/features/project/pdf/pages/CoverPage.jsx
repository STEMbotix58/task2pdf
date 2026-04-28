import { Text, View, Image, Page, Svg, Path } from "@react-pdf/renderer";
import { useProjectStore } from "@/features/project/model/projectStore";
import { coverPageStyles } from "../styles/coverPageStyles";

// Fallbacks
import HaitianLogo from "@/shared/assets/images/Haitian-Logo.jpg";
import STEMLogo from "@/shared/assets/images/STEMbotix-Logo.png";

import CoverImg1 from "@/shared/assets/images/ai-robotics/img7.jpg";
import CoverImg2 from "@/shared/assets/images/ai-robotics/img8.jpg";
import CoverImg3 from "@/shared/assets/images/ai-robotics/img9.jpg";
import CoverImg4 from "@/shared/assets/images/ai-robotics/img10.jpg";

import Robot from "@/shared/assets/icons/robot.png";
import AIHeadphones from "@/shared/assets/icons/ai-headphones.png";
import Bulb from "@/shared/assets/icons/bulb.png";

export const CoverPage = () => {
  const { title } = useProjectStore((state) => state.project);
  const { preparedBy, partnerLogo, stemLogo, homeImages, date } =
    useProjectStore((state) => state.basicInfo);
  // helper to safely resolve image
  const resolveImage = (img, fallback) => {
    if (!img) return fallback;

    if (typeof img === "string") return img;

    if (img instanceof File) {
      return URL.createObjectURL(img);
    }

    return fallback;
  };

  return (
    <Page>
      <View style={coverPageStyles.pageContainer}>
        {/* HEADER AREA */}
        <View style={coverPageStyles.header}>
          <View style={coverPageStyles.logoLeft}>
            <Image
              src={resolveImage(partnerLogo?.[0], HaitianLogo)}
              style={coverPageStyles.logoImage}
            />
          </View>
          <View style={coverPageStyles.logoRight}>
            <Image
              src={resolveImage(stemLogo?.[0], STEMLogo)}
              style={coverPageStyles.logoImage}
            />
          </View>
        </View>

        {/* Title */}
        <View style={coverPageStyles.gridContainer}>
          <View style={coverPageStyles.textContainer}>
            <Text style={coverPageStyles.mainTitle}>
              Implementation Report:{" "}
              <Text style={coverPageStyles.titleBold}>
                {title || "AI and Robotics Lab and AmRit Anganwadi Projects"}
              </Text>
            </Text>

            <View style={coverPageStyles.accentBar} />

            <Text style={coverPageStyles.preparedBy}>
              Prepared by {preparedBy || "ISTEM Collective Foundation"}
            </Text>

            <Text style={coverPageStyles.dateText}>
              {date || "May 13, 2025"}
            </Text>
          </View>

          {/* ===== GRID (ONLY IMAGES MADE DYNAMIC) ===== */}

          {/* Row 0 */}
          <View style={[coverPageStyles.block, { top: "0%", left: "75%" }]}>
            <Image
              src={resolveImage(homeImages?.[0], CoverImg1)}
              style={coverPageStyles.placeholderImage}
            />
          </View>

          {/* Row 1 */}
          <View
            style={[
              coverPageStyles.block,
              coverPageStyles.bgTeal,
              { top: "25%", left: "50%" },
            ]}
          >
            <Image src={Robot} style={coverPageStyles.iconPlaceholder} />
          </View>

          <View style={[coverPageStyles.block, { top: "25%", left: "75%" }]}>
            <Svg width="100%" height="100%" viewBox="0 0 100 100">
              <Path d="M0 100 L100 100 L100 0 Z" fill="#cce235" />
            </Svg>
          </View>

          {/* Row 2 */}
          <View style={[coverPageStyles.block, { top: "50%", left: "25%" }]}>
            <Image
              src={resolveImage(homeImages?.[1], CoverImg2)}
              style={coverPageStyles.placeholderImage}
            />
          </View>

          <View
            style={[
              coverPageStyles.block,
              coverPageStyles.bgDarkBlue,
              { top: "50%", left: "50%" },
            ]}
          />

          <View style={[coverPageStyles.block, { top: "50%", left: "75%" }]}>
            <Image
              src={resolveImage(homeImages?.[2], CoverImg3)}
              style={coverPageStyles.placeholderImage}
            />
          </View>

          {/* Row 3 */}
          <View style={[coverPageStyles.block, { top: "75%", left: "0%" }]}>
            <Image
              src={resolveImage(homeImages?.[3], CoverImg4)}
              style={coverPageStyles.placeholderImage}
            />
          </View>

          <View
            style={[
              coverPageStyles.block,
              coverPageStyles.bgTeal,
              { top: "75%", left: "25%" },
            ]}
          >
            <Image src={AIHeadphones} style={coverPageStyles.iconPlaceholder} />
          </View>

          <View style={[coverPageStyles.block, { top: "75%", left: "50%" }]}>
            <Svg width="100%" height="100%" viewBox="0 0 100 100">
              <Path d="M0 100 L100 100 L100 0 Z" fill="#CCCCCC" />
            </Svg>
          </View>

          <View
            style={[
              coverPageStyles.block,
              coverPageStyles.bgYellow,
              { top: "75%", left: "75%" },
            ]}
          >
            <Image src={Bulb} style={coverPageStyles.iconPlaceholder} />
          </View>
        </View>
      </View>
    </Page>
  );
};
