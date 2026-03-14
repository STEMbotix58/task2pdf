import { create } from "zustand";

export const useProposalStore = create((set) => ({
  proposal: {
    to: "",
    subject: "",
    description: "",
    date: "",
    salutation: "Dear Sir/Madam",
  },
  projectProposal: {
    title: "",
    intro: "",
    objectives: [{ name: "", description: "" }],
    provision: [{ title: "", content: "" }],
  },
  spoc: {
    name: "",
    designation: "",
    email: "",
    phone: "",
    signatureImg: "",
  },
  financialProposal: [
    { particular: "", description: "", amount: 0, specification: "", boq: "" },
  ],

  // Generic field updater for any section
  setSection: (section, data) =>
    set(() => ({
      [section]: data,
    })),

  // For CSV Import
  importProposalData: (data) =>
    set(() => ({
      ...data,
    })),
}));
