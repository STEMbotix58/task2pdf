import { formattedDate } from "@/shared/utils/formatDate";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { exportRowToCSV } from "@/shared/utils/exportToCSV";

const AdminTable = ({ items, activeTab }) => {
  const handleExport = (item) => {
    let formattedData = {};

    if (activeTab === "reports") {
      formattedData = {
        project_overview: item.project_overview,
        objectives: item.objectives,
        beneficiary_profile: item.beneficiary_profile,
        baseline_endline: item.baseline_endline,
        quantitative_impact: item.quantitative_impact,
        qualitative_impact: item.qualitative_impact,
        learning_outcomes: item.learning_outcomes,
        institutional_impact: item.institutional_impact,
        social_impact: item.social_impact,
        economic_impact: item.economic_impact,
        innovation_impact: item.innovation_impact,
        case_study: item.case_study,
        challenges_and_learnings: item.challenges_and_learnings,
        sustainability: item.sustainability,
        monitoring_evaluation: item.monitoring_evaluation,
        photographs: item.photographs,
        createdAt: item.created_at,
      };
    }

    if (activeTab === "proposals") {
      formattedData = {
        proposal: item.proposal,
        project_proposal: item.project_proposal,
        spoc: item.spoc,
        financial_proposal: item.financial_proposal,
        createdAt: item.created_at,
      };
    }

    if (activeTab === "deliveries") {
      formattedData = {
        basic_info: item.basic_info,
        school_delivery: item.school_delivery,
        item_checklist: item.item_checklist,
        serial_numbers: item.serial_numbers,
        verification: item.verification,
        createdAt: item.created_at,
      };
    }

    exportRowToCSV(formattedData, `${activeTab}-${item.id}.csv`);
  };

  const getTableHeaders = () => {
    switch (activeTab) {
      case "reports":
        return [
          "Project Title",
          "Organization",
          "Duration",
          "Created At",
          "Action",
        ];
      case "proposals":
        return ["Subject", "SPOC", "Date", "Created At", "Action"];
      case "deliveries":
        return ["Subject", "School Name", "Created At", "Action"];
      default:
        return [];
    }
  };

  return (
    <div className="bg-white rounded-b-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              {getTableHeaders().map((header, i) => (
                <th
                  key={i}
                  className="py-4 px-6 text-xs font-semibold text-gray-400 uppercase tracking-wider bg-gray-50/50"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* ✅ was checking !visibleItems which never fires since it's always an array */}
            {items.length === 0 && (
              <tr>
                <td
                  colSpan={getTableHeaders().length}
                  className="py-10 text-center text-sm text-gray-400"
                >
                  No items found
                </td>
              </tr>
            )}
            {items.map(
              (
                item, // ✅ was visibleItems — that var no longer exists here
              ) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/30 transition-colors"
                >
                  {activeTab === "reports" && (
                    <>
                      <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                        {item.project_overview?.projectTitle || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {item.project_overview?.implementingOrganization ||
                          "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {item.project_overview?.projectDuration || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleExport(item)}
                          className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                          title="Export CSV"
                        >
                          <FiDownload size={16} />
                        </button>
                      </td>
                    </>
                  )}
                  {activeTab === "proposals" && (
                    <>
                      <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                        {item.proposal?.subject || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {item.spoc?.name || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {formattedDate(item.proposal_date) || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {formattedDate(new Date(item.created_at))}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleExport(item)}
                          className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                          title="Export CSV"
                        >
                          <FiDownload size={16} />
                        </button>
                      </td>
                    </>
                  )}
                  {activeTab === "deliveries" && (
                    <>
                      <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                        {item.basic_info?.subject || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {item.school_delivery?.schoolName || "N/A"}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {formattedDate(new Date(item.created_at))}
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleExport(item)}
                          className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                          title="Export CSV"
                        >
                          <FiDownload size={16} />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
