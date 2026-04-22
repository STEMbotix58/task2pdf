import { create } from "zustand";

export const useStemLabStore = create((set) => ({
  basicInfo: {
    projectTitle: "",
    stemLogo: [],
    partnerLogo: [],
    preparedBy: [],
    homeImages: [],
    backPageImages: [],
  },

  preface: [
    { description: "", image: [] },
    { description: "", image: [] },
    { description: "", image: [] },
  ],

  phase: [
    {
      title: "",
      description: "",
      images: [],
    },
  ],

  outcomes: {
    description: "",
    images: [],
  },

  project: {
    objective: "",
    description: "",
    projectImg: [],
  },

  labSetupAndComponents: { description: "", labImg: [] },

  implementationAndMilestones: { description: "", implementationImg: [] },

  strengths: { description: "", strengthsImg: [] },

  impactAnalysis: {
    objective: "",
    impacts: [
      {
        title: "",
        description: "",
        image: [],
      },
    ],
  },

  challengesAndMitigation: { description: "", challengesImg: [] },

  conclusion: "",

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
  importSTEMLabReportData: (data) =>
    set((state) => ({
      ...state,
      ...Object.keys(state).reduce((acc, key) => {
        acc[key] = data[key] ?? state[key];
        return acc;
      }, {}),
    })),
}));
