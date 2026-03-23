import React from "react";
import { RiInboxLine } from "react-icons/ri";

const AdminTable = ({ items, activeTab }) => {
  if (!items.length) {
    return (
      <div className="text-center py-12">
        <RiInboxLine size={12} />

        <h3 className="mt-2 text-sm font-medium text-gray-900">
          No records found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          {activeTab === "reports" &&
            "No project reports have been submitted yet."}
          {activeTab === "proposals" &&
            "No project proposals have been submitted yet."}
          {activeTab === "deliveries" &&
            "No delivery certificates have been submitted yet."}
        </p>
      </div>
    );
  }

  const getTableHeaders = () => {
    switch (activeTab) {
      case "reports":
        return [
          "Project Title",
          "Implementing Organization",
          "Project Duration",
          "Created at",
          "Actions",
        ];
      case "proposals":
        return [
          "Proposal Subject",
          "Proposal Date",
          "Created At",
          "Contact Person Name",
          "Actions",
        ];
      case "deliveries":
        return ["Delivery Subject", "School Name", "Created At", "Actions"];
      default:
        return ["Name", "Date", "Actions"];
    }
  };

  const renderTableRow = (item) => {
    switch (activeTab) {
      case "reports":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.project_overview?.projectTitle || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.project_overview?.implementingOrganization || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.project_overview?.projectDuration || "N/A"} Months
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <p className="text-blue-600 hover:text-blue-900 font-medium">
                View Details
              </p>
            </td>
          </>
        );
      case "proposals":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.proposal?.subject || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.proposal?.date || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {item.spoc?.name || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <p className="text-blue-600 hover:text-blue-900 font-medium">
                View Details
              </p>
            </td>
          </>
        );
      case "deliveries":
        return (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.deliveryBasicInfo?.subject || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {item.schoolDelivery?.schoolName || "N/A"}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(item.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <p className="text-blue-600 hover:text-blue-900 font-medium">
                View Details
              </p>
            </td>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {getTableHeaders().map((header, index) => (
                <th
                  key={header}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    index === 0 ? "rounded-tl-md" : ""
                  } ${index === getTableHeaders().length - 1 ? "rounded-tr-md" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item, index) => (
              <tr
                key={item.id}
                className={`hover:bg-gray-50 ${
                  index === items.length - 1
                    ? "rounded-bl-md rounded-br-md"
                    : ""
                }`}
              >
                {renderTableRow(item)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
