import { create } from "zustand";

export const useProjectStore = create((set) => ({
  // Basic Info
  basicInfo: {
    partnerLogo: "",
    stemLogo: "",
    preparedBy: "",
    date: "",
    homeImages: [],
  },

  // Summary
  summary: "",

  // Preface (MULTIPLE)
  preface: [
    {
      name: "",
      designation: "",
      testimonial: "",
      image: "",
    },
  ],

  // Project
  project: {
    title: "",
    overview: "",
    implementation: "",
    outcomesImpact: "",
    roboticsKits: [],
    hardware: [],
    software: [],
    infrastructure: [],
    amount: 0,
    image: [],
  },

  // Photographs
  photographs: [],

  // Conclusion
  conclusion: "",

  // Contact
  contact: {
    name: "",
    address: "",
    phone: "",
    email: "",
    website: "",
  },

  // QR Code
  qrCodeImg: [],
  qrCodeVid: [],

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

  setQRImg: (qr) => set({ qrCodeImg: qr }),
  setQRVid: (qr) => set({ qrCodeVid: qr }),

  // CSV Import
  importProjectData: (data) =>
    set((state) => ({
      ...state,
      ...Object.keys(state).reduce((acc, key) => {
        acc[key] = data[key] ?? state[key];
        return acc;
      }, {}),
    })),
}));
