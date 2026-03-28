import React from "react";

const TableSkeleton = ({ columns = 5, rows = 6 }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header Skeleton (Matches your Search/Sort Controls) */}
      <div className="p-6 border-b border-gray-100 bg-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-lg" />
          <div className="flex flex-wrap gap-3">
            <div className="h-10 w-64 bg-gray-100 animate-pulse rounded-xl" />
            <div className="h-10 w-32 bg-gray-100 animate-pulse rounded-xl" />
            <div className="h-10 w-40 bg-gray-100 animate-pulse rounded-xl" />
          </div>
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {[...Array(columns)].map((_, i) => (
                <th key={i} className="py-4 px-6 bg-gray-50/50">
                  <div className="h-3 w-20 bg-gray-200 animate-pulse rounded" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[...Array(rows)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(columns)].map((_, colIndex) => (
                  <td key={colIndex} className="py-5 px-6">
                    {/* Alternate width of skeletons for a more natural look */}
                    <div
                      className="h-4 bg-gray-100 animate-pulse rounded"
                      style={{
                        width: `${Math.floor(Math.random() * (90 - 40 + 1) + 40)}%`,
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
