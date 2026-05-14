import supabase from "@/shared/utils/supabase";

/* Save FLP Report form data to Supabase */
export const saveFLPReportSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("flp_report")
      .insert([
        {
          basic_info: formData.basicInfo || {},
          summary: formData.summary || {},
          objective: formData.objective || {},
          implementation_and_delivery: formData.implementationAndDelivery || {},
          reach_and_coverage: formData.reachAndCoverage || {},
          financial_overview: formData.financialOverview || {},
          student_certification: formData.studentCertification || {},
          outcomes_and_impact: formData.outcomesAndImpact || {},
          impact_analysis: formData.impactAnalysis || {},
          project_strengths: formData.projectStrengths || {},
          challenges_and_migration: formData.challengesAndMigration || {},
          key_outcomes: formData.keyOutcomes || {},
          conclusion: formData.conclusion || {},
          pdf_url: formData.pdfUrl || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      throw new Error(`Database error: ${error.message}`);
    }

    if (!data?.id) {
      throw new Error("No ID returned from database");
    }

    return {
      success: true,
      id: data.id,
      error: null,
    };
  } catch (error) {
    console.error("Error saving FLP Report submission:", error);
    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all FLP Report submissions for admin */
export const fetchAllFLPReports = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("flp_report")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      throw new Error(`Database error: ${error.message}`);
    }

    return {
      success: true,
      data: data || [],
      error: null,
    };
  } catch (error) {
    console.error("Error fetching FLP Report:", error);
    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};
