import "@/shared/pdf/pdfSetup";
import { Image, Page } from "@react-pdf/renderer";
import PDFHeader from "./PDFHeader";
import PDFFooter from "./PDFFooter";
import { commonStyles } from "../styles/commonStyles";
// import STEMbotixLogo from "@/shared/assets/images/STEMbotix-Logo.png";

const PDFPageLayout = ({ children }) => (
  <Page size="A4" style={commonStyles.page}>
    <PDFHeader />
    {/* <Image src={STEMbotixLogo} style={commonStyles.watermark} /> */}
    {children}
    <PDFFooter />
  </Page>
);

export default PDFPageLayout;
