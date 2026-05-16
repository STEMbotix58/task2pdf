import supabase from "@/shared/utils/supabase";
import { useUserManualStore } from "@/features/user_manual/model/userManualStore";

/* Save user manual form data to Supabase */
export const saveUserManualSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }

    // Step 1 — Create user manual first to get ID
    const { data: createdManual, error: createError } = await supabase
      .from("user_manual")
      .insert([{ created_at: new Date().toISOString() }])
      .select("id")
      .single();

    if (createError) {
      console.error("Supabase insert error:", createError);
      throw new Error(`Database error: ${createError.message}`);
    }

    const manualId = createdManual.id;

    // Step 2 — Update the same manual with full data
    const manualState = useUserManualStore.getState();

    const { error: updateError } = await supabase
      .from("user_manual")
      .update({
        cover_page: manualState.coverPage || {},
        introduction: manualState.introduction || {},
        whats_in_the_kit: manualState.whatsInTheKit || [],
        hardware_setup: manualState.hardwareSetup || [],
        programming_setup: manualState.programmingSetup || [],
        safety_information: manualState.safetyInformation || {},
        troubleshooting_faq: manualState.troubleshootingFAQ || [],
        abbreviations: manualState.abbreviations || [],
        conclusion: manualState.conclusion || {},
        pdf_url: formData.pdfUrl || null,
        created_at: new Date().toISOString(),
      })
      .eq("id", manualId);

    if (updateError) {
      console.error("Supabase update error:", updateError);
      throw new Error(`Database error: ${updateError.message}`);
    }

    return {
      success: true,
      id: manualId,
      error: null,
    };
  } catch (error) {
    console.error("Error saving user manual submission:", error);

    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all user manual submissions for admin */
export const fetchAllUserManuals = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }

    const { data, error } = await supabase
      .from("user_manual")
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
    console.error("Error fetching user manuals:", error);

    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};
