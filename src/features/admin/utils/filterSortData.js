export const filterAndSort = ({
  data,
  activeTab,
  searchTerm,
  sortBy,
  sortOrder,
}) => {
  let filtered = data[activeTab] || [];

  // Enhanced search functionality
  if (searchTerm) {
    const search = searchTerm.toLowerCase().trim();
    filtered = filtered.filter((item) => {
      // Search in different fields based on the active tab
      switch (activeTab) {
        case "reports":
          return (
            item.id?.toString().includes(search) ||
            item.project_overview?.project_name
              ?.toLowerCase()
              .includes(search) ||
            item.created_at?.includes(search)
          );
        case "proposals":
          return (
            item.id?.toString().includes(search) ||
            item.project_proposal?.project_title
              ?.toLowerCase()
              .includes(search) ||
            item.spoc?.organization_name?.toLowerCase().includes(search) ||
            item.spoc?.contact_person?.toLowerCase().includes(search) ||
            item.created_at?.includes(search)
          );
        case "deliveries":
          return (
            item.id?.toString().includes(search) ||
            item.school_delivery?.school_name?.toLowerCase().includes(search) ||
            item.basic_info?.delivery_date?.includes(search) ||
            item.created_at?.includes(search)
          );
        default:
          return JSON.stringify(item).toLowerCase().includes(search);
      }
    });
  }

  // Enhanced sorting functionality
  return [...filtered].sort((a, b) => {
    let aVal, bVal;

    switch (sortBy) {
      case "created_at":
        aVal = new Date(a.created_at || 0);
        bVal = new Date(b.created_at || 0);
        break;
      case "name":
        switch (activeTab) {
          case "reports":
            aVal = a.project_overview?.project_name || "";
            bVal = b.project_overview?.project_name || "";
            break;
          case "proposals":
            aVal = a.project_proposal?.project_title || "";
            bVal = b.project_proposal?.project_title || "";
            break;
          case "deliveries":
            aVal = a.school_delivery?.school_name || "";
            bVal = b.school_delivery?.school_name || "";
            break;
          default:
            aVal = "";
            bVal = "";
        }
        // Case-insensitive string comparison
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
        break;
      case "id":
      default:
        aVal = a.id || 0;
        bVal = b.id || 0;
        break;
    }

    if (sortOrder === "asc") {
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal);
      }
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    } else {
      if (typeof aVal === "string" && typeof bVal === "string") {
        return bVal.localeCompare(aVal);
      }
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
    }
  });
};
