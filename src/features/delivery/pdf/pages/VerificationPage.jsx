import { Text, View } from "@react-pdf/renderer";
import { verificationStyles } from "../styles/verificationStyles";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";
import { formattedDate } from "@/shared/utils/formatDate";

export const VerificationPage = () => {
  const {
    schoolAuthorityName,
    schoolAuthorityDesignation,
    stembotixRepresentativeName,
    yuvaCoordinatorName,
    verificationDate,
  } = useDeliveryStore((state) => state.verification);

  const formattedVerificationDate = formattedDate(
    verificationDate ? new Date(verificationDate) : null,
  );

  return (
    <PDFPageLayout>
      <Text style={verificationStyles.title}>Verification & Authorization</Text>

      <View style={verificationStyles.declarationBox}>
        <Text style={verificationStyles.declarationText}>
          The undersigned hereby confirms that the{" "}
          <Text style={verificationStyles.bold}>
            items listed in Annexure–I have been physically verified
          </Text>
          , found in accordance with the approved specifications and quantities,
          and are{" "}
          <Text style={verificationStyles.bold}>acceptable to the school</Text>.
          Installation has been inspected and no discrepancies were observed at
          the time of verification.
        </Text>
      </View>

      <View style={verificationStyles.table}>
        <View style={[verificationStyles.row, verificationStyles.headerRow]}>
          <Text
            style={[
              verificationStyles.cell,
              verificationStyles.colRole,
              verificationStyles.headerText,
            ]}
          >
            Role
          </Text>
          <Text
            style={[
              verificationStyles.cell,
              verificationStyles.colName,
              verificationStyles.headerText,
            ]}
          >
            Name & Designation
          </Text>
          <Text
            style={[
              verificationStyles.cell,
              verificationStyles.colSign,
              verificationStyles.headerText,
            ]}
          >
            Signature
          </Text>
        </View>

        <View style={[verificationStyles.row, verificationStyles.altRow]}>
          <Text style={[verificationStyles.cell, verificationStyles.colRole]}>
            School Authority (Verified By)
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colName]}>
            {schoolAuthorityName}
            {schoolAuthorityDesignation
              ? `, ${schoolAuthorityDesignation}`
              : ""}
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colSign]} />
        </View>

        <View style={verificationStyles.row}>
          <Text style={[verificationStyles.cell, verificationStyles.colRole]}>
            STEMbotix Representative (Delivered By)
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colName]}>
            {stembotixRepresentativeName}
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colSign]} />
        </View>

        <View style={[verificationStyles.row, verificationStyles.altRow]}>
          <Text style={[verificationStyles.cell, verificationStyles.colRole]}>
            Yuva Unstoppable Coordinator
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colName]}>
            {yuvaCoordinatorName}
          </Text>
          <Text style={[verificationStyles.cell, verificationStyles.colSign]} />
        </View>
      </View>

      <View style={verificationStyles.footerRow}>
        <Text style={verificationStyles.dateText}>
          Date: {formattedVerificationDate || "—"}
        </Text>
        <Text style={verificationStyles.stampText}>
          School Seal & Signature
        </Text>
      </View>
    </PDFPageLayout>
  );
};
