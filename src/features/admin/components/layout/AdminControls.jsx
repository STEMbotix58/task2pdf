import React from "react";
import {
  FiSearch,
  FiFilter,
  FiRotateCcw,
  FiArrowUp,
  FiArrowDown,
  FiCalendar,
} from "react-icons/fi";

const AdminControls = ({
  searchQuery,
  setSearchQuery,
  selectedDate,
  setSelectedDate,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  filteredCount,
  activeTab,
}) => {
  const handleReset = () => {
    setSearchQuery("");
    setSelectedDate("");
    setSortBy("date");
    setSortOrder("desc");
  };

  return (
    <div className="p-6 border-b border-gray-100 bg-white shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight flex items-center gap-3">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} List
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold">
              {filteredCount}{" "}
              {/* ✅ was filteredItems.length — that var doesn't exist here */}
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group grow sm:grow-0">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            <input
              type="text"
              placeholder="Search records..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-72 bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:bg-white focus:ring-4 focus:ring-indigo-50/50 focus:border-indigo-400 outline-none transition-all"
            />
          </div>

          <div className="relative flex items-center group">
            <FiCalendar className="absolute left-3.5 text-gray-400 pointer-events-none group-focus-within:text-indigo-500" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="[&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:inset-3 [&::-webkit-calendar-picker-indicator]:cursor-pointer bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-600 focus:bg-white focus:ring-4 focus:ring-indigo-50/50 focus:border-indigo-400 outline-none transition-all cursor-pointer"
            />
          </div>

          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-indigo-50/50 focus-within:border-indigo-400 transition-all">
            <div className="pl-3.5 pr-1 text-gray-400">
              <FiFilter size={16} />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-none py-2.5 pl-1 pr-2 text-sm font-medium text-gray-700 outline-none cursor-pointer"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
            </select>
            <button
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="h-full ml-2 px-3 border-l border-gray-200 hover:bg-white text-indigo-500 transition-colors"
              title={sortOrder === "asc" ? "Ascending" : "Descending"}
            >
              {sortOrder === "asc" ? (
                <FiArrowUp size={16} />
              ) : (
                <FiArrowDown size={16} />
              )}
            </button>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center justify-center p-2.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-xl transition-all active:scale-95"
            title="Reset Filters"
          >
            <FiRotateCcw size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminControls;
