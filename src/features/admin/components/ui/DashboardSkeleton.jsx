import React from "react";

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8">
      {/* 🔹 Top Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-32 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
          >
            <div className="h-4 w-24 bg-gray-100 animate-pulse rounded mb-4" />
            <div className="h-8 w-16 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </div>

      {/* 🔹 Main Content Split Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 🟢 Recent Activity Feed Skeleton */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-8" />

          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-full bg-gray-100 animate-pulse shrink-0" />
                  <div className="space-y-2 w-1/2">
                    <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
                    <div className="h-3 w-24 bg-gray-50 animate-pulse rounded" />
                  </div>
                </div>
                <div className="h-6 w-16 bg-gray-100 animate-pulse rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* 🔵 Quick Actions Panel Skeleton */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-8" />

          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-4 rounded-xl bg-gray-50/50 border border-transparent"
              >
                <div className="w-8 h-8 bg-white rounded-lg animate-pulse shadow-sm" />
                <div className="h-4 w-32 bg-gray-200 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
