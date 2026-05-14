import supabase from "@/shared/utils/supabase";
import { useReportStore } from "@/features/report/model/reportStore";

/* Save report form data to Supabase */
export const saveReportSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }

    // Step 1 — Create report first to get ID
    const { data: createdReport, error: createError } = await supabase
      .from("report")
      .insert([{ created_at: new Date().toISOString() }])
      .select("id")
      .single();

    if (createError) {
      console.error("Supabase insert error:", createError);
      throw new Error(`Database error: ${createError.message}`);
    }

    const reportId = createdReport.id;
    const { photographs } = useReportStore.getState();

    // Step 3 — Update the same report with full data
    const { error: updateError } = await supabase
      .from("report")
      .update({
        project_overview: formData.projectOverview || {},
        objectives: formData.objectives || {},
        beneficiary_profile: formData.beneficiaryProfile || {},
        baseline_endline: formData.baselineEndline || [],
        quantitative_impact: formData.quantitativeImpact || {},
        qualitative_impact: formData.qualitativeImpact || {},
        learning_outcomes: formData.learningOutcomes || {},
        institutional_impact: formData.institutionalImpact || {},
        social_impact: formData.socialImpact || {},
        economic_impact: formData.economicImpact || {},
        innovation_impact: formData.innovationImpact || {},
        case_study: formData.caseStudy || {},
        challenges_and_learnings: formData.challengesAndLearnings || {},
        sustainability: formData.sustainability || {},
        monitoring_evaluation: formData.monitoringEvaluation || {},
        photographs: photographs || [],
        pdf_url: formData.pdfUrl || null,
        created_at: new Date().toISOString(),
      })
      .eq("id", reportId);

    if (updateError) {
      console.error("Supabase update error:", updateError);
      throw new Error(`Database error: ${updateError.message}`);
    }

    return {
      success: true,
      id: reportId,
      error: null,
    };
  } catch (error) {
    console.error("Error saving report submission:", error);

    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all report submissions for admin */
export const fetchAllReports = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("report")
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
    console.error("Error fetching reports:", error);
    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};
