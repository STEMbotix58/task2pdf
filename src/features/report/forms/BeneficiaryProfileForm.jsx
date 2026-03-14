import React, { useState } from "react";
import { useReportStore } from "@/features/report/model/reportStore";

import FormContainer from "@/shared/components/layout/FormContainer";
import FormHeader from "@/shared/components/layout/FormHeader";

import Input from "@/shared/components/ui/Input";
import ButtonGroup from "@/shared/components/ui/ButtonGroup";

const clampGenderValue = (field, value, current) => {
  const numValue = Number(value) || 0;

  const female = Number(current?.female) || 0;
  const male = Number(current?.male) || 0;
  const other = Number(current?.other) || 0;

  let used = 0;

  if (field === "female") used = male + other;
  if (field === "male") used = female + other;
  if (field === "other") used = female + male;

  const maxAllowed = 100 - used;
  const safeValue = Math.max(0, Math.min(numValue, maxAllowed));

  return {
    ...current,
    [field]: safeValue,
  };
};

const BeneficiaryProfileForm = ({
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  generatePDF,
  isGenerating,
}) => {
  const beneficiaryProfile = useReportStore(
    (state) => state.beneficiaryProfile,
  );

  const setSection = useReportStore((state) => state.setSection);

  const [formData, setFormData] = useState(() => ({
    ...beneficiaryProfile,
    genderDistribution: {
      ...beneficiaryProfile.genderDistribution,
    },
  }));

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSection("beneficiaryProfile", formData);
    nextStep();
  };

  const [from = "", to = ""] = formData.ageGroup?.split("-") || [];

  return (
    <FormContainer>
      <FormHeader
        title="Beneficiary Profile"
        subtitle="Define demographic and background details of beneficiaries."
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Input
              label="Total Beneficiaries (Direct & Indirect)"
              type="number"
              value={formData.totalBeneficiaries}
              min={1}
              required
              onChange={(e) =>
                handleChange("totalBeneficiaries", Number(e.target.value))
              }
            />
          </div>

          {/* Age Group */}
          <div>
            <label className="block text-sm font-medium mb-2">Age Group</label>
            <div className="flex gap-4">
              <Input
                type="number"
                placeholder="From"
                value={from}
                required
                min={0}
                max={to || 100}
                onChange={(e) =>
                  handleChange(
                    "ageGroup",
                    `${e.target.value || ""}-${to || ""}`,
                  )
                }
              />
              <Input
                type="number"
                placeholder="To"
                value={to}
                required
                min={(parseInt(from) || 0) + 1}
                max={100}
                onChange={(e) =>
                  handleChange(
                    "ageGroup",
                    `${from || ""}-${e.target.value || ""}`,
                  )
                }
              />
            </div>
          </div>

          {/* Gender Distribution */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Gender Distribution (Total = 100)
            </label>
            <div className="grid grid-cols-3 gap-3">
              <Input
                type="number"
                placeholder="Female"
                value={formData.genderDistribution?.female || ""}
                min={0}
                max={100}
                required
                onChange={(e) =>
                  handleChange(
                    "genderDistribution",
                    clampGenderValue(
                      "female",
                      e.target.value,
                      formData.genderDistribution,
                    ),
                  )
                }
              />
              <Input
                type="number"
                placeholder="Male"
                value={formData.genderDistribution?.male || ""}
                min={0}
                max={100}
                required
                onChange={(e) =>
                  handleChange(
                    "genderDistribution",
                    clampGenderValue(
                      "male",
                      e.target.value,
                      formData.genderDistribution,
                    ),
                  )
                }
              />
              <Input
                type="number"
                placeholder="Other"
                value={formData.genderDistribution?.other || ""}
                min={0}
                max={100}
                required
                onChange={(e) =>
                  handleChange(
                    "genderDistribution",
                    clampGenderValue(
                      "other",
                      e.target.value,
                      formData.genderDistribution,
                    ),
                  )
                }
              />
            </div>
          </div>

          <Input
            label="Educational Background"
            value={formData.educationBackground}
            maxLength={50}
            required
            onChange={(e) =>
              handleChange("educationBackground", e.target.value)
            }
          />

          <Input
            label="Socio-economic Background"
            value={formData.socioEconomicBackground}
            maxLength={50}
            required
            onChange={(e) =>
              handleChange("socioEconomicBackground", e.target.value)
            }
          />

          <div className="md:col-span-2">
            <Input
              label="Geographic Coverage"
              value={formData.geographicCoverage}
              maxLength={100}
              required
              onChange={(e) =>
                handleChange("geographicCoverage", e.target.value)
              }
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

export default BeneficiaryProfileForm;
