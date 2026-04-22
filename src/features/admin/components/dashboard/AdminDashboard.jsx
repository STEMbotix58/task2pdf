import React from "react";
import StatCard from "./StatCard";
import { FiPlus, FiTruck, FiPieChart, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaProjectDiagram } from "react-icons/fa";

// const navigate = useNavigate();

const AdminDashboard = ({ stats, recentActivity }) => {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header Section */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Admin Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track system performance, recent submissions, and activities.
          </p>
        </div>

        <button className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-xl shadow-sm hover:bg-indigo-700 hover:shadow transition-all focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Export Report
        </button>
      </div> */}

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value={stats.project} />
        <StatCard title="Total Reports" value={stats.reports} isHighlighted />
        <StatCard title="Total Proposals" value={stats.proposals} />
        <StatCard title="Total Deliveries" value={stats.deliveries} />
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          {/* <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800">
              View All
            </button>
          </div> */}

          <div className="space-y-1">
            {recentActivity.length === 0 ? (
              <div className="text-center py-8 text-sm text-gray-400">
                No recent activity found.
              </div>
            ) : (
              recentActivity.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-lg px-2 transition-colors -mx-2"
                >
                  <div className="flex items-center gap-4">
                    {/* Tiny visual indicator icon */}
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <FiPieChart size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {item.time}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                    {item.type}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Quick Actions
          </h2>

          <div className="space-y-3">
            <Link
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 text-sm font-medium transition-colors border border-transparent hover:border-indigo-100 group"
              to={"/proposal"}
            >
              <span className="bg-white p-1.5 rounded-lg shadow-sm text-gray-500 group-hover:text-indigo-600">
                <FiPlus size={16} />
              </span>
              Generate Proposal
            </Link>

            <Link
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 text-sm font-medium transition-colors border border-transparent hover:border-indigo-100 group"
              to={"/delivery"}
            >
              <span className="bg-white p-1.5 rounded-lg shadow-sm text-gray-500 group-hover:text-indigo-600">
                <FiTruck size={16} />
              </span>
              Generate Delivery
            </Link>

            <Link
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 text-sm font-medium transition-colors border border-transparent hover:border-indigo-100 group"
              to={"/report"}
            >
              <span className="bg-white p-1.5 rounded-lg shadow-sm text-gray-500 group-hover:text-indigo-600">
                <FiPieChart size={16} />
              </span>
              Generate Report
            </Link>

            <Link
              className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 text-sm font-medium transition-colors border border-transparent hover:border-indigo-100 group"
              to={"/project"}
            >
              <span className="bg-white p-1.5 rounded-lg shadow-sm text-gray-500 group-hover:text-indigo-600">
                <FaProjectDiagram size={16} />
              </span>
              Generate Project
            </Link>

            {/* <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700 text-sm font-medium transition-colors border border-transparent hover:border-indigo-100 group">
              <span className="bg-white p-1.5 rounded-lg shadow-sm text-gray-500 group-hover:text-indigo-600">
                <FiSettings size={16} />
              </span>
              System Settings
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
