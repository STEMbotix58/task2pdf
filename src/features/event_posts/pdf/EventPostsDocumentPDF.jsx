import { Document } from "@react-pdf/renderer";
import { EventPostsDetailsPage } from "./pages/EventPostsDetailsPage";
import { PhotosPage } from "./pages/PhotosPage";

const EventPostsDocumentPDF = () => {
  return (
    <Document>
      <EventPostsDetailsPage />
      <PhotosPage />
    </Document>
  );
};

export default EventPostsDocumentPDF;
