import supabase from "@/shared/utils/supabase";

/* Save STEMLab Report form data to Supabase */
export const saveSTEMLabReportSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("stemlab_report")
      .insert([
        {
          basic_info: formData.basicInfo || {},
          preface: formData.preface || [],
          phase: formData.phase || [],
          outcomes: formData.outcomes || {},
          project: formData.project || {},
          impact_analysis: formData.impactAnalysis || {},
          lab_setup_and_components: formData.labSetupAndComponents || {},
          implementation_and_milestones:
            formData.implementationAndMilestones || {},
          strengths: formData.strengths || {},
          challenges_and_mitigation: formData.challengesAndMitigation || {},
          conclusion: formData.conclusion || "",
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
    console.error("Error saving STEMLab Report submission:", error);
    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all STEMLab Reports submissions for admin */
export const fetchAllSTEMLabReports = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("stemlab_report")
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
    console.error("Error fetching STEMLab Report:", error);
    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};
