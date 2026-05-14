import supabase from "@/shared/utils/supabase";

/* Save event posts form data to Supabase */
export const saveEventPostsSubmission = async (formData) => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("event_posts")
      .insert([
        {
          college_name: formData.collegeName || "",
          address: formData.address || "",
          event_date: formData.eventDate || "",
          event_time: formData.eventTime || "",
          student_name: formData.studentName || "",
          faculty_name: formData.facultyName || "",
          photos: formData.photos || [],
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
    console.error("Error saving event posts submission:", error);
    return {
      success: false,
      id: null,
      error: error.message || "Unknown error occurred",
    };
  }
};

/* Fetch all Event Posts submissions for admin */
export const fetchAllEventPosts = async () => {
  try {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    const { data, error } = await supabase
      .from("event_posts")
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
    console.error("Error fetching Event Posts:", error);
    return {
      success: false,
      data: [],
      error: error.message || "Unknown error occurred",
    };
  }
};
