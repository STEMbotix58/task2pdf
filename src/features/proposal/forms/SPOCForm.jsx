import React, { useState } from "react";
import { useProposalStore } from "@/features/proposal/model/proposalStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import SelectInput from "@/shared/components/ui/SelectInput";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";
import ImageUploadField from "@/shared/components/ui/ImageUploadField";

import supabase from "@/shared/utils/supabase";

const SPOCForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const initialSpoc = useProposalStore((state) => state.spoc);
  const setSection = useProposalStore((state) => state.setSection);

  const [formData, setFormData] = useState(() => ({ ...initialSpoc }));
  const [isNewUser, setIsNewUser] = useState(false);

  const { name, designation, email, phone, signatureImg } = formData;

  // Generate Supabase public URL
  const getSignatureUrl = (personName) => {
    const fileName = personName.toLowerCase().split(" ")[0];

    const { data } = supabase.storage
      .from("proposal-bucket")
      .getPublicUrl(`signatures/${fileName}-signature.png`);

    return data?.publicUrl || "";
  };

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

  const spocOptions = listOfPersons.map((person) => ({
    value: person.email,
    label: `${person.name} - ${person.designation}`,
  }));

  const allOptions = [
    ...spocOptions,
    { value: "__new__", label: "Other / New User" },
  ];

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
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

    const selectedPerson = listOfPersons.find(
      (person) => person.email === value,
    );

    if (selectedPerson) {
      setIsNewUser(false);

      const signatureUrl = getSignatureUrl(selectedPerson.name);

      const updated = {
        ...selectedPerson,
        signatureImg: signatureUrl,
      };

      setFormData(updated);
      setSection("spoc", updated);
    }
  };

  const selectedDropdownValue = isNewUser
    ? "__new__"
    : (listOfPersons.find((p) => p.name === name)?.email ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("spoc", formData);
    nextStep();
  };

  const handleGeneratePDF = () => {
    setSection("spoc", formData);
    generatePDF();
  };

  return (
    <FormContainer>
      <FormHeader
        title="SPOC"
        subtitle="Provide Single Point of Contact details."
      />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <SelectInput
              label="Select SPOC"
              id="spocSelect"
              value={selectedDropdownValue}
              onChange={handleSelectChange}
              options={allOptions}
              required
            />
          </div>

          {/* EXISTING USER */}
          {!isNewUser && name && (
            <>
              <Input label="Name" value={name} readOnly disabled />

              <Input
                label="Designation"
                value={designation}
                readOnly
                disabled
              />

              <Input
                label="Email"
                type="email"
                value={email}
                readOnly
                disabled
              />

              <Input label="Phone" type="tel" value={phone} readOnly disabled />

              {signatureImg && (
                <div className="md:col-span-2">
                  <label className="labelClass">Signature Image</label>

                  <div className="border border-gray-300 rounded-xl p-4">
                    <img
                      src={signatureImg}
                      alt="Signature"
                      className="h-24 object-contain"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {/* NEW USER */}
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
                label="Email"
                type="email"
                value={email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />

              <Input
                label="Phone"
                type="tel"
                value={phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />

              <div className="md:col-span-2">
                <ImageUploadField
                  label="Signature Image"
                  id="signatureImg"
                  value={signatureImg}
                  onChange={(url) => handleChange("signatureImg", url)}
                />
              </div>
            </>
          )}
        </div>

        <div className="mt-10">
          <ButtonGroup
            prevStep={prevStep}
            nextStep={nextStep}
            generatePDF={handleGeneratePDF}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            isGenerating={isGenerating}
          />
        </div>
      </form>
    </FormContainer>
  );
};

export default SPOCForm;
