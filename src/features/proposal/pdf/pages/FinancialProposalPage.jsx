import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useProposalStore } from "@/features/proposal/model/proposalStore";
import { financialProposalStyles } from "../styles/financialProposalStyles";

export const FinancialProposalPage = () => {
  const { name, designation, email, phone, signatureImg } = useProposalStore(
    (state) => state.spoc,
  );

  const items = useProposalStore((state) => state.financialProposal || []);

  const totalAmount = items.reduce(
    (sum, item) => sum + (Number(item.amount) || 0),
    0,
  );

  return (
    <PDFPageLayout>
      <View id="financial-proposal">
        <SectionTitle title="Financial Proposal" />

        {/* Table Header */}
        <View
          style={[
            financialProposalStyles.tableRow,
            financialProposalStyles.tableHeader,
          ]}
        >
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.srCol,
            ]}
          >
            Sr. No.
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.particularCol,
            ]}
          >
            Particular
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.specCol,
            ]}
          >
            Specification
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.boqCol,
            ]}
          >
            BoQ
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.descCol,
            ]}
          >
            Description
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.amountCol,
            ]}
          >
            Amount
          </Text>
        </View>

        {/* Table Rows */}
        {items.length > 0 ? (
          items.map((item, index) => (
            <View key={index} style={financialProposalStyles.tableRow}>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.srCol,
                ]}
              >
                {index + 1}
              </Text>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.particularCol,
                ]}
              >
                {item.particular || "-"}
              </Text>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.specCol,
                ]}
              >
                {item.specification || "-"}
              </Text>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.boqCol,
                ]}
              >
                {item.boq || "-"}
              </Text>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.descCol,
                ]}
              >
                {item.description || "-"}
              </Text>
              <Text
                style={[
                  financialProposalStyles.cell,
                  financialProposalStyles.amountCol,
                ]}
              >
                Rs. {Number(item.amount || 0).toLocaleString()}
              </Text>
            </View>
          ))
        ) : (
          <View style={financialProposalStyles.tableRow}>
            <Text style={financialProposalStyles.emptyText}>
              No financial items added.
            </Text>
          </View>
        )}

        {/* Total Row */}
        <View
          style={[
            financialProposalStyles.tableRow,
            financialProposalStyles.totalRow,
          ]}
        >
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.totalLabel,
            ]}
          >
            Total Amount
          </Text>
          <Text
            style={[
              financialProposalStyles.cell,
              financialProposalStyles.amountCol,
              financialProposalStyles.totalAmount,
            ]}
          >
            Rs. {totalAmount.toLocaleString()}
          </Text>
        </View>

        {/* Contact Person Section */}
        <Text style={financialProposalStyles.subHeader}>
          Contact Person Details
        </Text>
        <View
          style={[
            financialProposalStyles.contactSection,
            { flexDirection: "row", alignItems: "center" },
          ]}
        >
          <View>
            {signatureImg ? (
              <Image
                src={signatureImg}
                style={financialProposalStyles.signatureImage}
              />
            ) : null}
          </View>
          <View style={{ borderLeft: "1px solid #333333", paddingLeft: 10 }}>
            <Text style={financialProposalStyles.contactLine}>{name}</Text>
            <Text style={financialProposalStyles.contactLine}>
              Designation: {designation}
            </Text>
            <Text style={financialProposalStyles.contactLine}>
              Contact No.: {phone}
            </Text>
            <Text style={financialProposalStyles.contactLine}>
              Email ID: {email}
            </Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
