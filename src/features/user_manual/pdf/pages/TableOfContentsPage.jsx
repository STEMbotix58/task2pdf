import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";

import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { tableOfContentsStyles as styles } from "../styles/tableOfContentsStyles";

export const TableOfContentsPage = ({ data }) => {
  let currentPage = 3;

  const tocItems = [];

  tocItems.push({
    number: "1",
    title: "Introduction",
    page: currentPage,
    link: "introduction",
  });

  currentPage++;

  if (data?.whatsInTheKit?.some((item) => item.itemName)) {
    tocItems.push({
      number: "2",
      title: "What's in the Kit",
      page: currentPage,
      link: "kit-contents",
    });

    currentPage++;
  }

  if (data?.hardwareSetup?.some((item) => item.title)) {
    const parentNumber = "3";

    tocItems.push({
      number: parentNumber,
      title: "Hardware Setup",
      page: currentPage,
      link: "hardware-setup",
    });

    data.hardwareSetup.forEach((step, index) => {
      if (step?.title) {
        tocItems.push({
          number: `${parentNumber}.${index + 1}`,
          title: step.title,
          page: currentPage,
          link: `hardware-step-${index + 1}`,
          isSubItem: true,
        });

        currentPage++;
      }
    });
  }

  if (data?.programmingSetup?.some((item) => item.title)) {
    const parentNumber = "4";

    tocItems.push({
      number: parentNumber,
      title: "Programming Setup",
      page: currentPage,
      link: "programming-setup",
    });

    data.programmingSetup.forEach((step, index) => {
      if (step?.title) {
        tocItems.push({
          number: `${parentNumber}.${index + 1}`,
          title: step.title,
          page: currentPage,
          link: `programming-step-${index + 1}`,
          isSubItem: true,
        });

        currentPage++;
      }
    });
  }

  if (data?.safetyInformation?.content) {
    tocItems.push({
      number: "5",
      title: "Safety Information",
      page: currentPage,
      link: "safety-information",
    });

    currentPage++;
  }

  if (data?.troubleshootingFAQ?.some((item) => item.question)) {
    const parentNumber = "6";

    tocItems.push({
      number: parentNumber,
      title: "Troubleshooting & FAQ",
      page: currentPage,
      link: "faq",
    });

    data.troubleshootingFAQ.forEach((faq, index) => {
      if (faq?.question) {
        tocItems.push({
          number: `${parentNumber}.${index + 1}`,
          title: faq.question,
          page: currentPage,
          link: `faq-${index + 1}`,
          isSubItem: true,
        });

        currentPage++;
      }
    });
  }

  if (data?.conclusion?.content) {
    tocItems.push({
      number: "7",
      title: "Conclusion",
      page: currentPage,
      link: "conclusion",
    });
  }

  return (
    <PDFPageLayout>
      <View style={styles.tocContainer}>
        <SectionTitle title="Table of Contents" />

        {tocItems.map((item, index) => (
          <View
            key={index}
            style={[styles.tocItem, item.isSubItem && { marginBottom: 8 }]}
          >
            {/* LEFT SIDE */}
            <Link
              src={`#${item.link}`}
              style={item.isSubItem ? styles.tocSubText : styles.tocText}
            >
              {item.number} {item.title}
            </Link>

            <View style={styles.dotLeader} />
            {/* PAGE NUMBER */}
            <Text style={styles.tocPage}>{item.page}</Text>
          </View>
        ))}
      </View>
    </PDFPageLayout>
  );
};
