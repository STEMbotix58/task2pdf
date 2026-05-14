import supabase from "@/shared/utils/supabase";
import { useProjectStore } from "@/features/project/model/projectStore";

/* Save project form data to Supabase */
export const saveProjectSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    // Step 1 — Create report first to get ID
    const { data: createdReport, error: createError } = await supabase
      .from("project")
      .insert([{ created_at: new Date().toISOString() }])
      .select("id")
      .single();

    if (createError) {
      console.error("Supabase insert error:", createError);
      throw new Error(`Database error: ${createError.message}`);
    }

    const projectId = createdReport.id;
    const { photographs } = useProjectStore.getState();

    // Step 3 — Update the same report with full data
    const { error: updateError } = await supabase
      .from("project")
      .update({
        basic_info: formData.basicInfo || {},
        summary: formData.summary || {},
        preface: formData.preface || [],
        project: formData.project || [],
        contact: formData.contact || {},
        conclusion: formData.conclusion || {},
        qr_code_img: formData.qrCodeImg || {},
        qr_code_vid: formData.qrCodeVid || {},
        photographs: photographs || [],
        pdf_url: formData.pdfUrl || null,
        created_at: new Date().toISOString(),
      })
      .eq("id", projectId);

    if (updateError) {
      console.error("Supabase update error:", updateError);
      throw new Error(`Database error: ${updateError.message}`);
    }

    return {
      success: true,
      id: projectId,
      error: null,
    };
  } catch (error) {
    console.error("Error saving project submission:", error);

    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all project submissions for admin */
export const fetchAllProjects = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("project")
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
