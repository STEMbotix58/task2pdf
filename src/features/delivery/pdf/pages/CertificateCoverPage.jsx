import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { certificateCoverStyles } from "../styles/certificateCoverStyles";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";
import { formattedDate } from "@/shared/utils/formatDate";

export const CertificateCoverPage = () => {
  const { deliveryBasicInfo, schoolDelivery } = useDeliveryStore();

  const { date, subject, projectName, purchaseOrderNo, purchaseOrderDate } =
    deliveryBasicInfo || {};

  const {
    schoolName,
    schoolAddress,
    deliveredAndInstalledBy,
    deliveredByContactNo,
    receivedBy,
    receivedByContactNo,
  } = schoolDelivery || {};

  const currentDate = formattedDate(new Date());
  const formattedPurchaseOrderDate = formattedDate(
    purchaseOrderDate ? new Date(purchaseOrderDate) : null,
  );

  return (
    <PDFPageLayout>
      {/* Header Line */}
      <View style={certificateCoverStyles.topRow}>
        <Text style={certificateCoverStyles.dateText}>
          Date: {currentDate || "—"}
        </Text>
      </View>

      {/* Title */}
      <Text style={certificateCoverStyles.title}>
        DELIVERY & INSTALLATION CERTIFICATE
      </Text>

      <Text style={certificateCoverStyles.salutation}>
        TO WHOMSOEVER IT MAY CONCERN
      </Text>

      {/* Subject */}
      <View style={certificateCoverStyles.subjectBox}>
        <Text style={certificateCoverStyles.subjectLabel}>Subject:</Text>
        <Text style={certificateCoverStyles.subjectText}>{subject}</Text>
      </View>

      {/* References */}
      <View style={certificateCoverStyles.subjectBox}>
        <Text style={certificateCoverStyles.subjectLabel}>References:</Text>
        <Text style={certificateCoverStyles.subjectText}>
          Purchase Order
          <Text style={certificateCoverStyles.bold}>
            {" "}
            PO-{purchaseOrderNo || "—"}{" "}
          </Text>
          on Dated{" "}
          <Text style={certificateCoverStyles.bold}>
            {" "}
            {formattedPurchaseOrderDate || "—"}{" "}
          </Text>
        </Text>
      </View>

      {/* Body */}
      <View style={certificateCoverStyles.contentBody}>
        <Text style={certificateCoverStyles.paragraph}>
          This is to certify that
          <Text style={certificateCoverStyles.bold}>
            {" "}
            STEMbotix Private Limited{" "}
          </Text>
          has successfully delivered and installed the STEM Lab items at the
          school premises as per the specifications and quantities mentioned in
          the work order issued by the Yuva Unstoppable and Annexure-I.
        </Text>

        <Text style={certificateCoverStyles.paragraph}>
          The detailed item list and quantities are provided in Annexure-I.
        </Text>
      </View>

      {/* Delivery Details Table */}
      <Text style={certificateCoverStyles.sectionTitle}>Delivery Details</Text>

      <View style={certificateCoverStyles.table}>
        {/* School Name */}
        <View style={certificateCoverStyles.tableRow}>
          <View style={certificateCoverStyles.labelCol}>
            <Text style={certificateCoverStyles.tableLabel}>School Name</Text>
          </View>
          <View style={certificateCoverStyles.valueCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {schoolName || "—"}
            </Text>
          </View>
        </View>

        {/* Address */}
        <View style={certificateCoverStyles.tableRow}>
          <View style={certificateCoverStyles.labelCol}>
            <Text style={certificateCoverStyles.tableLabel}>Address</Text>
          </View>
          <View style={certificateCoverStyles.valueCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {schoolAddress || "—"}
            </Text>
          </View>
        </View>

        {/* Delivered By */}
        <View style={certificateCoverStyles.tableRow}>
          <View style={certificateCoverStyles.labelCol}>
            <Text style={certificateCoverStyles.tableLabel}>
              Delivered & Installed By
            </Text>
          </View>
          <View style={certificateCoverStyles.halfCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {deliveredAndInstalledBy || "—"}
            </Text>
          </View>
          <View style={certificateCoverStyles.smallLabelCol}>
            <Text style={certificateCoverStyles.tableLabel}>Contact</Text>
          </View>
          <View style={certificateCoverStyles.smallValueCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {deliveredByContactNo || "—"}
            </Text>
          </View>
        </View>

        {/* Received By */}
        <View style={certificateCoverStyles.tableRow}>
          <View style={certificateCoverStyles.labelCol}>
            <Text style={certificateCoverStyles.tableLabel}>Received By</Text>
          </View>
          <View style={certificateCoverStyles.halfCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {receivedBy || "—"}
            </Text>
          </View>
          <View style={certificateCoverStyles.smallLabelCol}>
            <Text style={certificateCoverStyles.tableLabel}>Contact</Text>
          </View>
          <View style={certificateCoverStyles.smallValueCol}>
            <Text style={certificateCoverStyles.tableValue}>
              {receivedByContactNo || "—"}
            </Text>
          </View>
        </View>
      </View>

      {/* Declaration */}
      <View style={certificateCoverStyles.declarationSection}>
        <Text style={certificateCoverStyles.declarationTitle}>Declaration</Text>
        <Text style={certificateCoverStyles.declarationText}>
          We hereby declare that all the items supplied by STEMbotix Private
          Limited have been received in full, installed correctly, and are in
          good working condition, as per the specifications and quantities
          mentioned in the work order and Annexure–I. The installation has been
          physically verified and found satisfactory.
        </Text>
      </View>

      {/* Signatures */}
      <View style={certificateCoverStyles.signatureSection}>
        <View style={certificateCoverStyles.sigBox}>
          <View style={certificateCoverStyles.sigLine} />
          <Text style={certificateCoverStyles.sigLabel}>
            Delivery Person Sign
          </Text>
        </View>

        <View style={certificateCoverStyles.sigBox}>
          <View style={certificateCoverStyles.sigLine} />
          <Text style={certificateCoverStyles.sigLabel}>
            Sign and Stamp of School
          </Text>
        </View>
      </View>
    </PDFPageLayout>
  );
};
