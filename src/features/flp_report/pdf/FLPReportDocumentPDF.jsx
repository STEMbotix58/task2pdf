import { Document } from "@react-pdf/renderer";
import { CoverPage } from "./pages/CoverPage";
import { BackPage } from "./pages/BackPage";
import { SummaryPage } from "./pages/SummaryPage";
import { ObjectivePage } from "./pages/ObjectivePage";
import { ImplementationDelivery } from "./pages/ImplementationDelivery";
import { ConclusionPage } from "./pages/ConclusionPage";
import { KeyOutcomesPage } from "./pages/KeyOutcomesPage";
import { OutcomesImpactPage } from "./pages/OutcomesImpactPage";
import { ProjectStrengthsPage } from "./pages/ProjectStrengthsPage";
import { ChallengesMitigationPage } from "./pages/ChallengesMitigationPage";
import { ReachCoveragePage } from "./pages/ReachCoveragePage";
import { FinancialOverviewPage } from "./pages/FinancialOverviewPage";
import { StudentCertificationPage } from "./pages/StudentCertificationPage";
import { ImpactAnalysisPage } from "./pages/ImpactAnalysisPage";

const FLPReportDocumentPDF = ({ data }) => {
  return (
    <Document>
      <CoverPage />
      <SummaryPage />
      <ObjectivePage />
      <ImplementationDelivery />
      <ReachCoveragePage />
      <FinancialOverviewPage />
      <StudentCertificationPage />
      <OutcomesImpactPage />
      <ImpactAnalysisPage />
      <ProjectStrengthsPage />
      <ChallengesMitigationPage />
      <KeyOutcomesPage />
      <ConclusionPage />
      <BackPage />
    </Document>
  );
};

export default FLPReportDocumentPDF;
