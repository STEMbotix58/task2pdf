import React from "react";
import { View, Text, Page, Link } from "@react-pdf/renderer";
import { tableOfContentsStyles } from "../styles/tableOfContentsStyles";
import { useProjectStore } from "../../model/projectStore";

// Table content data
const tocData = [
  {
    id: "1.",
    title: "Executive Summary",
    page: "2",
    target: "executive-summary",
  },
  { id: "2.", title: "Preface", page: "3", target: "preface" },
  {
    id: "3.",
    title: "AI and Robotics Lab Project",
    page: "4",
    target: "ai-robotics",
    subItems: [
      {
        id: "3.1",
        title: "Project Overview",
        page: "4",
        target: "ai-overview",
      },
      {
        id: "3.2",
        title: "Lab Setup and Components",
        page: "4",
        target: "ai-setup",
      },
      {
        id: "3.3",
        title: "Programs and Activities Conducted",
        page: "4",
        target: "ai-programs",
      },
      {
        id: "3.4",
        title: "Outcomes and Impact",
        page: "4",
        target: "ai-outcomes",
      },
      { id: "3.5", title: "Photographs", page: "5", target: "ai-photos" },
    ],
  },
  { id: "5.", title: "Conclusion", page: "8", target: "conclusion" },
  {
    id: "6.",
    title: "References and video links",
    page: "",
    target: "references",
  },
];

export const TableOfContentsPage = () => {
  const { website } = useProjectStore((state) => state.contact);
  return (
    <Page size="A4">
      {/* Header Section */}
      <View style={tableOfContentsStyles.headerContainer}>
        <View style={tableOfContentsStyles.cyanLine} />
        <Text style={tableOfContentsStyles.title}>Table of Contents</Text>
      </View>

      {/* TOC Items */}
      <View style={tableOfContentsStyles.tocContainer}>
        {tocData.map((mainItem, index) => (
          <React.Fragment key={index}>
            {/* Main Level Item */}
            <View style={tableOfContentsStyles.tocRow}>
              <Link
                src={`#${mainItem.target}`}
                style={tableOfContentsStyles.tocTextMain}
              >
                {`${mainItem.id} ${mainItem.title}`}
              </Link>
              <Text style={tableOfContentsStyles.tocPage}>{mainItem.page}</Text>
            </View>

            {/* Nested Sub Items */}
            {mainItem.subItems?.map((subItem, subIndex) => (
              <View key={subIndex} style={tableOfContentsStyles.tocRowSub}>
                <Link
                  src={`#${subItem.target}`}
                  style={tableOfContentsStyles.tocTextSub}
                >
                  {`${subItem.id} ${subItem.title}`}
                </Link>
                <Text style={tableOfContentsStyles.tocPage}>
                  {subItem.page}
                </Text>
              </View>
            ))}
          </React.Fragment>
        ))}
      </View>

      {/* Fixed Footer Band */}
      <View style={tableOfContentsStyles.footer} fixed>
        <Text style={tableOfContentsStyles.footerText}>{website}</Text>
      </View>
    </Page>
  );
};
