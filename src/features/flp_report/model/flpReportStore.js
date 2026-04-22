import { create } from "zustand";

export const useFLPStore = create((set) => ({
  // Basic Info
  basicInfo: {
    projectTitle: "",
    objective: "",
    partners: [
      { title: "", description: "" },
      { title: "", description: "" },
    ],
    stemLogo: [],
    backPageImages: [],
  },

  // Executive Summary
  summary: {
    description: "",
    summaryImg: [],
  },

  // Program Objectives
  objective: {
    description: "",
    objectiveImg: [],
  },

  // Program Implementation & Delivery
  implementationAndDelivery: {
    description: "",
    implementationAndDeliveryImg: [],
  },

  // Reach & Coverage
  reachAndCoverage: {
    description: "",
    reachAndCoverageImg: [],
  },

  // Financial Overview
  financialOverview: {
    description: "",
    financialOverviewImg: [],
  },

  // Student Certification
  studentCertification: {
    description: "",
    studentCertificationImg: [],
  },

  // Outcomes and Impact
  outcomesAndImpact: {
    description: "",
    outcomesAndImpactImg: [],
  },

  // Impact Analysis
  impactAnalysis: {
    objective: "",
    studentLearning: "",
    studentLearningImg: [],
    behavioralChange: "",
    behavioralChangeImg: [],
    digitalFinancialAwareness: "",
    digitalFinancialAwarenessImg: [],
    digitalLearningAdoption: "",
    digitalLearningAdoptionImg: [],
    communityEngagement: "",
    communityEngagementImg: [],
  },

  // Project Strength
  projectStrengths: {
    description: "",
    projectStrengthsImg: [],
  },

  // Challenges And Migration
  challengesAndMigration: {
    description: "",
    challengesAndMigrationImg: [],
  },

  // Project Strength
  keyOutcomes: {
    description: "",
    keyOutcomesImg: [],
  },

  // Conclusion
  conclusion: {
    description: "",
    conclusionImg: [],
  },

  // =======================
  // GENERIC HELPERS
  // =======================

  // Generic field updater for any section
  setSection: (section, data) =>
    set((state) => {
      if (data === undefined) return state;
      return {
        ...state,
        [section]: data,
      };
    }),

  // CSV Import
  importFLPReportData: (data) =>
    set((state) => ({
      ...state,
      ...Object.keys(state).reduce((acc, key) => {
        acc[key] = data[key] ?? state[key];
        return acc;
      }, {}),
    })),
}));
