import supabase from "@/shared/utils/supabase";

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
    console.error("Error saving delivery submission:", error);
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
