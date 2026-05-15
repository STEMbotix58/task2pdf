import { formattedDate } from "@/shared/utils/formatDate";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { exportRowToCSV } from "@/shared/utils/exportToCSV";
import { FaFilePdf } from "react-icons/fa";

const AdminTable = ({ items, activeTab }) => {
  const handleExport = (item) => {
    let formattedData = {};

    if (activeTab === "flp_report") {
      formattedData = {
        basic_info: item.basic_info,
        summary: item.summary,
        objective: item.objective,
        implementation_and_delivery: item.implementation_and_delivery,
        reach_and_coverage: item.reach_and_coverage,
        financial_overview: item.financial_overview,
        student_certification: item.student_certification,
        outcomes_and_impact: item.outcomes_and_impact,
        impact_analysis: item.impact_analysis,
        project_strengths: item.project_strengths,
        challenges_and_migration: item.challenges_and_migration,
        key_outcomes: item.key_outcomes,
        conclusion: item.conclusion,
        created_at: item.created_at,
      };
    }

    if (activeTab === "stemlab_report") {
      formattedData = {
        basic_info: item.basic_info,
        preface: item.preface,
        phase: item.phase,
        outcomes: item.outcomes,
        project: item.project,
        impact_analysis: item.impact_analysis,
        lab_setup_and_components: item.lab_setup_and_components,
        implementation_and_milestones: item.implementation_and_milestones,
        strengths: item.strengths,
        challenges_and_mitigation: item.challenges_and_mitigation,
        conclusion: item.conclusion,
        created_at: item.created_at,
      };
    }

    if (activeTab === "projects") {
      formattedData = {
        basic_info: item.basic_info,
        summary: item.summary,
        preface: item.preface,
        project: item.project,
        photographs: item.photographs,
        conclusion: item.conclusion,
        contact: item.contact,
        qr_code_img: item.qr_code_img,
        qr_code_vid: item.qr_code_vid,
        created_at: item.created_at,
      };
    }

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
        created_at: item.created_at,
      };
    }

    if (activeTab === "proposals") {
      formattedData = {
        proposal: item.proposal,
        project_proposal: item.project_proposal,
        spoc: item.spoc,
        financial_proposal: item.financial_proposal,
        created_at: item.created_at,
      };
    }

    if (activeTab === "deliveries") {
      formattedData = {
        basic_info: item.basic_info,
        school_delivery: item.school_delivery,
        item_checklist: item.item_checklist,
        serial_numbers: item.serial_numbers,
        verification: item.verification,
        created_at: item.created_at,
      };
    }

    if (activeTab === "event_posts") {
      formattedData = {
        college_name: item.college_name,
        address: item.address,
        event_date: item.event_date,
        event_time: item.event_time,
        faculty_name: item.faculty_name,
        student_name: item.student_name,
        photos: item.photos,
        created_at: item.created_at,
      };
    }

    exportRowToCSV(formattedData, `${activeTab}-${item.id}.csv`);
  };

  const downloadPdf = async (item) => {
    if (!item?.pdf_url) {
      return;
    }

    try {
      const response = await fetch(item.pdf_url);
      if (!response.ok) {
        throw new Error("Unable to fetch PDF from Cloudinary");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${activeTab}-${item.id}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download PDF failed:", error);
      alert("Unable to download PDF. Please try again later.");
    }
  };

  const getTableHeaders = () => {
    switch (activeTab) {
      case "flp_report":
        return ["Project Title", "Prepared By", "Created At", "Action"];
      case "stemlab_report":
        return ["Project Title", "Prepared By", "Created At", "Action"];
      case "projects":
        return ["Project Title", "Prepared By", "Created At", "Action"];
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
      case "event_posts":
        return ["College Name", "Event Date", "Created At", "Action"];
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
            {/* was checking !visibleItems which never fires since it's always an array */}
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
            {items.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/30 transition-colors"
              >
                {activeTab === "flp_report" && (
                  <>
                    <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                      {item.basic_info?.projectTitle || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {item.basic_info?.objective?.slice(0, 120) + "..." ||
                        "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {activeTab === "stemlab_report" && (
                  <>
                    <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                      {item.basic_info?.projectTitle || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      <img
                        src={item.basic_info?.preparedBy || "N/A"}
                        alt=""
                        className="h-15"
                      />
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FiDownload size={16} />
                          <FaFilePdf size={16} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {activeTab === "projects" && (
                  <>
                    <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                      {item.project?.title || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {item.basic_info?.preparedBy || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {activeTab === "reports" && (
                  <>
                    <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                      {item.project_overview?.projectTitle || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {item.project_overview?.implementingOrganization || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {item.project_overview?.projectDuration || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
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
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
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
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {activeTab === "event_posts" && (
                  <>
                    <td className="max-w-100 py-4 px-6 text-sm font-semibold text-gray-900">
                      {item.college_name || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {formattedDate(new Date(item.event_date)) || "N/A"}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {formattedDate(new Date(item.created_at))}
                    </td>
                    <td className="py-4 px-6 flex gap-2">
                      <button
                        onClick={() => handleExport(item)}
                        className="p-2 flex gap-2 text-sm rounded-lg hover:bg-indigo-50 text-indigo-600 transition"
                        title="Export CSV"
                      >
                        <FiDownload size={16} />
                      </button>
                      {item.pdf_url && (
                        <button
                          onClick={() => downloadPdf(item)}
                          className="p-2 flex gap-2 text-sm cursor-pointer rounded-lg hover:bg-green-50 text-green-600 transition"
                          title="Download PDF"
                        >
                          <FaFilePdf size={16} />
                        </button>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
