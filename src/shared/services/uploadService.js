const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadImagesToCloudinary = async (files, folderName) => {
  const uploadPromises = Array.from(files).map(async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", `stembotix/reports/${folderName}`);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw new Error(data.error?.message || "Upload failed");
    }

    return data.secure_url;
  });

  return Promise.all(uploadPromises);
};

export const uploadFileToCloudinary = async ({
  file,
  folderName,
  resourceType = "raw",
  fileName,
}) => {
  const formData = new FormData();
  formData.append("file", file, fileName);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", `stembotix/reports/${folderName}`);
  formData.append("resource_type", resourceType);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }

  return data.secure_url;
};
