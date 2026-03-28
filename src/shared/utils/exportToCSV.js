// export const exportRowToCSV = (data, filename = "data.csv") => {
//   if (!data || typeof data !== "object") return;

//   const headers = Object.keys(data);
//   const values = Object.values(data);

//   const csvContent = [
//     headers.join(","),
//     values.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","),
//   ].join("\n");

//   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//   const url = URL.createObjectURL(blob);

//   const link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", filename);
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

export const exportRowToCSV = (data, filename = "data.csv") => {
  if (!data || typeof data !== "object") return;

  const flattenValue = (v) => {
    if (v === null || v === undefined) return "";
    if (typeof v === "object") {
      // Serialize objects/arrays as JSON, then escape quotes for CSV
      return JSON.stringify(v).replace(/"/g, '""');
    }
    return String(v).replace(/"/g, '""');
  };

  const headers = Object.keys(data);
  const values = Object.values(data);

  const csvContent = [
    headers.join(","),
    values.map((v) => `"${flattenValue(v)}"`).join(","),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
