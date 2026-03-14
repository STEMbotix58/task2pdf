import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { aboutStembotixStyles } from "../styles/aboutStembotixStyles";

export const AboutStembotixPage = () => {
  const { name, designation, email, phone, signatureImg } = useProposalStore(
    (state) => state.spoc,
  );

  const techSkills = [
    "3D Printing & Pens",
    "Basic Electronics",
    "Arduino & IoT",
    "Drone Flying",
    "AR/VR",
    "App Design",
    "Robotics",
    "Python & Block Coding",
  ];

  const accomplishments = [
    { val: "700+", lab: "AR-based Creche Centers (Early Childhood)" },
    { val: "600+", lab: "Atal Tinkering Labs (ATL) Implemented" },
    { val: "100+", lab: "Vocational Training Labs (Gujarat Govt)" },
    { val: "525+", lab: "Innovation Clubs in Higher Education" },
    { val: "90+", lab: "Young Scientist Innovation Clubs (UK Govt)" },
    { val: "10k+", lab: "Hackathon Participants Across States" },
  ];

  return (
    <PDFPageLayout>
      <View id="about-stembotix">
        <SectionTitle title="About STEMbotix" />
        <Text style={aboutStembotixStyles.introText}>
          STEMbotix is committed to enhancing expertise in emerging technologies
          through STEM-based educational training. We strive to revolutionize
          education from kindergarten to post-graduation, ensuring that all
          students have the necessary knowledge, attitude, and skills to excel
          in their studies and careers. The foundation conducts STEM-based
          training programs for schools, colleges, and universities, with a
          particular focus on providing advanced technological courses to
          underprivileged children in rural India.
        </Text>
        <Text style={aboutStembotixStyles.introText}>
          Our comprehensive training covers a wide range of skills such as 3D
          pens, 3D printing, Basic Electronics, Arduino, IOT, drone flying,
          AR/VR, application design, mechanical tools, robotics, Python
          programming, and block coding.
        </Text>
        <Text style={aboutStembotixStyles.introText}>
          Our approach includes hands-on experience, Capstone Projects, the VARK
          Model Curriculum, networking opportunities with domain experts, and a
          combination of synchronous and asynchronous sessions.
        </Text>
        <Text style={[aboutStembotixStyles.introText, { marginBottom: 0 }]}>
          STEMbotix's remarkable journey in the realm of STEM education has been
          adorned with numerous accomplishments and substantial contributions
          towards the implementation of NEP2020 (National Education Policy
          2020), working in close collaboration with state and central
          governments. Our expertise has played a pivotal role in rolling out
          successful STEM lab projects across various regions, resulting in
          transformative educational experiences for students.
        </Text>
        <Text style={aboutStembotixStyles.subHeader}>
          Core Technologies & Training
        </Text>
        <View style={aboutStembotixStyles.gridContainer}>
          {techSkills.map((skill, index) => (
            <View key={index} style={aboutStembotixStyles.techBadge}>
              <Text style={aboutStembotixStyles.techText}>{skill}</Text>
            </View>
          ))}
        </View>
        <Text style={aboutStembotixStyles.subHeader}>Our Methodology</Text>
        <View>
          {[
            "Hands-on experience & Capstone Projects",
            "VARK Model Curriculum",
            "Synchronous & Asynchronous sessions",
            "Networking with domain experts",
          ].map((item, i) => (
            <View key={i} style={aboutStembotixStyles.methodologyRow}>
              <Text style={aboutStembotixStyles.bullet}>•</Text>
              <Text style={{ fontSize: 9, color: "#475569" }}>{item}</Text>
            </View>
          ))}
        </View>
        <Text style={aboutStembotixStyles.subHeader}>
          Impact & Achievements
        </Text>
        <View style={aboutStembotixStyles.statsGrid}>
          {accomplishments.map((stat, i) => (
            <View key={i} style={aboutStembotixStyles.statCard}>
              <Text style={aboutStembotixStyles.statValue}>{stat.val}</Text>
              <Text style={aboutStembotixStyles.statLabel}>{stat.lab}</Text>
            </View>
          ))}
        </View>

        {/* SPOC Section */}
        <Text style={aboutStembotixStyles.subHeader}>
          Contact Person Details
        </Text>
        <View
          style={[
            aboutStembotixStyles.contactSection,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <View>
            {signatureImg ? (
              <Image
                src={signatureImg}
                style={aboutStembotixStyles.signatureImage}
              />
            ) : null}
          </View>
          <View style={{ borderLeft: "1px solid #333333", paddingLeft: 10 }}>
            <Text style={aboutStembotixStyles.contactLine}>{name}</Text>
            <Text style={aboutStembotixStyles.contactLine}>
              Designation: {designation}
            </Text>
            <Text style={aboutStembotixStyles.contactLine}>
              Contact No.: {phone}
            </Text>
            <Text style={aboutStembotixStyles.contactLine}>
              Email ID: {email}
            </Text>
          </View>
        </View>
        {/* <View style={aboutStembotixStyles.signatureSection}>
          <Text style={{ fontSize: 9, color: "#1e293b", fontWeight: "bold" }}>
            Dhruvil Patel
          </Text>
          <Text style={{ fontSize: 8, color: "#64748b" }}>CTO, STEMbotix</Text>
        </View> */}
      </View>
    </PDFPageLayout>
  );
};
