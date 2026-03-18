import { create } from "zustand";

export const useDeliveryStore = create((set) => ({
  // Basic Certificate Info
  deliveryBasicInfo: {
    date: "",
    subject: "",
    purchaseOrderNo: "",
    purchaseOrderDate: "",
    projectName: "",
  },

  // School & Delivery Details
  schoolDelivery: {
    schoolName: "",
    schoolAddress: "",
    deliveredAndInstalledBy: "",
    deliveredByContactNo: "",
    receivedBy: "",
    receivedByContactNo: "",
  },

  // Verification & Authorization
  verification: {
    schoolAuthorityName: "",
    schoolAuthorityDesignation: "",
    stembotixRepresentativeName: "",
    yuvaCoordinatorName: "",
    verificationDate: "",
  },

  // Serial Numbers (Annexure-II)
  serialNumbers: {
    printers: [""],
    laptops: [""],
  },
  items: [{ id: null, itemName: "", quantity: null, received: null }],

  // Generic field updater for any section
  setSection: (section, data) =>
    set(() => ({
      [section]: data,
    })),

  // For CSV Import
  importDeliveryData: (data) =>
    set(() => ({
      ...data,
    })),
}));
