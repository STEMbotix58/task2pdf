import { generateCSV } from "./index";

export const handleDeliveryCSVDownload = () => {
  const row = {
    id: "delivery-001",

    basic_info: JSON.stringify({
      date: "2024-01-01",
      subject: "Delivery of STEM Kits",
      purchaseOrderNo: "12345",
      purchaseOrderDate: "2024-01-01",
      projectName: "STEM Education Project",
    }),

    school_delivery: JSON.stringify({
      schoolName: "Example School",
      schoolAddress: "123 Main St",
      deliveredAndInstalledBy: "John Doe",
      deliveredByContactNo: "1234567890",
      receivedBy: "Jane Smith",
      receivedByContactNo: "0987654321",
    }),

    verification: JSON.stringify({
      schoolAuthorityName: "Alice Johnson",
      schoolAuthorityDesignation: "Principal",
      stembotixRepresentativeName: "Bob Brown",
      yuvaCoordinatorName: "Charlie Davis",
      verificationDate: "2024-01-02",
    }),

    serial_numbers: JSON.stringify({
      printers: ["SN12345", "SN12346"],
      laptops: ["SN54321", "SN54322"],
    }),

    item_checklist: JSON.stringify([
      { id: 1, itemName: "3D Printer", quantity: 2, received: true },
      { id: 2, itemName: "Laptop", quantity: 2, received: true },
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_delivery_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
