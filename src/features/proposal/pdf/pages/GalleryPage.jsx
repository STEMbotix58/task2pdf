import React, { useEffect, useState } from "react";
import { View, Image } from "@react-pdf/renderer";
import SectionTitle from "@/shared/pdf/components/SectionTitle";
import PDFPageLayout from "@/shared/pdf/components/PDFPageLayout";
import { galleryPageStyles } from "../styles/galleryPageStyles";
import supabase from "@/shared/utils/supabase";

const folders = {
  "AI, Robotics & Innovation": "ai-robotics",
  Awards: "awards",
  "STEM Lab": "stem-lab",
  "Hackathon & WSRO Regional Championship": "hackathon",
  Inaugration: "inaugration",
  "Young Minds": "young-minds",
};

export const GalleryPage = () => {
  const [imagesByCategory, setImagesByCategory] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedData = {};

      for (const [title, folder] of Object.entries(folders)) {
        const { data, error } = await supabase.storage
          .from("proposal-bucket")
          .list(folder);

        if (error) {
          console.error("Error loading images:", error);
          continue;
        }

        const urls = data.map((file) => {
          const { data: publicUrl } = supabase.storage
            .from("proposal-bucket")
            .getPublicUrl(`${folder}/${file.name}`);

          return publicUrl.publicUrl;
        });

        loadedData[title] = urls;
      }

      setImagesByCategory(loadedData);
    };

    loadImages();
  }, []);

  return (
    <>
      {Object.entries(imagesByCategory).map(([title, images], index) => (
        <PDFPageLayout key={title}>
          <View id={title.toLowerCase().replace(/\s+/g, "-") + index}>
            <SectionTitle title={title} />

            <View style={galleryPageStyles.photoGrid}>
              {images.map((img, index) => (
                <Image key={index} src={img} style={galleryPageStyles.photo} />
              ))}
            </View>
          </View>
        </PDFPageLayout>
      ))}
    </>
  );
};
