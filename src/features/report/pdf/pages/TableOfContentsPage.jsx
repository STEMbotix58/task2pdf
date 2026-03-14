import React from "react";
import { View, Text, Page, Link } from "@react-pdf/renderer";
import { useReportStore } from "@/features/report/model/reportStore";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { tableOfContentsStyles } from "../styles/tableOfContentsStyles";

export const TableOfContentsPage = () => {
  const economicImpact = useReportStore((state) => state.economicImpact);

  const isEconomicEmpty =
    !economicImpact?.employabilityEnhancement &&
    !economicImpact?.incomeOpportunities &&
    !economicImpact?.costPerBeneficiary &&
    !economicImpact?.roi;

  const pageBlocks = [
    { items: [{ title: "Summary", target: "summary" }] },

    { items: [{ title: "Project Overview", target: "project-overview" }] },

    {
      items: [
        {
          title: "Objectives & Intended Outcomes",
          target: "objectives",
        },
        {
          optional: true,
          show: !isEconomicEmpty,
          title: "Economic Impact",
          target: "economic-impact",
        },
      ],
    },

    {
      items: [
        { title: "Beneficiary Profile", target: "beneficiary" },
        { title: "Baseline vs Endline Comparison", target: "baseline" },
      ],
    },

    {
      items: [
        { title: "Qualitative Impact", target: "qualitative-impact" },
        { title: "Quantitative Impact", target: "quantitative-impact" },
      ],
    },

    {
      items: [
        {
          title: "Learning & Skill Outcomes",
          target: "learning-and-skill",
        },
        {
          title: "Institutional / Ecosystem Impact",
          target: "institutional-impact",
        },
      ],
    },

    {
      items: [
        { title: "Social Impact", target: "social-impact" },
        {
          title: "Innovation & Technology Impact",
          target: "innovation-impact",
        },
      ],
    },

    {
      items: [
        { title: "Case Studies / Success Stories", target: "case-studies" },
        { title: "Challenges & Learnings", target: "challenges-learning" },
      ],
    },

    {
      items: [
        { title: "Sustainability & Scalability", target: "sustainability" },
        {
          title: "Monitoring & Evaluation Methodology",
          target: "monitoring-evaluation",
        },
      ],
    },

    { items: [{ title: "Photographs", target: "photographs" }] },
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
