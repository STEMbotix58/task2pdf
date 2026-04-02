import { useState, useMemo, useEffect } from "react";
import {
  getSearchableValue,
  matchesDateFilter,
  getSortableTitle,
  getSortableTimestamp,
  compareValues,
} from "@/features/admin/utils/adminTableUtils";
import AdminControls from "./layout/AdminControls";
import AdminTable from "./AdminTable";
import Pagination from "./Pagination";
import AdminDashboard from "./dashboard/AdminDashboard";
import DashboardSkeleton from "./ui/DashboardSkeleton";

const ITEMS_PER_PAGE = 10;

const AdminView = ({
  activeTab,
  dashboardReady,
  stats,
  recentActivity,
  items,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedDate, sortBy, sortOrder, activeTab]);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    const safeItems = Array.isArray(items) ? items : [];
    return safeItems.filter((item) => {
      const matchesSearch =
        !normalizedQuery ||
        getSearchableValue(item, activeTab)
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesDate = matchesDateFilter(item, activeTab, selectedDate);
      return matchesSearch && matchesDate;
    });
  }, [items, activeTab, normalizedQuery, selectedDate]);

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const left =
        sortBy === "title"
          ? getSortableTitle(a, activeTab)
          : getSortableTimestamp(a, activeTab);
      const right =
        sortBy === "title"
          ? getSortableTitle(b, activeTab)
          : getSortableTimestamp(b, activeTab);
      return compareValues(left, right, sortOrder);
    });
  }, [filteredItems, sortBy, sortOrder, activeTab]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => {
    const start = Math.max(page - 1, 0) * ITEMS_PER_PAGE;
    return sortedItems.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedItems, page]);

  if (activeTab === "dashboard") {
    if (!dashboardReady) return <DashboardSkeleton />;
    return <AdminDashboard stats={stats} recentActivity={recentActivity} />;
  }

  return (
    <div>
      <AdminControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        filteredCount={filteredItems.length}
        activeTab={activeTab}
      />
      <AdminTable items={visibleItems} activeTab={activeTab} />
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        totalItems={filteredItems.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default AdminView;
