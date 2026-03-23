import supabase from "@/shared/utils/supabase";
import { useReportStore } from "@/features/report/model/reportStore";

/* Save delivery form data to Supabase */
export const saveDeliverySubmission = async (formData) => {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("delivery")
      .insert([
        {
          basic_info: formData.deliveryBasicInfo || {},
          school_delivery: formData.schoolDelivery || {},
          item_checklist: formData.itemChecklist || [],
          serial_numbers: formData.serialNumbers || {},
          verification: formData.verification || {},
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
    console.error("Error saving delivery submission:", error);
    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Save proposal form data to Supabase */
export const saveProposalSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("proposal")
      .insert([
        {
          proposal: formData.proposal || {},
          project_proposal: formData.projectProposal || {},
          spoc: formData.spoc || {},
          financial_proposal: formData.financialProposal || [],
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
    console.error("Error saving proposal submission:", error);
    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

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

/* Fetch all delivery submissions for admin */
export const fetchAllDeliveries = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("delivery")
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
    console.error("Error fetching deliveries:", error);
    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all proposal submissions for admin */
export const fetchAllProposals = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("proposal")
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
    console.error("Error fetching proposals:", error);
    return {
      success: false,
      data: [],
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
