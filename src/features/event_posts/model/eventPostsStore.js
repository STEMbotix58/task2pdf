import { create } from "zustand";

export const useEventPostsStore = create((set) => ({
  collegeName: "",

  address: "",

  eventDate: "",

  eventTime: "",

  studentName: "",

  facultyName: "",

  photos: [],

  // Generic field updater for any section
  setSection: (section, data) =>
    set(() => ({
      [section]: data,
    })),

  // For CSV Import
  importEventPostsData: (data) =>
    set(() => ({
      ...data,
    })),
}));
