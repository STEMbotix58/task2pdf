import { useCallback, useEffect, useRef, useState } from "react";
import {
  fetchAllDeliveries,
  fetchAllProposals,
  fetchAllReports,
  fetchAllProjects,
  fetchAllSTEMLabReports,
  fetchAllFLPReports,
  fetchAllEventPosts,
} from "@/shared/services/databaseService";

const validateItemStructure = (item, type) => {
  const hasType = item?.type === type;

  if (!hasType) {
    console.warn("[useAdminData] Item missing or mismatched type", {
      expectedType: type,
      actualType: item?.type,
      item,
    });
  }

  if (type === "stemlab_report" && !item?.basic_info) {
    console.warn(
      "[useAdminData] STEM Lab Report missing Report Basic Info",
      item,
    );
  }

  if (type === "flp_report" && !item?.basic_info) {
    console.warn("[useAdminData] FLP Report missing Report Basic Info", item);
  }

  if (type === "project" && !item?.project) {
    console.warn("[useAdminData] Project missing project", item);
  }

  if (type === "report" && !item?.project_overview) {
    console.warn("[useAdminData] Report missing project_overview", item);
  }

  if (type === "proposal" && !item?.proposal) {
    console.warn("[useAdminData] Proposal missing proposal payload", item);
  }

  if (type === "delivery" && !item?.basic_info) {
    console.warn("[useAdminData] Delivery missing basic_info", item);
  }

  if (type === "event_post" && !item?.event_details) {
    console.warn("[useAdminData] Event Post missing event_details", item);
  }
};

const normalizeItems = (items, type) => {
  const normalizedItems = Array.isArray(items)
    ? items.map((item) => ({
        ...item,
        type,
      }))
    : [];

  normalizedItems.forEach((item) => validateItemStructure(item, type));

  return normalizedItems;
};

export const useAdminData = (activeTab) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedTab, setLoadedTab] = useState(null);
  const requestIdRef = useRef(0);

  const fetchData = useCallback(
    async (requestedTab = activeTab) => {
      const requestId = requestIdRef.current + 1;
      requestIdRef.current = requestId;
      setLoading(true);
      setError(null);

      try {
        let normalizedData = [];

        switch (requestedTab) {
          case "stemlab_report":
            {
              const response = await fetchAllSTEMLabReports();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "stemlab_report");
            }
            break;
          case "flp_report":
            {
              const response = await fetchAllFLPReports();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "flp_report");
            }
            break;
          case "projects":
            {
              const response = await fetchAllProjects();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "project");
            }
            break;
          case "deliveries":
            {
              const response = await fetchAllDeliveries();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "delivery");
            }
            break;
          case "proposals":
            {
              const response = await fetchAllProposals();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "proposal");
            }
            break;
          case "reports":
            {
              const response = await fetchAllReports();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "report");
            }
            break;
          case "event_posts":
            {
              const response = await fetchAllEventPosts();

              if (!response.success) {
                throw new Error(response.error);
              }

              normalizedData = normalizeItems(response.data, "event_post");
            }
            break;
          case "all":
            {
              const [
                stemlabReportResponse,
                flpReportResponse,
                projectsResponse,
                reportsResponse,
                proposalsResponse,
                deliveriesResponse,
                eventPostsResponse,
              ] = await Promise.all([
                fetchAllSTEMLabReports(),
                fetchAllFLPReports(),
                fetchAllProjects(),
                fetchAllReports(),
                fetchAllProposals(),
                fetchAllDeliveries(),
                fetchAllEventPosts(),
              ]);

              const failedResponse = [
                stemlabReportResponse,
                flpReportResponse,
                projectsResponse,
                reportsResponse,
                proposalsResponse,
                deliveriesResponse,
                eventPostsResponse,
              ].find((response) => !response.success);

              if (failedResponse) {
                throw new Error(failedResponse.error);
              }

              normalizedData = [
                ...normalizeItems(stemlabReportResponse.data, "stemlab_report"),
                ...normalizeItems(flpReportResponse.data, "flp_report"),
                ...normalizeItems(projectsResponse.data, "project"),
                ...normalizeItems(reportsResponse.data, "report"),
                ...normalizeItems(proposalsResponse.data, "proposal"),
                ...normalizeItems(deliveriesResponse.data, "delivery"),
                ...normalizeItems(eventPostsResponse.data, "event_post"),
              ].sort(
                (a, b) =>
                  new Date(b?.created_at || 0).getTime() -
                  new Date(a?.created_at || 0).getTime(),
              );
            }
            break;
          default:
            normalizedData = [];
        }

        if (requestId !== requestIdRef.current) {
          return [];
        }

        setData(normalizedData);
        setLoadedTab(requestedTab);

        return normalizedData;
      } catch (err) {
        if (requestId !== requestIdRef.current) {
          return [];
        }

        setError(err.message);
        setData([]);
        setLoadedTab(requestedTab);
        return [];
      } finally {
        if (requestId === requestIdRef.current) {
          setLoading(false);
        }
      }
    },
    [activeTab],
  );

  useEffect(() => {
    fetchData(activeTab);
  }, [activeTab, fetchData]);

  return {
    data,
    loading,
    error,
    loadedTab,
    refetch: () => fetchData(activeTab),
  };
};
