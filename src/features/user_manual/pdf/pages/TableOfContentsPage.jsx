import React from "react";
import { View, Text, Link } from "@react-pdf/renderer";

import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";

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

  // =========================
  // WHAT'S IN THE KIT
  // =========================
  if (data?.whatsInTheKit?.some((item) => item.itemName)) {
    tocItems.push({
      number: "2",
      title: "What's in the Kit",
      page: currentPage,
      link: "kit-contents",
    });

    currentPage++;
  }

  // =========================
  // HARDWARE SETUP
  // =========================
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

  // =========================
  // PROGRAMMING SETUP
  // =========================
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

  // =========================
  // SAFETY INFORMATION
  // =========================
  if (data?.safetyInformation?.content) {
    tocItems.push({
      number: "5",
      title: "Safety Information",
      page: currentPage,
      link: "safety-information",
    });

    currentPage++;
  }

  // =========================
  // FAQ
  // =========================
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

  // =========================
  // CONCLUSION
  // =========================
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
      <View style={{ marginTop: 10 }}>
        <SectionTitle title="Table of Contents" />

        <View style={{ marginTop: 20 }}>
          {tocItems.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                paddingLeft: item.isSubItem ? 18 : 0,
              }}
            >
              {/* LEFT SIDE */}
              <Link
                src={`#${item.link}`}
                style={{
                  flex: 1,
                  textDecoration: "none",
                }}
              >
                <Text
                  style={{
                    fontSize: item.isSubItem ? 10 : 11,
                    fontWeight: item.isSubItem ? 400 : 600,
                    color: "#0f172a",
                  }}
                >
                  {item.number} {item.title}
                </Text>
              </Link>

              {/* DOTS */}
              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: "#cbd5e1",
                  borderBottomStyle: "dotted",
                  marginHorizontal: 8,
                  marginBottom: 3,
                }}
              />

              {/* PAGE NUMBER */}
              <Text
                style={{
                  width: 30,
                  textAlign: "right",
                  fontSize: 10,
                  color: "#64748b",
                }}
              >
                {item.page}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
