import { useState, useMemo } from "react";
import { useAdminData } from "../hooks/useAdminData";

const ITEMS_PER_PAGE = 10;
const formatActivityTime = (createdAt) =>
  createdAt ? new Date(createdAt).toLocaleString() : "Unknown time";

export const useAdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [page, setPage] = useState(1);

  const queryType = activeTab === "dashboard" ? "all" : activeTab;
  const { data, loading, error, loadedTab } = useAdminData(queryType);
  const safeData = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const isCurrentTabLoaded = loadedTab === queryType;

  const totalItems = safeData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return safeData.slice(start, start + ITEMS_PER_PAGE);
  }, [safeData, page]);

  const stats = useMemo(() => {
    return {
      stemlab_report: safeData.filter((item) => item?.type === "stemlab_report")
        .length,
      flp_report: safeData.filter((item) => item?.type === "flp_report").length,
      project: safeData.filter((item) => item?.type === "project").length,
      reports: safeData.filter((item) => item?.type === "report").length,
      proposals: safeData.filter((item) => item?.type === "proposal").length,
      deliveries: safeData.filter((item) => item?.type === "delivery").length,
      event_posts: safeData.filter((item) => item?.type === "event_posts")
        .length,
    };
  }, [queryType, safeData]);

  const recentActivity = useMemo(() => {
    if (!safeData.length) {
      return [];
    }

    return safeData.slice(0, 5).map((item) => {
      if (item?.type === "flp_report") {
        return {
          title: item.basicInfo?.projectTitle || "Untitled Project",
          time: formatActivityTime(item.created_at),
          type: "flp_report",
        };
      }

      if (item?.type === "stemlab_report") {
        return {
          title: item.basic_info?.projectTitle || "Untitled Project",
          time: formatActivityTime(item.created_at),
          type: "stemlab_report",
        };
      }

      if (item?.type === "project") {
        return {
          title: item.project?.title || "Untitled Project",
          time: formatActivityTime(item.created_at),
          type: "project",
        };
      }

      if (item?.type === "report") {
        return {
          title: item.project_overview?.projectTitle || "Untitled Report",
          time: formatActivityTime(item.created_at),
          type: "report",
        };
      }

      if (item?.type === "proposal") {
        return {
          title: item.proposal?.subject || "Untitled Proposal",
          time: formatActivityTime(item.created_at),
          type: "proposal",
        };
      }

      if (item?.type === "delivery") {
        return {
          title: item.basic_info?.subject || "Untitled Delivery",
          time: formatActivityTime(item.created_at),
          type: "delivery",
        };
      }

      if (item?.type === "event_posts") {
        return {
          title: item.collegeName || "Untitled Even Posts",
          time: formatActivityTime(item.created_at),
          type: "event_posts",
        };
      }

      console.warn(
        "[useAdminPanel] Skipping recent activity item with unknown type",
        item.type,
      );
      return null;
    });
  }, [safeData]).filter(Boolean);

  const dashboardReady =
    activeTab !== "dashboard" || (!loading && !error && isCurrentTabLoaded);

  return {
    activeTab,
    setActiveTab,
    page,
    setPage,
    loading,
    error,
    data: safeData,
    dashboardReady,
    stats,
    recentActivity,
    paginatedItems,
    totalItems,
    totalPages,
  };
};
