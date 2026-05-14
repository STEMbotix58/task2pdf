import supabase from "@/shared/utils/supabase";

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
    console.error("Error saving proposal submission:", error);
    return {
      success: false,
      id: null,
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
