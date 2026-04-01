import { Text, View, Image, Page, Svg, Path } from "@react-pdf/renderer";
import { useProjectStore } from "@/features/project/model/projectStore";

import { projectStyles } from "../styles/projectStyles";

import ProjectImage from "@/shared/assets/images/ai-robotics/img7.jpg";

export const ProjectPage = () => {
  const {
    title,
    overview,
    implementation,
    outcomesImpact,
    roboticsKits,
    hardware,
    software,
    infrastructure,
    amount,
    image,
  } = useProjectStore((state) => state.project);
  const { preparedBy } = useProjectStore((state) => state.basicInfo);

  const resolveImage = (img, fallback) => {
    if (!img) return fallback;

    if (typeof img === "string") return img;

    if (img instanceof File) {
      return URL.createObjectURL(img);
    }

    return fallback;
  };

  return (
    <Page size="A4" style={projectStyles.pageContainer}>
      <View style={projectStyles.topSection}>
        <View style={projectStyles.heroImageWrapper}>
          <Image
            src={resolveImage(image?.[0], ProjectImage)}
            style={projectStyles.heroImage}
          />
        </View>
        <View style={projectStyles.topContent}>
          <Text style={projectStyles.mainTitle}>
            {title || "AI and Robotics Lab Project"}
          </Text>
          <Text style={projectStyles.subTitle}>Project Overview</Text>
          <Text style={projectStyles.bodyText}>
            {overview ||
              "Funded by Haitian Huayuan Machinery (India) Pvt Ltd, the AI and Robotics Lab project was designed to provide students with practical experience in robotics and artificial intelligence, fostering STEM education and preparing them for technological careers. Aligned with NEP2020, the project emphasizes holistic and experiential learning. Two AI and Robotics Labs were established in schools and inauguratedon March 31, 2025, by Hon’ble MLA Shri Mukesh Bhai Patel in the presence of Shri Sunil Chaudhary and other dignitaries."}
          </Text>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={projectStyles.mainContainer}>
        <Text style={projectStyles.sectionTitle}>Lab Setup and Components</Text>

        {/* Teal Specifications Box */}
        <View style={projectStyles.boxesWrapper}>
          {/* Left Box Column */}
          <View style={projectStyles.boxColumn}>
            <View style={projectStyles.boxRow}>
              <Text style={projectStyles.boxIcon}>
                <Svg width={12} height={12} viewBox="0 0 640 640">
                  <Path
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                    fill="#FFFFFF"
                  />
                </Svg>
              </Text>
              <Text style={projectStyles.boxText}>
                <Text style={projectStyles.boxTextBold}>Robotics Kits: </Text>
                {roboticsKits ||
                  "Starter, Intermediate, Advanced, AI & IoT, Humanoid, 3D Pens, Mechanical Construction, AR Kits"}
              </Text>
            </View>
            <View style={projectStyles.boxRow}>
              <Text style={projectStyles.boxIcon}>
                <Svg width={12} height={12} viewBox="0 0 640 640">
                  <Path
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                    fill="#FFFFFF"
                  />
                </Svg>
              </Text>
              <Text style={projectStyles.boxText}>
                <Text style={projectStyles.boxTextBold}>Hardware: </Text>
                {hardware || "Sensors, Actuator Interfaces, Microcontrollers"}
              </Text>
            </View>
          </View>

          {/* Right Box Column */}
          <View style={projectStyles.boxColumn}>
            <View style={projectStyles.boxRow}>
              <Text style={projectStyles.boxIcon}>
                <Svg width={12} height={12} viewBox="0 0 640 640">
                  <Path
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                    fill="#FFFFFF"
                  />
                </Svg>
              </Text>
              <Text style={projectStyles.boxText}>
                <Text style={projectStyles.boxTextBold}>Software: </Text>
                {software || "Simulation Environments"}
              </Text>
            </View>
            <View style={projectStyles.boxRow}>
              <Text style={projectStyles.boxIcon}>
                <Svg width={12} height={12} viewBox="0 0 640 640">
                  <Path
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                    fill="#FFFFFF"
                  />
                </Svg>
              </Text>
              <Text style={projectStyles.boxText}>
                <Text style={projectStyles.boxTextBold}>Infrastructure: </Text>
                {infrastructure ||
                  "Collaboration Spaces, Furniture, IT Infrastructure (DesktopServer, Thin Client Nodes)"}
              </Text>
            </View>
          </View>
        </View>

        <Text style={projectStyles.costText}>
          The total cost for setting up the lab was Rs. {amount}, fully
          sponsored by{" "}
          {preparedBy || "Haitian Huayuan Machinery (India) Pvt Ltd"}.
        </Text>

        {/* Dashed Divider Line */}
        <View style={projectStyles.divider} />

        {/* Bottom Split Section */}
        <View style={projectStyles.bottomSection}>
          {/* Bottom Left Column */}
          <View style={projectStyles.bottomColumnLeft}>
            <Text style={projectStyles.sectionTitle}>
              Programs and Activities Conducted
            </Text>
            <Text style={[projectStyles.bodyText, { lineHeight: 1.2 }]}>
              {implementation ||
                "To maximize student engagement, the project included:"}
            </Text>
            {/* <View style={projectStyles.bulletList}>
              <View style={projectStyles.bulletItem}>
                <Text style={projectStyles.bulletDot}>•</Text>
                <Text style={projectStyles.bulletText}>
                  Robotics competitions to encourage innovation.
                </Text>
              </View>
              <View style={projectStyles.bulletItem}>
                <Text style={projectStyles.bulletDot}>•</Text>
                <Text style={projectStyles.bulletText}>
                  AI hackathons to foster problem-solving.
                </Text>
              </View>
              <View style={projectStyles.bulletItem}>
                <Text style={projectStyles.bulletDot}>•</Text>
                <Text style={projectStyles.bulletText}>
                  Public demonstrations to showcase student projects.
                </Text>
              </View>
            </View>
            <Text style={[projectStyles.bodyText, { lineHeight: 1.2 }]}>
              These activities provided practical applications of the lab
              resources, enhancing students' technical and collaborative skills.
            </Text> */}
          </View>

          {/* Bottom Right Column */}
          <View style={projectStyles.bottomColumnRight}>
            <Text style={projectStyles.sectionTitle}>Outcomes and Impact</Text>
            <Text style={[projectStyles.bodyText, { lineHeight: 1.2 }]}>
              {outcomesImpact ||
                "The AI and Robotics Labs have significantly enriched STEMeducation, equipping students with practical skills in roboticsand AI. The project has cultivated a culture of innovation,collaboration, and career readiness, aligning with the goals ofNEP2020 and preparing students for future technological advancements."}
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={projectStyles.footer}>
        <Text style={projectStyles.website}>WWW.STEMBOTIX.COM</Text>
        <Text style={projectStyles.pageNumber}>3</Text>
      </View>
    </Page>
  );
};
