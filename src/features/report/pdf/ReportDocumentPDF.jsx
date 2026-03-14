import { Document } from "@react-pdf/renderer";

import { CoverPage } from "./pages/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage";
import { SummaryPage } from "./pages/SummaryPage";
import { ProjectPage } from "./pages/ProjectPage";
import { BeneficiaryAndBaselinePage } from "./pages/BeneficiaryAndBaselinePage";
import { QuantitativeAndQualitativeImpactPage } from "./pages/QuantitativeAndQualitativeImpactPage";
import { LearningAndInstitutionalImpactPage } from "./pages/LearningAndInstitutionalImpactPage";
import { SocialAndInnovationImpactPage } from "./pages/SocialAndInnovationImpactPage";
import { CaseStudiesAndChallengesPage } from "./pages/CaseStudiesAndChallengesPage";
import { SustainabilityAndMonitoringPage } from "./pages/SustainabilityAndMonitoringPage";
import { PhotographsPage } from "./pages/PhotographsPage";
import { BackPage } from "./pages/BackPage";
import { ObjectiveAndEconomicImpactPage } from "./pages/ObjectiveAndEconomicImpactPage";

const ReportDocumentPDF = ({ data }) => {
  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <SummaryPage />
      <ProjectPage />
      <ObjectiveAndEconomicImpactPage data={data} />
      <BeneficiaryAndBaselinePage />
      <QuantitativeAndQualitativeImpactPage />
      <LearningAndInstitutionalImpactPage />
      <SocialAndInnovationImpactPage />
      <CaseStudiesAndChallengesPage />
      <SustainabilityAndMonitoringPage />
      <PhotographsPage />
      <BackPage />
    </Document>
  );
};

export default ReportDocumentPDF;
