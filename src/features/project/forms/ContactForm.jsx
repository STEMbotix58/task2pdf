import React, { useState } from "react";
import { useProjectStore } from "@/features/project/model/projectStore";
import { uploadImagesToCloudinary } from "@/shared/services/uploadService";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";
import SelectInput from "@/shared/components/ui/SelectInput";

const listOfContact = [
  {
    name: "ISTEM COLLECTIVE FOUNDATION",
    address: "Shop No.E/310, Joyos Hub Town Mehsana",
    phone: "+91 96874 76525",
    email: "info@istemcf.org",
    website: "www.istemcf.org",
  },
  {
    name: "Tech Innovators Pvt Ltd",
    address: "Ahmedabad, Gujarat",
    phone: "+91 98765 43210",
    email: "contact@techinnovators.com",
    website: "www.techinnovators.com",
  },
  {
    name: "Future Robotics Lab",
    address: "Surat, Gujarat",
    phone: "+91 91234 56789",
    email: "hello@futurerobotics.com",
    website: "www.futurerobotics.com",
  },
];

const ContactForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const contact = useProjectStore((state) => state.contact);
  const qrCodeImg = useProjectStore((state) => state.qrCodeImg);
  const qrCodeVid = useProjectStore((state) => state.qrCodeVid);

  const setSection = useProjectStore((state) => state.setSection);
  const setQRImg = useProjectStore((state) => state.setQRImg);
  const setQRVid = useProjectStore((state) => state.setQRVid);

  const [formData, setFormData] = useState(contact);

  // select company → autofill
  const handleCompanySelect = (value) => {
    const selected = listOfContact.find((c) => c.name === value);

    if (selected) {
      setFormData(selected);
    }
  };

  const handleQRImageUpload = async (files) => {
    try {
      const urls = await uploadImagesToCloudinary(
        files,
        "qr-img-" + Date.now(),
      );
      setQRImg(urls);
    } catch (err) {
      console.error(err);
      alert("QR image upload failed");
    }
  };

  const handleQRVideoUpload = async (files) => {
    try {
      const urls = await uploadImagesToCloudinary(
        files,
        "qr-video-" + Date.now(),
      );
      setQRVid(urls);
    } catch (err) {
      console.error(err);
      alert("QR video upload failed");
    }
  };
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("contact", formData);
    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Contact Information"
        subtitle="Select or enter company contact details."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 🔽 COMPANY SELECT */}
          <div className="md:col-span-2">
            <SelectInput
              label="Select Company"
              id="company"
              name="company"
              value={formData.name || ""}
              onChange={(e) => handleCompanySelect(e.target.value)}
              options={listOfContact.map((item) => ({
                label: item.name,
                value: item.name,
              }))}
              placeholder="Choose a company"
            />
          </div>
          {/* CONTACT FIELDS */}
          {/* 
          <Input
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />

          <Input
            label="Phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />

          <Input
            label="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />

          <Input
            label="Website"
            id="website"
            name="website"
            value={formData.website}
            onChange={(e) => handleChange("website", e.target.value)}
          />

          <div className="md:col-span-2">
            <Input
              label="Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div> */}

          {/* QR IMAGE */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="QR Code Image"
              id="qrCodeImg"
              name="qrCodeImg"
              value={qrCodeImg || []}
              onChange={handleQRImageUpload}
              maxSelection={1}
            />
          </div>

          {/* QR VIDEO */}
          <div className="md:col-span-2">
            <ImageUploadField
              label="QR Code Video"
              id="qrCodeVid"
              name="qrCodeVid"
              value={qrCodeVid || []}
              onChange={handleQRVideoUpload}
              maxSelection={1}
            />
          </div>
        </div>

        <ButtonGroup
          prevStep={prevStep}
          nextStep={nextStep}
          generatePDF={generatePDF}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating}
        />
      </form>
    </FormContainer>
  );
};

export default ContactForm;
