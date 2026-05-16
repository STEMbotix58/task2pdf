import { Document } from "@react-pdf/renderer";
import { CoverPage } from "./pages/CoverPage";
import { TableOfContentsPage } from "./pages/TableOfContentsPage";
import { IntroductionPage } from "./pages/IntroductionPage";
import { WhatsInTheKitPage } from "./pages/WhatsInTheKitPage";
import { HardwareSetupPage } from "./pages/HardwareSetupPage";
import { ProgrammingSetupPage } from "./pages/ProgrammingSetupPage";
import { SafetyInformationPage } from "./pages/SafetyInformationPage";
import { TroubleshootingFAQPage } from "./pages/TroubleshootingFAQPage";
import { AbbreviationPage } from "./pages/AbbreviationPage";
import { ConclusionPage } from "./pages/ConclusionPage";

const UserManualDocumentPDF = ({ data }) => {
  return (
    <Document>
      <CoverPage data={data} />
      <TableOfContentsPage data={data} />
      <IntroductionPage data={data} />
      <WhatsInTheKitPage data={data} />
      <HardwareSetupPage data={data} />
      <ProgrammingSetupPage data={data} />
      <SafetyInformationPage data={data} />
      <TroubleshootingFAQPage data={data} />
      <ConclusionPage data={data} />
      <AbbreviationPage data={data} />
    </Document>
  );
};

export default UserManualDocumentPDF;
