import React from "react";
import { View, Image } from "@react-pdf/renderer";
import { useReportStore } from "@/features/report/model/reportStore";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { photographStyles } from "../styles/photographStyles";

export const PhotographsPage = () => {
  const photographs = useReportStore((state) => state.photographs);
  const images = photographs
    ? photographs
        .map((img) => {
          if (img instanceof File) {
            return URL.createObjectURL(img);
          }

          if (typeof img === "string") {
            return img;
          }

          return null;
        })
        .filter(Boolean)
    : [];

  // const images = photographs
  //   ? photographs.map((img) => URL.createObjectURL(img))
  //   : [];

  return (
    <PDFPageLayout>
      <View id="photographs">
        <SectionTitle title={"Photographs"} />
        <View style={photographStyles.photoGrid}>
          {images.slice(0, 8).map((img, i) => (
            <Image key={i} src={img} style={photographStyles.photo} />
          ))}
        </View>
      </View>
    </PDFPageLayout>
  );
};
