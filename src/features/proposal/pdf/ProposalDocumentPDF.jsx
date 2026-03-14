import { Document } from "@react-pdf/renderer";
import { FinancialProposalPage } from "./pages/FinancialProposalPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutStembotixPage } from "./pages/AboutStembotixPage";
import { ProposalPage } from "./pages/ProposalPage";
import { CoverPage } from "./pages/CoverPage";
import { ProjectProposalPage } from "./pages/ProjectProposalPage";
import { BackPage } from "./pages/BackPage";

const ProposalDocumentPDF = () => {
  return (
    <Document>
      <CoverPage />
      <TableOfContentsPage />
      <ProposalPage />
      <AboutStembotixPage />
      <ProjectProposalPage />
      <FinancialProposalPage />
      <GalleryPage />
      <BackPage />
    </Document>
  );
};

export default ProposalDocumentPDF;
