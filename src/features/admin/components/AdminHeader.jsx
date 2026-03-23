import React from "react";
import { FaHome, FaSync } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage and view all submitted reports, proposals, and deliveries
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaSync />
          Refresh
        </button>
        <Link
          to={"/"}
          className="inline-flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaHome />
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default AdminHeader;
