import { Document } from "@react-pdf/renderer";
import { CoverPage } from "./pages/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage";
import { SummaryPage } from "./pages/SummaryPage";
import { PrefacePage } from "./pages/PrefacePage";
import { PhotographsPage } from "./pages/PhotographsPage";
import { ConclusionPage } from "./pages/ConclusionPage";
import { ContactPage } from "./pages/ContactPage";
import { ProjectPage } from "./pages/ProjectPage";

const ProjectDocumentPDF = ({ data }) => {
  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <SummaryPage />
      <PrefacePage />
      <ProjectPage />
      <PhotographsPage />
      <ConclusionPage />
      <ContactPage />
      {/* <BackPage /> */}
    </Document>
  );
};

export default ProjectDocumentPDF;
