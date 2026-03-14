import { create } from "zustand";

export const useReportStore = create((set) => ({
  projectOverview: {
    projectTitle: "",
    implementingOrganization: "",
    partnerSponsor: "",
    projectDuration: "",
    location: "",
    targetBeneficiaries: "",
    problemStatement: "",
    startDate: null,
    endDate: null,
  },

  objectives: {
    primaryObjectives: "",
    secondaryObjectives: "",
    shortTermOutcomes: "",
    longTermOutcomes: "",
    sdgAlignment: "",
  },

  beneficiaryProfile: {
    totalBeneficiaries: 0,
    ageGroup: "",
    genderDistribution: {
      female: 0,
      male: 0,
      other: 0,
    },
    educationBackground: "",
    socioEconomicBackground: "",
    geographicCoverage: "",
  },

  baselineEndline: [
    {
      parameter: "",
      baselineValue: 0,
      endlineValue: 0,
      percentChange: 0,
    },
  ],

  quantitativeImpact: {
    participantsTrained: 0,
    attendanceRate: 0,
    completionRate: 0,
    certificationsAchieved: 0,
    assessmentImprovement: 0,
  },

  qualitativeImpact: {
    confidenceImprovement: "",
    leadershipSkills: "",
    teamwork: "",
    criticalThinking: "",
    testimonials: "",
  },

  learningOutcomes: {
    technicalSkillsGained: "",
    softSkillsDeveloped: "",
    toolsPlatformsUsed: "",
    handsOnLearningHours: 0,
  },

  institutionalImpact: {
    teacherCapacityBuilding: "",
    infrastructureUse: "",
    curriculumEnhancement: "",
    sustainabilityMeasures: "",
  },

  socialImpact: {
    inclusionAndEquity: "",
    communityEngagement: "",
    awarenessPrograms: "",
    digitalDivideReduction: "",
  },

  economicImpact: {
    employabilityEnhancement: "",
    incomeOpportunities: "",
    costPerBeneficiary: "",
    roi: "",
  },

  innovationImpact: {
    newTechnologies: "",
    innovationProjects: "",
    research: "",
  },

  caseStudy: {
    beneficiaryBackground: "",
    interventionDetails: "",
    outcomeAchieved: "",
    testimonial: "",
  },

  challengesAndLearnings: {
    keyChallenges: "",
    mitigationStrategies: "",
    lessonsLearned: "",
  },

  sustainability: {
    continuationPlan: "",
    scalabilityPotential: "",
    replicationPossibilities: "",
  },

  monitoringEvaluation: {
    dataCollectionTools: "",
    assessmentMethods: "",
    monitoringFrequency: "",
  },

  photographs: [],

  // =======================
  // Generic Updaters
  // =======================

  // Generic field updater for any section
  setSection: (section, data) =>
    set((state) => ({
      ...state,
      [section]: data,
    })),

  // For CSV Import
  importReportData: (data) =>
    set(() => ({
      ...data,
    })),
}));
