import React from "react";
import { Text, View, Image, Page } from "@react-pdf/renderer";
import { photographsPageStyles } from "../styles/photographsPageStyles";
import { useProjectStore } from "@/features/project/model/projectStore";

export const PhotographsPage = () => {
  const photographs = useProjectStore((state) => state.photographs);
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

  return (
    <Page size="A4">
      {/* Header Section */}
      <View style={photographsPageStyles.headerContainer}>
        <View style={photographsPageStyles.cyanLine} />
        <Text style={photographsPageStyles.title}>Photographs</Text>
      </View>

      <View style={photographsPageStyles.photoGrid}>
        {images.slice(0, 8).map((img, i) => (
          <Image key={i} src={img} style={photographsPageStyles.photo} />
        ))}
      </View>
    </Page>
  );
};
