import React, { useEffect, useState } from "react";
import { View, Image } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { useEventPostsStore } from "@/features/event_posts/model/eventPostsStore";
import { photosPageStyles } from "../styles/photosPageStyles";

export const PhotosPage = () => {
  const photos = useEventPostsStore((state) => state.photos);
  const images = photos
    ? photos
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
    <>
      <PDFPageLayout>
        <View style={photosPageStyles.container}>
          <SectionTitle title="Photographs" />

          <View style={photosPageStyles.photoGrid}>
            {images.map((img, index) => (
              <Image key={index} src={img} style={photosPageStyles.photo} />
            ))}
          </View>
        </View>
      </PDFPageLayout>
    </>
  );
};
