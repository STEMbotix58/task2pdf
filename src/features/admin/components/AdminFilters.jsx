import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";

const AdminFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  setPage,
  totalItems,
  filteredCount,
}) => {
  const sortOptions = [
    { value: "created_at", label: "Date Created" },
    { value: "name", label: "Name" },
    { value: "id", label: "ID" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosSearch color="#666" />
            </div>
            <input
              type="text"
              placeholder="Search records..."
              className="block w-100 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="sortBy"
              className="text-sm font-medium text-gray-700"
            >
              Sort by:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block pl-3 pr-10 py-2 text-base border-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            title={`Sort ${sortOrder === "asc" ? "descending" : "ascending"}`}
          >
            <LuArrowDownUp />
          </button>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        Showing {filteredCount} of {totalItems} records
        {searchTerm && (
          <span className="ml-2">(filtered by "{searchTerm}")</span>
        )}
      </div>
    </div>
  );
};

export default AdminFilters;
