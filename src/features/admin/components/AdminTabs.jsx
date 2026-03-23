import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiBarChart, FiBox } from "react-icons/fi";

const AdminTabs = ({ activeTab, setActiveTab, data, setPage }) => {
  const tabs = [
    {
      key: "reports",
      label: "Project Reports",
      count: data.reports?.length || 0,
      icon: <FiBarChart size={18} />,
    },
    {
      key: "proposals",
      label: "Project Proposals",
      count: data.proposals?.length || 0,
      icon: <FaRegFileAlt size={18} />,
    },
    {
      key: "deliveries",
      label: "Delivery Certificates",
      count: data.deliveries?.length || 0,
      icon: <FiBox size={18} />,
    },
  ];

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setPage(1);
            }}
            className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
              activeTab === tab.key
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span
              className={`ml-2 py-0.5 px-2 rounded-full text-xs font-medium ${
                activeTab === tab.key
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminTabs;
