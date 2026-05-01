import React from "react";
import { View, Text } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useEventPostsStore } from "@/features/event_posts/model/eventPostsStore";
import { eventPostsPageStyles as styles } from "../styles/eventPostsPageStyles";

export const EventPostsDetailsPage = () => {
  const {
    collegeName,
    address,
    eventDate,
    eventTime,
    facultyName,
    studentName,
  } = useEventPostsStore();

  return (
    <PDFPageLayout>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <SectionTitle title="Event Social Post Details" />
          <Text style={styles.subtitle}>Official Event Record</Text>
        </View>

        {/* Location & Time Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Location & Schedule</Text>
          <View style={styles.grid}>
            <Detail label="College Name" value={collegeName} fullWidth />
            <Detail label="Address" value={address} fullWidth />
            <Detail label="Event Date" value={eventDate} />
            <Detail label="Event Time" value={eventTime} />
          </View>
        </View>

        {/* Participants Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personnel In-Charge</Text>
          <View style={styles.grid}>
            <Detail label="Faculty Member" value={facultyName} />
            <Detail label="Student Representative" value={studentName} />
          </View>
        </View>

        {/* Footer info */}
        <Text style={styles.footer}>
          Generated on {new Date().toLocaleDateString()}
        </Text>
      </View>
    </PDFPageLayout>
  );
};

const Detail = ({ label, value, fullWidth }) => (
  <View style={[styles.detailItem, fullWidth && { width: "100%" }]}>
    <Text style={styles.label}>{label.toUpperCase()}</Text>
    <Text style={styles.value}>{value || "Not Provided"}</Text>
  </View>
);
