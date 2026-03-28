import React from "react";
import { FiGrid, FiBriefcase, FiUsers, FiCheckSquare } from "react-icons/fi";
import STEMLogo from "@/shared/assets/images/STEMbotix-Logo.png";

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: "Dashboard", key: "dashboard", icon: <FiGrid /> },
    { name: "Reports", key: "reports", icon: <FiBriefcase /> },
    { name: "Proposals", key: "proposals", icon: <FiUsers /> },
    { name: "Deliveries", key: "deliveries", icon: <FiCheckSquare /> },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <img src={STEMLogo} alt="" className="w-70 h-full" />
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {navItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          );
        })}
      </nav>

      {/* <div className="p-4 m-4 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
        <h4 className="font-semibold text-gray-900 text-sm mb-2">Need Help?</h4>
        <p className="text-xs text-gray-500 mb-3">
          Check our admin documentation for guides.
        </p>
        <button className="w-full bg-white text-indigo-600 text-xs font-semibold py-2 rounded-lg shadow-sm">
          View Docs
        </button>
      </div> */}
    </div>
  );
};

export default AdminSidebar;
