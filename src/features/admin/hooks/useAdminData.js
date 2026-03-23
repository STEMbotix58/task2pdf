import { useEffect, useState } from "react";
import {
  fetchAllDeliveries,
  fetchAllProposals,
  fetchAllReports,
} from "@/shared/services/databaseService";

export const useAdminData = () => {
  const [data, setData] = useState({
    reports: [],
    proposals: [],
    deliveries: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [reports, proposals, deliveries] = await Promise.all([
        fetchAllReports(),
        fetchAllProposals(),
        fetchAllDeliveries(),
      ]);

      setData({
        reports: reports.data || [],
        proposals: proposals.data || [],
        deliveries: deliveries.data || [],
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  return { data, loading, error, reload: loadAllData };
};
