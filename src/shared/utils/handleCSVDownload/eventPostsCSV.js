import { generateCSV } from "./index";

export const handleEventPostsCSVDownload = () => {
  const row = {
    id: "EventPosts-001",
    college_name: "ABC College of Engineering",
    address: "123 Main Street, Cityville",
    event_date: "2024-10-15",
    event_time: "10:00",
    faculty_name: "Dr. John Doe",
    student_name: "Jane Smith",
    photos: JSON.stringify([
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "event_posts_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
