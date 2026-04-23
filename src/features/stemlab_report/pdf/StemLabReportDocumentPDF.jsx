import { Document } from "@react-pdf/renderer";
import { CoverPage } from "./pages/CoverPage";
import { PrefacePage } from "./pages/PrefacePage";
import { ProjectPage } from "./pages/ProjectPage";
import { LabSetupComponentsPage } from "./pages/LabSetupComponentsPage";
import { ImplementationMilestonesPage } from "./pages/ImplementationMilestonesPage";
import { PhasePage } from "./pages/PhasePage";
import { OutcomesPage } from "./pages/OutcomesPage";
import { ImpactAnalysisPage } from "./pages/ImpactAnalysisPage";
import { StrengthsPage } from "./pages/StrengthsPage";
import { ConclusionPage } from "./pages/ConclusionPage";
import { BackPage } from "./pages/BackPage";

const STEMLabReportDocumentPDF = () => {
  return (
    <Document>
      <CoverPage />
      <PrefacePage />
      <ProjectPage />
      <LabSetupComponentsPage />
      <ImplementationMilestonesPage />
      <PhasePage />
      <OutcomesPage />
      <ImpactAnalysisPage />
      <StrengthsPage />
      <ConclusionPage />
      <BackPage />
    </Document>
  );
};

export default STEMLabReportDocumentPDF;
