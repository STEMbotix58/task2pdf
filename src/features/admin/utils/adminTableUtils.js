// --- Helper Functions (Internal Logic) ---
export const getSearchableValue = (item, activeTab) => {
  if (!item || typeof item !== "object") return "";
  switch (activeTab) {
    case "reports":
      return item.project_overview?.projectTitle || "";
    case "proposals":
      return item.proposal?.subject || "";
    case "deliveries":
      return item.basic_info?.subject || "";
    default:
      return "";
  }
};

export const getItemDateValues = (item, activeTab) => {
  if (!item || typeof item !== "object") return [];
  switch (activeTab) {
    case "reports":
      return [item.created_at];
    case "proposals":
      return [item.created_at, item.proposal?.date];
    case "deliveries":
      return [item.created_at];
    default:
      return [];
  }
};

export const toDayString = (value) => {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString().split("T")[0];
};

export const matchesDateFilter = (item, activeTab, selectedDate) => {
  if (!selectedDate) return true;
  return getItemDateValues(item, activeTab).some(
    (value) => toDayString(value) === selectedDate,
  );
};

export const getSortableTitle = (item, activeTab) =>
  getSearchableValue(item, activeTab).trim().toLowerCase();

export const getSortableTimestamp = (item, activeTab) => {
  const dateValues = getItemDateValues(item, activeTab);
  for (const value of dateValues) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date.getTime();
  }
  return null;
};

export const compareValues = (leftValue, rightValue, sortOrder) => {
  const leftMissing =
    leftValue === null || leftValue === undefined || leftValue === "";
  const rightMissing =
    rightValue === null || rightValue === undefined || rightValue === "";
  if (leftMissing && rightMissing) return 0;
  if (leftMissing) return 1;
  if (rightMissing) return -1;
  if (leftValue < rightValue) return sortOrder === "asc" ? -1 : 1;
  if (leftValue > rightValue) return sortOrder === "asc" ? 1 : -1;
  return 0;
};
