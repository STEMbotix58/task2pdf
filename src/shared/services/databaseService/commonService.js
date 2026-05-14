import supabase from "@/shared/utils/supabase";

/* Fetch all delivery submissions for admin */
export const updatePdfUrl = async (table, id, pdfUrl) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }

    const { error } = await supabase
      .from(table)
      .update({ pdf_url: pdfUrl })
      .eq("id", id);

    if (error) {
      console.error(`Supabase update error for ${table}.pdf_url:`, error);
      throw new Error(`Failed to update PDF URL: ${error.message}`);
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Error updating PDF URL:", error);
    return {
      success: false,
      error: error.message || "Unknown error occurred",
    };
  }
};
