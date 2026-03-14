import { Text, View } from "@react-pdf/renderer";
import { useReportStore } from "@/features/report/model/reportStore";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { projectStyles } from "../styles/projectStyles";

export const ProjectPage = () => {
  const {
    projectTitle,
    implementingOrganization,
    partnerSponsor,
    projectDuration,
    location,
    targetBeneficiaries,
    problemStatement,
    startDate,
    endDate,
  } = useReportStore((state) => state.projectOverview || {});

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("en-GB") : "—";

  return (
    <PDFPageLayout>
      <View id="project-overview">
        <SectionTitle title="Project Overview" />
        <View style={projectStyles.container}>
          {/* Main Title Section */}
          <View style={projectStyles.titleCard}>
            <Text style={projectStyles.label}>PROJECT TITLE</Text>
            <Text style={projectStyles.mainTitle}>{projectTitle}</Text>
          </View>
          {/* Details Grid */}
          <View style={projectStyles.infoGrid}>
            <View style={projectStyles.gridItem}>
              <Text style={projectStyles.smallLabel}>
                IMPLEMENTING ORGANIZATION
              </Text>
              <Text style={projectStyles.valueText}>
                {implementingOrganization}
              </Text>
            </View>
            <View style={projectStyles.gridItem}>
              <Text style={projectStyles.smallLabel}>PARTNER / SPONSOR</Text>
              <Text style={projectStyles.valueText}>{partnerSponsor}</Text>
            </View>
          </View>
          <View style={projectStyles.infoGrid}>
            <View style={projectStyles.gridItem}>
              <Text style={projectStyles.smallLabel}>LOCATION</Text>
              <Text style={projectStyles.valueText}>{location}</Text>
            </View>
            <View style={projectStyles.gridItem}>
              <Text style={projectStyles.smallLabel}>PROJECT DURATION</Text>
              <Text style={projectStyles.valueText}>
                {projectDuration} Months
              </Text>
              <Text style={projectStyles.dateRange}>
                {formatDate(startDate)} to {formatDate(endDate)}
              </Text>
            </View>
          </View>
          {/* Target Beneficiaries */}
          <View style={projectStyles.fullWidthCard}>
            <Text style={projectStyles.smallLabel}>TARGET BENEFICIARIES</Text>
            <Text style={projectStyles.valueText}>
              {targetBeneficiaries ||
                "Students aged 3-18 and local teaching staff."}
            </Text>
          </View>
          {/* Problem Statement */}
          <View style={[projectStyles.fullWidthCard, projectStyles.problemBox]}>
            <Text style={[projectStyles.smallLabel, { color: "#b91c1c" }]}>
              PROBLEM STATEMENT
            </Text>
            <Text style={projectStyles.problemText}>
              {problemStatement ||
                "Lack of access to modern STEM facilities and hands-on technological learning environments in rural educational centers."}
            </Text>
          </View>
        </View>
      </View>
    </PDFPageLayout>
  );
};
