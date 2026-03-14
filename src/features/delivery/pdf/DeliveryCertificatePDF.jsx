import { Document } from "@react-pdf/renderer";
import { CertificateCoverPage } from "./pages/CertificateCoverPage";
import { AnnexureItemsPage } from "./pages/AnnexureItemsPage";
import { VerificationPage } from "./pages/VerificationPage";
import { SerialNumbersPage } from "./pages/SerialNumbersPage";

const DeliveryCertificatePDF = ({ data, items }) => {
  return (
    <Document>
      <CertificateCoverPage data={data} />
      <AnnexureItemsPage items={items} />
      <VerificationPage data={data} />
      <SerialNumbersPage data={data} />
    </Document>
  );
};

export default DeliveryCertificatePDF;
