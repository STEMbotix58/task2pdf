const parseJSON = (value) => {
  if (!value) return {};

  if (typeof value === "object") return value;

  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (err) {
      console.error("Invalid JSON:", err);
      return {};
    }
  }

  return {};
};

const parseArray = (value) => {
  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  return [];
};

export function normalizeDeliveryCSV(row) {
  const parsedSerialNumbers = parseJSON(row.serial_numbers);
  const parsedItems = parseJSON(row.item_checklist);

  const serial_numbers = {};
  Object.keys(parsedSerialNumbers).forEach((key) => {
    const serialList = parsedSerialNumbers[key];
    serial_numbers[key] = serialList;
  });

  return {
    deliveryBasicInfo: parseJSON(row.basic_info),
    schoolDelivery: parseJSON(row.school_delivery),
    verification: parseJSON(row.verification),
    serialNumbers: serial_numbers,
    items: parseArray(parsedItems),
  };
}

export function normalizeProposalCSV(row) {
  const parsedFinancialProposal = parseJSON(row.financial_proposal);

  return {
    proposal: parseJSON(row.proposal),
    projectProposal: parseJSON(row.project_proposal),
    spoc: parseJSON(row.spoc),
    financialProposal: parseArray(parsedFinancialProposal),
  };
}

export function normalizeReportCSV(row) {
  console.log(parseArray(row.photographs));

  return {
    projectOverview: parseJSON(row.project_overview),
    objectives: parseJSON(row.objectives),
    beneficiaryProfile: parseJSON(row.beneficiary_profile),
    baselineEndline: parseJSON(row.baseline_endline),
    quantitativeImpact: parseJSON(row.quantitative_impact),
    qualitativeImpact: parseJSON(row.qualitative_impact),
    learningOutcomes: parseJSON(row.learning_outcomes),
    institutionalImpact: parseJSON(row.institutional_impact),
    socialImpact: parseJSON(row.social_impact),
    economicImpact: parseJSON(row.economic_impact),
    innovationImpact: parseJSON(row.innovation_impact),
    caseStudy: parseJSON(row.case_study),
    challengesAndLearnings: parseJSON(row.challenges_and_learnings),
    sustainability: parseJSON(row.sustainability),
    monitoringEvaluation: parseJSON(row.monitoring_evaluation),
    photographs: parseArray(row.photographs),
  };
}
