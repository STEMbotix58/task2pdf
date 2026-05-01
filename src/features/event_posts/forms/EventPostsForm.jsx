import React, { useState } from "react";
import { useEventPostsStore } from "@/features/event_posts/model/eventPostsStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const EventPostsForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const store = useEventPostsStore();
  const setSection = useEventPostsStore((state) => state.setSection);

  // initialize local state from store
  const [formData, setFormData] = useState({
    collegeName: store.collegeName || "",
    address: store.address || "",
    eventDate: store.eventDate || "",
    eventTime: store.eventTime || "",
    facultyName: store.facultyName || "",
    studentName: store.studentName || "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // push each field into store (since store is flat)
    setSection("collegeName", formData.collegeName);
    setSection("address", formData.address);
    setSection("eventDate", formData.eventDate);
    setSection("eventTime", formData.eventTime);
    setSection("facultyName", formData.facultyName);
    setSection("studentName", formData.studentName);

    nextStep();
  };

  return (
    <FormContainer>
      <FormHeader
        title="Event Social Post"
        subtitle="Provide general project details."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* College Name */}
          <div className="md:col-span-2">
            <Input
              label="College Name"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              required
              onChange={(e) => handleChange("collegeName", e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <Input
              label="Address"
              id="address"
              name="address"
              value={formData.address}
              required
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <Input
            type="date"
            label="Date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            required
            onChange={(e) => handleChange("eventDate", e.target.value)}
          />

          <Input
            type="time"
            label="Time"
            id="eventTime"
            name="eventTime"
            value={formData.eventTime}
            required
            onChange={(e) => handleChange("eventTime", e.target.value)}
          />

          {/* Faculty & Student */}
          <Input
            label="Faculty Name"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            required
            onChange={(e) => handleChange("facultyName", e.target.value)}
          />

          <Input
            label="Student Name"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            required
            onChange={(e) => handleChange("studentName", e.target.value)}
          />

          {/* Buttons */}
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

export default EventPostsForm;
