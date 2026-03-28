import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";

const AdminLayout = ({
  children,
  activeTab,
  setActiveTab,
  searchQuery,
  selectedDate,
  sortBy,
  sortOrder,
  onSearchChange,
  onDateChange,
  onSortByChange,
  onSortOrderChange,
  onResetFilters,
}) => {
  return (
    <div className="flex h-screen bg-[#f8f9fa] font-sans">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 ml-64 flex flex-col overflow-hidden">
        <AdminTopbar
          activeTab={activeTab}
          searchQuery={searchQuery}
          selectedDate={selectedDate}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSearchChange={onSearchChange}
          onDateChange={onDateChange}
          onSortByChange={onSortByChange}
          onSortOrderChange={onSortOrderChange}
          onResetFilters={onResetFilters}
        />
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
