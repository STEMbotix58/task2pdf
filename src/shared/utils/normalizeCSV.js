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

export function normalizeProjectCSV(row) {
  return {
    basicInfo: parseJSON(row.basic_info),
    summary: parseJSON(row.summary),
    preface: parseArray(row.preface),
    project: parseJSON(row.project),
    photographs: parseArray(row.photographs),
    conclusion: parseJSON(row.conclusion),
    contact: parseJSON(row.contact),
    qrCodeImg: parseArray(row.qr_code_img),
    qrCodeVid: parseArray(row.qr_code_vid),
  };
}

export function normalizeSTEMLabCSV(row) {
  return {
    basicInfo: parseJSON(row.basic_info),
    preface: parseArray(row.preface),
    phase: parseArray(row.phase),
    outcomes: parseJSON(row.outcomes),
    project: parseJSON(row.project),
    impactAnalysis: parseJSON(row.impact_analysis),
    labSetupAndComponents: parseJSON(row.lab_setup_and_components),
    implementationAndMilestones: parseJSON(row.implementation_and_milestones),
    strengths: parseJSON(row.strengths),
    challengesAndMitigation: parseJSON(row.challenges_and_mitigation),
    conclusion: row.conclusion,
  };
}

export function normalizeFLPReportCSV(row) {
  return {
    basicInfo: parseJSON(row.basic_info),
    summary: parseJSON(row.summary),
    objective: parseJSON(row.objective),
    implementationAndDelivery: parseJSON(row.implementation_and_delivery),
    reachAndCoverage: parseJSON(row.reach_and_coverage),
    financialOverview: parseJSON(row.financial_overview),
    studentCertification: parseJSON(row.student_certification),
    outcomesAndImpact: parseJSON(row.outcomes_and_impact),
    impactAnalysis: parseJSON(row.impact_analysis),
    projectStrengths: parseJSON(row.project_strengths),
    challengesAndMigration: parseJSON(row.challenges_and_migration),
    keyOutcomes: parseJSON(row.key_outcomes),
    conclusion: parseJSON(row.conclusion),
  };
}

export function normalizeEventPostsCSV(row) {
  return {
    collegeName: row.college_name || "",
    address: row.address || "",
    eventDate: row.event_date || "",
    eventTime: row.event_time || "",
    studentName: row.student_name || "",
    facultyName: row.faculty_name || "",
    photos: parseArray(row.photos),
  };
}

export function normalizeUserManualCSV(row) {
  return {
    coverPage: parseJSON(row.cover_page),
    introduction: parseJSON(row.introduction),
    whatsInTheKit: parseArray(row.whats_in_the_kit),
    hardwareSetup: parseArray(row.hardware_setup),
    programmingSetup: parseArray(row.programming_setup),
    safetyInformation: parseJSON(row.safety_information),
    troubleshootingFAQ: parseArray(row.troubleshooting_faq),
    abbreviations: parseArray(row.abbreviations),
    conclusion: parseJSON(row.conclusion),
  };
}
