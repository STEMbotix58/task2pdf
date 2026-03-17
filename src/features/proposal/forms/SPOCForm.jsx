import React, { useState } from "react";
import { useProposalStore } from "@/features/proposal/model/proposalStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import SelectInput from "@/shared/components/ui/SelectInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

import supabase from "@/shared/utils/supabase";

const listOfPersons = [
  {
    name: "Sagar Sojitra",
    designation: "Chief Executive Officer (CEO)",
    email: "sagar@stembotix.com",
    phone: "9876543210",
  },
  {
    name: "Isha Bhagat",
    designation: "Chief Operational Officer (COO)",
    email: "isha@stembotix.com",
    phone: "9726519892",
  },
  {
    name: "Dolly Devi",
    designation: "Business Development Manager (BDM)",
    email: "dolly@stembotix.com",
    phone: "8976543210",
  },
];

const SPOCForm = ({
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const initialSpoc = useProposalStore((state) => state.spoc);
  const setSection = useProposalStore((state) => state.setSection);

  const [formData, setFormData] = useState({ ...initialSpoc });
  const [isNewUser, setIsNewUser] = useState(false);

  const { name, designation, email, phone, signatureImg } = formData;

  // Upload signature
  const uploadSignature = async (name, file) => {
    if (!file) return null;

    const fileName = `${name.toLowerCase().replace(/\s+/g, "-")}-signature.png`;

    const { error } = await supabase.storage
      .from("proposal-bucket")
      .upload(`signatures/${fileName}`, file, { upsert: true });

    if (error) throw error;

    const { data } = supabase.storage
      .from("proposal-bucket")
      .getPublicUrl(`signatures/${fileName}`);

    return data?.publicUrl;
  };

  // Existing user signature
  const getSignatureUrl = (personName) => {
    const pName = personName.toLowerCase().split(" ")[0];

    const { data } = supabase.storage
      .from("proposal-bucket")
      .getPublicUrl(`signatures/${pName}-signature.png`);

    return data?.publicUrl || "";
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value === "__new__") {
      setIsNewUser(true);
      const cleared = {
        name: "",
        designation: "",
        email: "",
        phone: "",
        signatureImg: "",
      };
      setFormData(cleared);
      setSection("spoc", cleared);
      return;
    }

    const selectedPerson = listOfPersons.find((p) => p.email === value);

    if (selectedPerson) {
      setIsNewUser(false);

      const updated = {
        ...selectedPerson,
        signatureImg: getSignatureUrl(selectedPerson.name),
      };

      setFormData(updated);
      setSection("spoc", updated);
    }
  };

  const handleGeneratePDF = async () => {
    let finalData = { ...formData };

    const file = Array.isArray(signatureImg) ? signatureImg[0] : signatureImg;

    try {
      if (isNewUser && file instanceof File) {
        finalData.signatureImg = await uploadSignature(name, file);
      }

      // Just update store (Stepper now handles fresh state correctly)
      setSection("spoc", finalData);

      await generatePDF();
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF");
    }
  };

  const selectedDropdownValue = isNewUser
    ? "__new__"
    : (listOfPersons.find((p) => p.name === name)?.email ?? "");

  return (
    <FormContainer>
      <FormHeader
        title="SPOC"
        subtitle="Provide Single Point of Contact details."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <SelectInput
            label="Select SPOC"
            value={selectedDropdownValue}
            onChange={handleSelectChange}
            options={[
              ...listOfPersons.map((p) => ({
                value: p.email,
                label: `${p.name} - ${p.designation}`,
              })),
              { value: "__new__", label: "Other / New User" },
            ]}
            required
          />
        </div>

        {!isNewUser && name && (
          <>
            <Input label="Name" value={name} readOnly disabled />
            <Input label="Designation" value={designation} readOnly disabled />
            <Input label="Email" value={email} readOnly disabled />
            <Input label="Phone" value={phone} readOnly disabled />

            {signatureImg && (
              <div className="md:col-span-2">
                <img
                  src={signatureImg}
                  alt="Signature"
                  className="h-24 object-contain"
                />
              </div>
            )}
          </>
        )}

        {isNewUser && (
          <>
            <Input
              label="Name"
              value={name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
            />
            <Input
              label="Designation"
              value={designation}
              onChange={(e) => handleChange("designation", e.target.value)}
              required
            />
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
            <Input
              type="tel"
              label="Phone"
              value={phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              required
            />

            <div className="md:col-span-2">
              <ImageUploadField
                label="Signature Image"
                value={signatureImg}
                onChange={(file) => handleChange("signatureImg", file)}
              />
            </div>
          </>
        )}
      </div>

      <div className="mt-10">
        <ButtonGroup
          prevStep={prevStep}
          generatePDF={handleGeneratePDF}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          isGenerating={isGenerating}
        />
      </div>
    </FormContainer>
  );
};

export default SPOCForm;
