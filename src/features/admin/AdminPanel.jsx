import { useEffect, useState } from "react";
import AdminLayout from "@/features/admin/components/layout/AdminLayout";
import AdminView from "@/features/admin/components/AdminView";
import { useAdminPanel } from "@/features/admin/hooks/useAdminPanel";
import TableSkeleton from "@/features/admin/components/ui/TableSkeleton";

const AdminPanel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [filteredTotalItems, setFilteredTotalItems] = useState(0);
  const {
    activeTab,
    setActiveTab,
    page,
    setPage,
    loading,
    error,
    dashboardReady,
    stats,
    recentActivity,
    data,
    totalItems,
  } = useAdminPanel();

  useEffect(() => {
    setPage(1);
  }, [activeTab, searchQuery, selectedDate, sortBy, sortOrder, setPage]);

  useEffect(() => {
    setFilteredTotalItems(totalItems);
  }, [totalItems]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedDate("");
    setSortBy("date");
    setSortOrder("desc");
  };

  const effectiveTotalItems =
    searchQuery || selectedDate ? filteredTotalItems : totalItems;
  const effectiveTotalPages = Math.ceil(effectiveTotalItems / 10);

  return (
    <AdminLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      searchQuery={searchQuery}
      selectedDate={selectedDate}
      sortBy={sortBy}
      sortOrder={sortOrder}
      onSearchChange={setSearchQuery}
      onDateChange={setSelectedDate}
      onSortByChange={setSortBy}
      onSortOrderChange={setSortOrder}
      onResetFilters={handleResetFilters}
    >
      {loading && (
        <TableSkeleton columns={activeTab === "deliveries" ? 4 : 5} rows={8} />
      )}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <AdminView
          activeTab={activeTab}
          dashboardReady={dashboardReady}
          stats={stats}
          recentActivity={recentActivity}
          items={data}
          searchQuery={searchQuery}
          selectedDate={selectedDate}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onFilteredCountChange={setFilteredTotalItems}
          page={page}
          setPage={setPage}
          totalPages={effectiveTotalPages}
          totalItems={effectiveTotalItems}
        />
      )}
    </AdminLayout>
  );
};

export default AdminPanel;
