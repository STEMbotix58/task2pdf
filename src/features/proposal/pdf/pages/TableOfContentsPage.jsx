import React from "react";
import { View, Text, Page, Link } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { tableOfContentsStyles } from "../styles/tableOfContentsStyles";

export const TableOfContentsPage = () => {
  const pageBlocks = [
    { items: [{ title: "Proposal", target: "proposal" }] },
    { items: [{ title: "About STEMbotix", target: "about-stembotix" }] },
    { items: [{ title: "Project Proposal", target: "project-proposal" }] },
    { items: [{ title: "Financial Proposal", target: "financial-proposal" }] },
    { items: [{ title: "Gallery", target: "Awards" }] },
  ];

  const START_PAGE = 3;
  let INDEX_NUM = 1;

  return (
    <PDFPageLayout>
      <View style={tableOfContentsStyles.tocContainer}>
        <SectionTitle title={"Table of Contents"} />
        {pageBlocks.map((block, blockIndex) => {
          const pageNumber = START_PAGE + blockIndex;

          const visibleItems = block.items.filter(
            (item) => !item.optional || item.show,
          );

          if (visibleItems.length === 0) return null;

          return visibleItems.map((item, itemIndex) => (
            <View
              key={`${blockIndex}-${itemIndex}`}
              style={tableOfContentsStyles.tocItem}
            >
              <Link
                src={`#${item.target}`}
                style={tableOfContentsStyles.tocText}
              >
                {`${INDEX_NUM++}. ${item.title}`}
              </Link>

              <View style={tableOfContentsStyles.dotLeader} />

              <Text style={tableOfContentsStyles.tocPage}>{pageNumber}</Text>
            </View>
          ));
        })}
      </View>
    </PDFPageLayout>
  );
};
