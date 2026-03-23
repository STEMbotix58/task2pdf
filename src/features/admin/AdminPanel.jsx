import React, { useState, useMemo } from "react";
import { useAdminData } from "./hooks/useAdminData";
import { filterAndSort } from "./utils/filterSortData";
import AdminHeader from "./components/AdminHeader";
import AdminTabs from "./components/AdminTabs";
import AdminFilters from "./components/AdminFilters";
import AdminTable from "./components/AdminTable";
import Pagination from "./components/Pagination";
import { FaExclamationTriangle } from "react-icons/fa";

const ITEMS_PER_PAGE = 25;

const AdminPanel = () => {
  const { data, loading, error, reload } = useAdminData();

  const [activeTab, setActiveTab] = useState("reports");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);

  const processedData = useMemo(() => {
    return filterAndSort({
      data,
      activeTab,
      searchTerm,
      sortBy,
      sortOrder,
    });
  }, [data, activeTab, searchTerm, sortBy, sortOrder]);

  const totalPages = Math.ceil(processedData.length / ITEMS_PER_PAGE);
  const totalItems = data[activeTab]?.length || 0;
  const filteredCount = processedData.length;

  const paginatedData = processedData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  // Reset to page 1 when filters change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded mb-6"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <FaExclamationTriangle size={12} />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Error loading data
            </h3>
            <p className="mt-1 text-sm text-gray-500">{error}</p>
            <div className="mt-6">
              <button
                onClick={reload}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AdminHeader />

        <AdminTabs
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          data={data}
          setPage={setPage}
        />

        <AdminFilters
          searchTerm={searchTerm}
          setSearchTerm={handleSearchChange}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setPage={setPage}
          totalItems={totalItems}
          filteredCount={filteredCount}
        />

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <AdminTable items={paginatedData} activeTab={activeTab} />

          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            totalItems={filteredCount}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
