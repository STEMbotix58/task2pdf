import { generateCSV } from "./index";

export const handleProjectCSVDownload = () => {
  const row = {
    id: "project-001",

    // BASIC INFO
    basic_info: JSON.stringify({
      date: "2025-05-13",
      stemLogo: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
      homeImages: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
      preparedBy: " ISTEM Collective Foundation",
      partnerLogo: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
      backPageImages: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
    }),

    // SUMMARY
    summary: JSON.stringify({
      description:
        "The ISTEM Collective Foundation, with a proven track record of installing over 150 STEM labs and 5 AmRit Anganwadis, and training over 2,000 students and 500 teachers, has successfully implemented two transformative educational projects, fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives include the establishment of AI and Robotics Labs in two schools and the setup of AmRit Anganwadi centers. The projects were inaugurated on March 31, 2025, by Hon’ble MLA Shri Mukesh Bhai Patel (Mehsana Constituency) in the gracious presence of Shri Sunil Chaudhary, Director of Haitian Huayuan Machinery (India) Pvt Ltd, other company members, and the District Education Officer. Aligned with the National Education Policy 2020 (NEP2020), these projects promote hands-on STEM education and interactive early childhood learning. This report details the project implementations, including lab setups, training programs, educational tools, and outcomes, with placeholders for photographs to document the work for submission to Haitian Huayuan Machinery (India) Pvt Ltd.",
      summaryImg: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
    }),

    // PREFACE (MULTIPLE)
    preface: JSON.stringify([
      {
        name: "SHRI MUKESH BHAI PATEL",
        image: [
          "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        ],
        designation: "HON’BLE MLA, MEHSANA CONSTITUENCY",
        testimonial:
          "It is a moment of pride for Mehsana to witness the inauguration of these state-of-the-art AI and Robotics Labs and AmRit Anganwadi centers, made possible through the generous support of Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives will empower our students and young children with cutting-edge skills, aligning with our vision of a progressive and technologically advanced Gujarat. I commend ISTEM Collective Foundation for their dedication to transforming education and fostering innovation in our community.",
      },
      {
        name: "SHRI SUNIL CHAUDHARY, DIRECTOR",
        image: [
          "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        ],
        designation: "HAITIAN HUAYUAN MACHINERY (INDIA) PVT LTD",
        testimonial:
          "At Haitian Huayuan Machinery (India) Pvt Ltd, we believe in investing in the future of our nation. Sponsoring these AI and Robotics Labs and AmRit Anganwadi centers reflects our commitment to nurturing young talent and promoting STEM education. We are honored to partner with ISTEM Collective Foundation and witness the transformative impact of these projects, which will equip the next generation with the tools to excel in a technology-driven world.",
      },
      {
        name: "DISTRICT EDUCATION OFFICER",
        image: [
          "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
        ],
        designation: "MEHSANA",
        testimonial:
          "The establishment of AI and Robotics Labs and AmRit Anganwadi centers in Mehsana marks a significant step toward modernizing education in our district. These facilities, funded by Haitian Huayuan Machinery (India) Pvt Ltd and executed by ISTEM Collective Foundation, align with NEP2020’s focus on experiential learning. We are confident that these projects will inspire creativity, critical thinking, and lifelong learning among our students and young learners.",
      },
    ]),

    // PROJECT
    project: JSON.stringify({
      image: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
      title: "AI and Robotics Lab and AmRit Anganwadi Projects",
      amount: 2018302.08,
      hardware: ["Sensors", "Actuator Interfaces", "Microcontrollers"],
      overview:
        "The establishment of AI and Robotics Labs and AmRit Anganwadi centers in Mehsana marks a significant step toward modernizing education in our district. These facilities, funded by Haitian Huayuan Machinery (India) Pvt Ltd and executed by ISTEM Collective Foundation, align with NEP2020’s focus on experiential learning. We are confident that these projects will inspire creativity, critical thinking, and lifelong learning among our students and young learners.",
      software: ["Simulation Environments"],
      roboticsKits: [
        "Starter, Intermediate",
        "Advanced, AI & IoT",
        "Humanoid",
        "3D Pens",
        "Mechanical Construction",
        "AR Kits",
      ],
      implementation:
        "To maximize student engagement, the project included: Robotics competitions to encourage innovation. AI hackathons to foster problem-solving. Public demonstrations to showcase student projects. These activities provided practical applications of the lab resources, enhancing students’ technical and collaborative skills.",
      infrastructure: [
        "Collaboration Spaces",
        "Furniture",
        "IT Infrastructure (Desktop Server, Thin Client Nodes)",
      ],
      outcomesImpact:
        "The AI and Robotics Labs have significantly enriched STEM education, equipping students with practical skills in robotics and AI. The project has cultivated a culture of innovation, collaboration, and career readiness, aligning with the goals of NEP2020 and preparing students for future technological advancements.",
    }),

    // PHOTOGRAPHS
    photographs: JSON.stringify([
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
    ]),

    // CONCLUSION
    conclusion: JSON.stringify({
      description:
        "The successful implementation of the AI and Robotics Lab and AmRit Anganwadi projects, fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd, underscores the ISTEM Collective Foundation’s commitment to advancing education through innovative, technology-driven solutions. The inauguration on March 31, 2025, by Hon’ble MLA Shri Mukesh Bhai Patel, in the presence of Shri Sunil Chaudhary and other dignitaries, marked a significant milestone in Mehsana’s educational landscape. These projects have exceeded their objectives, providing students and young children with transformative learning experiences and skills for the future. The foundation looks forward to furthering its mission of promoting STEM education and early childhood development in collaboration with partners and stakeholders.",
      conclusionImg: [
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      ],
    }),

    // CONTACT (SINGLE OBJECT)
    contact: JSON.stringify({
      name: "ISTEM COLLECTIVE FOUNDATION",
      address: "Shop No.E/310, Joyos Hub Town Mehsana",
      phone: "+91 96874 76525",
      email: "info@istemcf.org",
      website: "www.istemcf.org",
    }),

    // QR CODE (ARRAYS)
    qr_code_img: JSON.stringify([
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372931/stembotix/reports/qr-img-1777372930617/vqzgt3lfwrbeqgcktjcd.png",
    ]),
    qr_code_vid: JSON.stringify([
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372941/stembotix/reports/qr-video-1777372941532/ehpgft6k0cwhamzxarnv.png",
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_project_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
