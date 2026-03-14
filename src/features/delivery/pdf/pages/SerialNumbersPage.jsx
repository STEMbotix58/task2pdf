import { Text, View } from "@react-pdf/renderer";
import { serialNumberStyles } from "../styles/serialNumberStyles";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useDeliveryStore } from "@/features/delivery/model/deliveryStore";
import { formattedDate } from "@/shared/utils/formatDate";

export const SerialNumbersPage = () => {
  const { serialNumbers, verification } = useDeliveryStore();

  const printers =
    serialNumbers?.printers?.filter((sn) => sn && sn.trim() !== "") || [];

  const laptops =
    serialNumbers?.laptops?.filter((sn) => sn && sn.trim() !== "") || [];

  const verificationDate = verification?.verificationDate;
  const formattedVerificationDate = verificationDate
    ? formattedDate(new Date(verificationDate))
    : null;

  const renderRows = (data) => {
    if (!data.length) {
      return (
        <View style={serialNumberStyles.row}>
          <Text style={serialNumberStyles.emptyText}>
            No serial numbers provided
          </Text>
        </View>
      );
    }

    return data.map((sn, index) => (
      <View key={index} style={serialNumberStyles.row}>
        <Text style={[serialNumberStyles.cell, serialNumberStyles.colSr]}>
          {index + 1}
        </Text>
        <Text style={[serialNumberStyles.cell, serialNumberStyles.colSerial]}>
          {sn}
        </Text>
      </View>
    ));
  };

  return (
    <PDFPageLayout>
      {/* Title */}
      <Text style={serialNumberStyles.title}>
        Annexure–II: Hardware Identification & Serial Number Log
      </Text>

      {/* 3D Printers */}
      <Text style={serialNumberStyles.sectionTitle}>1. 3D Printers</Text>
      <View style={serialNumberStyles.table}>
        <View style={[serialNumberStyles.row, serialNumberStyles.headerRow]}>
          <Text
            style={[
              serialNumberStyles.cell,
              serialNumberStyles.colSr,
              serialNumberStyles.headerText,
            ]}
          >
            Sr. No.
          </Text>
          <Text
            style={[
              serialNumberStyles.cell,
              serialNumberStyles.colSerial,
              serialNumberStyles.headerText,
            ]}
          >
            Serial Number of 3D Printer
          </Text>
        </View>
        {renderRows(printers)}
      </View>

      {/* Laptops */}
      <Text style={serialNumberStyles.sectionTitle}>2. Laptops</Text>
      <View style={serialNumberStyles.table}>
        <View style={[serialNumberStyles.row, serialNumberStyles.headerRow]}>
          <Text
            style={[
              serialNumberStyles.cell,
              serialNumberStyles.colSr,
              serialNumberStyles.headerText,
            ]}
          >
            Sr. No.
          </Text>
          <Text
            style={[
              serialNumberStyles.cell,
              serialNumberStyles.colSerial,
              serialNumberStyles.headerText,
            ]}
          >
            Serial Number of Laptops
          </Text>
        </View>
        {renderRows(laptops)}
      </View>

      {/* Footer */}
      <View style={serialNumberStyles.footerRow}>
        <Text style={serialNumberStyles.dateText}>
          Date: {formattedVerificationDate || "—"}
        </Text>
        <Text style={serialNumberStyles.stampText}>
          Sign and Stamp of School
        </Text>
      </View>
    </PDFPageLayout>
  );
};
