export const generateCSV = (row) => {
  const headers = Object.keys(row).join(",");

  const values = Object.values(row)
    .map((val) => `"${String(val).replace(/"/g, '""')}"`)
    .join(",");

  return `${headers}\n${values}`;
};

export * from "./deliveryCSV";
export * from "./proposalCSV";
export * from "./projectCSV";
export * from "./stemReportCSV";
export * from "./flpReportCSV";
export * from "./reportCSV";
export * from "./eventPostsCSV";
export * from "./userManualCSV";
