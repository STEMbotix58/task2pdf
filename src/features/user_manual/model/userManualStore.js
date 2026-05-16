import { create } from "zustand";

export const useUserManualStore = create((set) => ({
  // Cover Page
  coverPage: {
    title: "",
    logo: [],
    date: "",
    version: "",
  },

  // Introduction
  introduction: {
    content: "",
    images: [],
  },

  // What's in the Kit
  whatsInTheKit: [{ itemName: "", description: "", image: [] }],

  // Hardware Setup
  hardwareSetup: [
    {
      stepNumber: 1,
      title: "",
      description: "",
      image: [],
      notes: "",
    },
  ],

  // Programming Setup
  programmingSetup: [
    {
      stepNumber: 1,
      title: "",
      description: "",
      image: [],
      codeSnippet: "",
      syntaxLabel: "",
      explanation: "",
    },
  ],

  // Safety Information
  safetyInformation: {
    content: "",
    images: [],
  },

  // Troubleshooting & FAQ
  troubleshootingFAQ: [{ question: "", answer: "", image: [] }],

  // Conclusion
  conclusion: {
    content: "",
    images: [],
  },

  // Abbreviations
  abbreviations: [
    {
      shortForm: "",
      fullForm: "",
    },
  ],

  // Generic field updater for any section
  setSection: (section, data) =>
    set(() => ({
      [section]: data,
    })),

  // For CSV Import
  importUserManualData: (data) =>
    set(() => ({
      ...data,
    })),
}));
