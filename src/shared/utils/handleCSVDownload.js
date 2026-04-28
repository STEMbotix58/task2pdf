const generateCSV = (row) => {
  const headers = Object.keys(row).join(",");

  const values = Object.values(row)
    .map((val) => `"${String(val).replace(/"/g, '""')}"`)
    .join(",");

  return `${headers}\n${values}`;
};

export const handleProposalCSVDownload = () => {
  const row = {
    id: "proposal-001",

    proposal: JSON.stringify({
      to: "XYZ Organization",
      subject: "Proposal for STEM Education Initiative",
      description:
        "This proposal outlines the implementation of STEM learning solutions in educational institutions to enhance practical knowledge and innovation.",
      date: "2024-02-01",
      salutation: "Dear Sir/Madam",
    }),

    project_proposal: JSON.stringify({
      title: "STEM Lab Implementation Program",
      intro:
        "The program focuses on setting up STEM labs and enabling hands-on learning for students through modern tools and technologies.",
      objectives: [
        {
          name: "Improve Practical Learning",
          description:
            "Provide students with real-world exposure through interactive STEM tools.",
        },
        {
          name: "Capacity Building",
          description:
            "Train educators to effectively utilize STEM resources in classrooms.",
        },
      ],
      provision: [
        {
          title: "Equipment Supply",
          content:
            "Provision of STEM kits including robotics modules, 3D printers, and computing devices.",
        },
        {
          title: "Training Program",
          content:
            "Workshops and training sessions for teachers and administrators.",
        },
      ],
    }),

    spoc: JSON.stringify({
      name: "Project Coordinator",
      designation: "Program Manager",
      email: "contact@example.com",
      phone: "9000000000",
      signatureImg:
        "https://images.unsplash.com/photo-1650619112959-7e1340365ce2?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw4fHxzaWduYXR1cmV8ZW58MHx8fHwxNzczODI1OTQ1fDA&ixlib=rb-4.1.0&fit=max&q=80",
    }),

    financial_proposal: JSON.stringify([
      {
        particular: "STEM Kit Package",
        description: "Includes robotics kits, 3D printers, and accessories",
        amount: 100000,
        specification: "Per institution",
        boq: "8",
      },
      {
        particular: "Training Services",
        description: "Teacher training and onboarding sessions",
        amount: 20000,
        specification: "Per institution",
        boq: "5",
      },
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_proposal_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleDeliveryCSVDownload = () => {
  const row = {
    id: "delivery-001",

    basic_info: JSON.stringify({
      date: "2024-01-01",
      subject: "Delivery of STEM Kits",
      purchaseOrderNo: "12345",
      purchaseOrderDate: "2024-01-01",
      projectName: "STEM Education Project",
    }),

    school_delivery: JSON.stringify({
      schoolName: "Example School",
      schoolAddress: "123 Main St",
      deliveredAndInstalledBy: "John Doe",
      deliveredByContactNo: "1234567890",
      receivedBy: "Jane Smith",
      receivedByContactNo: "0987654321",
    }),

    verification: JSON.stringify({
      schoolAuthorityName: "Alice Johnson",
      schoolAuthorityDesignation: "Principal",
      stembotixRepresentativeName: "Bob Brown",
      yuvaCoordinatorName: "Charlie Davis",
      verificationDate: "2024-01-02",
    }),

    serial_numbers: JSON.stringify({
      printers: ["SN12345", "SN12346"],
      laptops: ["SN54321", "SN54322"],
    }),

    item_checklist: JSON.stringify([
      { id: 1, itemName: "3D Printer", quantity: 2, received: true },
      { id: 2, itemName: "Laptop", quantity: 2, received: true },
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_delivery_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleReportCSVDownload = () => {
  const row = {
    id: "report-001",

    project_overview: JSON.stringify({
      projectTitle: "STEM Learning Enhancement Program",
      implementingOrganization: "ABC Implementing Agency",
      partnerSponsor: "XYZ Foundation",
      projectDuration: "6",
      location: "Multiple Schools - Urban Region",
      targetBeneficiaries: "Students (Grade 6–10)",
      problemStatement:
        "Limited access to practical STEM learning resources in schools.",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
    }),

    objectives: JSON.stringify({
      primaryObjectives:
        "Enhance STEM education through hands-on learning tools.",
      secondaryObjectives: "Improve teacher capability and student engagement.",
      shortTermOutcomes:
        "Increased participation and interest in STEM activities.",
      longTermOutcomes: "Improved academic performance and innovation mindset.",
      sdgAlignment: "SDG 4 - Quality Education",
    }),

    beneficiary_profile: JSON.stringify({
      totalBeneficiaries: 500,
      ageGroup: "11-16",
      genderDistribution: {
        female: 40,
        male: 40,
        other: 10,
      },
      educationBackground: "Secondary School Students",
      socioEconomicBackground: "Mixed income groups",
      geographicCoverage: "Urban and Semi-Urban Areas",
    }),

    baseline_endline: JSON.stringify([
      {
        parameter: "STEM Knowledge Score",
        baselineValue: 45,
        endlineValue: 70,
        percentChange: 55,
      },
    ]),

    quantitative_impact: JSON.stringify({
      participantsTrained: 500,
      attendanceRate: 85,
      completionRate: 78,
      certificationsAchieved: 400,
      assessmentImprovement: 25,
    }),

    qualitative_impact: JSON.stringify({
      confidenceImprovement:
        "Students showed improved confidence in problem-solving.",
      leadershipSkills: "Group activities enhanced leadership qualities.",
      teamwork: "Collaborative learning improved teamwork.",
      criticalThinking:
        "Students demonstrated better analytical and critical thinking.",
      testimonials:
        "Participants reported increased interest in STEM subjects.",
    }),

    learning_outcomes: JSON.stringify({
      technicalSkillsGained:
        "Basic robotics, 3D printing, and programming concepts.",
      softSkillsDeveloped: "Communication, teamwork, and critical thinking.",
      toolsPlatformsUsed: "STEM Kits, Simulation Software, Coding Platforms",
      handsOnLearningHours: 120,
    }),

    institutional_impact: JSON.stringify({
      teacherCapacityBuilding: "Teachers trained to use STEM kits effectively.",
      infrastructureUse: "Existing labs utilized more efficiently.",
      curriculumEnhancement:
        "STEM activities integrated into regular teaching.",
      sustainabilityMeasures: "Schools encouraged to continue STEM practices.",
    }),

    social_impact: JSON.stringify({
      inclusionAndEquity: "Equal participation across gender and backgrounds.",
      communityEngagement:
        "Parents and local communities involved in awareness sessions.",
      awarenessPrograms: "Workshops conducted on STEM importance.",
      digitalDivideReduction: "Improved access to digital learning tools.",
    }),

    economic_impact: JSON.stringify({
      employabilityEnhancement: "Students exposed to future-ready skills.",
      incomeOpportunities: "Awareness of STEM career opportunities increased.",
      costPerBeneficiary: "200",
      roi: "20",
    }),

    innovation_impact: JSON.stringify({
      newTechnologies: "Introduction to robotics, AI basics, and 3D printing.",
      innovationProjects: "Students developed small-scale working prototypes.",
      research: "Encouraged exploratory and project-based learning.",
    }),

    case_study: JSON.stringify({
      beneficiaryBackground:
        "Student from a non-technical background with limited exposure.",
      interventionDetails:
        "Participated in hands-on STEM workshops and training sessions.",
      outcomeAchieved:
        "Built a basic robotics project and improved academic performance.",
      testimonial:
        "The program helped me understand science in a practical way.",
    }),

    challenges_and_learnings: JSON.stringify({
      keyChallenges: "Initial resistance to adopting new teaching methods.",
      mitigationStrategies:
        "Conducted orientation sessions and continuous support.",
      lessonsLearned: "Hands-on learning significantly improves engagement.",
    }),

    sustainability: JSON.stringify({
      continuationPlan: "Schools to continue using provided STEM kits.",
      scalabilityPotential: "Model can be expanded to additional regions.",
      replicationPossibilities:
        "Framework can be adapted for different education systems.",
    }),

    monitoring_evaluation: JSON.stringify({
      dataCollectionTools: "Surveys, assessments, attendance tracking",
      assessmentMethods: "Pre and post evaluation tests",
      monitoringFrequency: "Monthly",
    }),

    photographs: JSON.stringify([
      "https://images.unsplash.com/photo-1509770293056-483fcbd13e30?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwxfHxTVEVNJTIwbGFifGVufDB8fHx8MTc3MzgyNTgxN3ww&ixlib=rb-4.1.0&fit=max&q=80",
      "https://unsplash.com/photos/woman-welding-grey-metal-plate-yctiRnbY7w4?utm_source=randomimage&utm_medium=referral",
      "https://images.unsplash.com/photo-1574803442176-70d4b465c920?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHxTVEVNJTIwbGFifGVufDB8fHx8MTc3MzgyNTgxN3ww&ixlib=rb-4.1.0&fit=max&q=80",
      "https://unsplash.com/photos/yellow-and-black-4-wheeled-robot-vehicle-toy-j2ExxxnN_w8?utm_source=randomimage&utm_medium=referral",
      "https://images.unsplash.com/photo-1586370392767-5ce4de129388?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwzfHxTVEVNJTIwbGFifGVufDB8fHx8MTc3MzgyNTgxN3ww&ixlib=rb-4.1.0&fit=max&q=80",
      "https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-wearing-eyeglasses-8gYNmkKh9f0?utm_source=randomimage&utm_medium=referral",
      "https://images.unsplash.com/photo-1766297248047-6ec337099802?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHw0fHxTVEVNJTIwbGFifGVufDB8fHx8MTc3MzgyNTgxN3ww&ixlib=rb-4.1.0&fit=max&q=80",
      "https://unsplash.com/photos/scientist-holding-flask-with-liquid-in-laboratory-oCAsj5Tslic?utm_source=randomimage&utm_medium=referral",
    ]),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sample_report_data_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleProjectCSVDownload = () => {
  const row = {
    id: "project-001",

    // BASIC INFO
    basic_info: JSON.stringify({
      date: "2025-05-13",
      stemLogo: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372020/stembotix/reports/kadi-report/basic-info-1777372020784/uf7ecs1ivclloxrmlhcn.png",
      ],
      homeImages: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372029/stembotix/reports/kadi-report/basic-info-1777372028427/r1kcvf7mrmty1ax0yan7.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372031/stembotix/reports/kadi-report/basic-info-1777372028427/jc2jmvlholwjifetlvot.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372030/stembotix/reports/kadi-report/basic-info-1777372028427/nalb4pyany4x0ym5xspr.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372030/stembotix/reports/kadi-report/basic-info-1777372028427/y3qah5quufztqiobsy8q.jpg",
      ],
      preparedBy: " ISTEM Collective Foundation",
      partnerLogo: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372016/stembotix/reports/kadi-report/basic-info-1777372015240/ctlafqahnxw5j4oj5hia.png",
      ],
      backPageImages: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372035/stembotix/reports/kadi-report/basic-info-1777372034957/kqtmwskiyyktymjtpbo0.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372035/stembotix/reports/kadi-report/basic-info-1777372034957/whoh2yur8qsfrnheagob.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372035/stembotix/reports/kadi-report/basic-info-1777372034957/l3odzapa7crihbo44kom.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372035/stembotix/reports/kadi-report/basic-info-1777372034957/stkajhjpw7cqloc65meh.jpg",
      ],
    }),

    // SUMMARY
    summary: JSON.stringify({
      description:
        "The ISTEM Collective Foundation, with a proven track record of installing over 150 STEM labs and 5 AmRit Anganwadis, and training over 2,000 students and 500 teachers, has successfully implemented two transformative educational projects, fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives include the establishment of AI and Robotics Labs in two schools and the setup of AmRit Anganwadi centers. The projects were inaugurated on March 31, 2025, by Hon’ble MLA Shri Mukesh Bhai Patel (Mehsana Constituency) in the gracious presence of Shri Sunil Chaudhary, Director of Haitian Huayuan Machinery (India) Pvt Ltd, other company members, and the District Education Officer. Aligned with the National Education Policy 2020 (NEP2020), these projects promote hands-on STEM education and interactive early childhood learning. This report details the project implementations, including lab setups, training programs, educational tools, and outcomes, with placeholders for photographs to document the work for submission to Haitian Huayuan Machinery (India) Pvt Ltd.",
      summaryImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372048/stembotix/reports/kadi-report/summary1777372048136/uqmfxpw2brszdry7frzc.jpg",
      ],
    }),

    // PREFACE (MULTIPLE)
    preface: JSON.stringify([
      {
        name: "SHRI MUKESH BHAI PATEL",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372059/stembotix/reports/kadi-report/preface-1777372059665/fhx96y3rtk6y9nai4nw5.jpg",
        ],
        designation: "HON’BLE MLA, MEHSANA CONSTITUENCY",
        testimonial:
          "It is a moment of pride for Mehsana to witness the inauguration of these state-of-the-art AI and Robotics Labs and AmRit Anganwadi centers, made possible through the generous support of Haitian Huayuan Machinery (India) Pvt Ltd. These initiatives will empower our students and young children with cutting-edge skills, aligning with our vision of a progressive and technologically advanced Gujarat. I commend ISTEM Collective Foundation for their dedication to transforming education and fostering innovation in our community.",
      },
      {
        name: "SHRI SUNIL CHAUDHARY, DIRECTOR",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372066/stembotix/reports/kadi-report/preface-1777372066274/unjb70bdgvo8i5allysy.jpg",
        ],
        designation: "HAITIAN HUAYUAN MACHINERY (INDIA) PVT LTD",
        testimonial:
          "At Haitian Huayuan Machinery (India) Pvt Ltd, we believe in investing in the future of our nation. Sponsoring these AI and Robotics Labs and AmRit Anganwadi centers reflects our commitment to nurturing young talent and promoting STEM education. We are honored to partner with ISTEM Collective Foundation and witness the transformative impact of these projects, which will equip the next generation with the tools to excel in a technology-driven world.",
      },
      {
        name: "DISTRICT EDUCATION OFFICER",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372072/stembotix/reports/kadi-report/preface-1777372072691/dtly8gbnturjgmw7wimv.jpg",
        ],
        designation: "MEHSANA",
        testimonial:
          "The establishment of AI and Robotics Labs and AmRit Anganwadi centers in Mehsana marks a significant step toward modernizing education in our district. These facilities, funded by Haitian Huayuan Machinery (India) Pvt Ltd and executed by ISTEM Collective Foundation, align with NEP2020’s focus on experiential learning. We are confident that these projects will inspire creativity, critical thinking, and lifelong learning among our students and young learners.",
      },
    ]),

    // PROJECT
    project: JSON.stringify({
      image: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372186/stembotix/reports/kadi-report/project-image-1777372183454/xd6lxpm7feol3l37jnh6.jpg",
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
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372289/stembotix/reports/kadi-report/photographs1777372288519/xsimofz0z0ulmxtz34oz.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372289/stembotix/reports/kadi-report/photographs1777372288519/kuz6gxy4sh8plczlqjfa.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372288/stembotix/reports/kadi-report/photographs1777372288519/b8vyzqwcz4qwb50el2pn.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372288/stembotix/reports/kadi-report/photographs1777372288519/ac0fsdunmbalue89phkx.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372290/stembotix/reports/kadi-report/photographs1777372288519/toro7wpxxscpwcs7ni3m.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372291/stembotix/reports/kadi-report/photographs1777372288519/lmxgzjbf9kwfuwssohwu.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372289/stembotix/reports/kadi-report/photographs1777372288519/xjxhfip4mg6krbhwvcmk.jpg",
      "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372289/stembotix/reports/kadi-report/photographs1777372288519/ewqykoophyktxzwbn2zl.jpg",
    ]),

    // CONCLUSION
    conclusion: JSON.stringify({
      description:
        "The successful implementation of the AI and Robotics Lab and AmRit Anganwadi projects, fully sponsored by Haitian Huayuan Machinery (India) Pvt Ltd, underscores the ISTEM Collective Foundation’s commitment to advancing education through innovative, technology-driven solutions. The inauguration on March 31, 2025, by Hon’ble MLA Shri Mukesh Bhai Patel, in the presence of Shri Sunil Chaudhary and other dignitaries, marked a significant milestone in Mehsana’s educational landscape. These projects have exceeded their objectives, providing students and young children with transformative learning experiences and skills for the future. The foundation looks forward to furthering its mission of promoting STEM education and early childhood development in collaboration with partners and stakeholders.",
      conclusionImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777372225/stembotix/reports/kadi-report/conclusion1777372223701/apvjrx3qljbtnmmmvpgy.jpg",
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

export const handleSTEMLabReportCSVDownload = () => {
  const row = {
    id: "STEMReport-001",

    // BASIC INFO
    basic_info: JSON.stringify({
      projectTitle: "STEM LAB Report",
      stemLogo: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
      partnerLogo: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
      preparedBy: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
      homeImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
      backPageImages: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // Preface (ARRAY)
    preface: JSON.stringify([
      {
        description:
          "In the third phase, logistics and on-site delivery were executed efficiently to ensure that all equipment reached the selected schools in a timely and secure manner.",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
      {
        description:
          "Close coordination with school authorities facilitated smooth delivery, unloading, and storage of materials.",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
      {
        description:
          "Proper handling procedures were followed to ensure the safety and integrity of all equipment during transit and at the site.",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
    ]),

    // PHASE (ARRAY)
    phase: JSON.stringify([
      {
        title: "SITE SURVEY & PLANNING",
        description: `In the first phase, a comprehensive site survey and planning exercise was conducted across 50 schools to assess their readiness for STEM Lab implementation. This included evaluating infrastructure, space availability, electrical requirements, and overall feasibility. Detailed discussions were held with school authorities to understand their specific needs and challenges. Based on the findings and predefined selection criteria, 30 schools were finalized for the project.`,
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
      {
        title: "PROCUREMENT & MATERIAL READINESS",
        description: `The second phase focused on procurement and material readiness, where high-quality STEM equipment and resources were sourced in alignment with the project objectives. Vendor coordination was carried out to ensure timely procurement, while rigorous quality checks were implemented to maintain standards. Materials were systematically organized and managed to support smooth deployment across all locations.`,
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
      {
        title: "LOGISTICS & ON-SITE DELIVERY",
        description: `In the third phase, logistics and on-site delivery were executed efficiently to ensure that all equipment reached the selected schools in a timely and secure manner. 
Close coordination with school authorities facilitated smooth delivery, unloading, and storage of materials. 
Proper handling procedures were followed to ensure the safety and integrity of all equipment during transit and at the site.`,
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
      {
        title: "SITE PREPARATION & INSTALLATION",
        description: `The final phase involved site preparation and installation, where designated lab spaces were developed as per the approved layouts and technical specifications. 
Equipment, workstations, and IT infrastructure were installed and configured, including laptops and relevant software for coding and simulation. Comprehensive testing and calibration were conducted to ensure that all systems were fully functional and ready for use. 
Overall, this phased implementation approach ensured the successful establishment of fully operational STEM Labs, enabling schools to adopt experiential, technology-driven learning environments effectively.`,
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        ],
      },
    ]),

    // OUTCOMES
    outcomes: JSON.stringify({
      description: `The project successfully established 30 fully functional STEM Labs across Jaipur and Mumbai, providing students with access to modern, technology-enabled learning environments that support interactive and experiential education. These labs have significantly enhanced student engagement, curiosity, and participation in STEM subjects by shifting from traditional learning methods to hands-on, activity-based approaches.
Through regular use of the labs, students have gained practical exposure to robotics, coding, electronics, and emerging technologies, enabling them to develop strong analytical thinking, problem-solving abilities, and technical skills. The initiative has also fostered a culture of innovation and creativity, encouraging students to design, develop, and showcase their own projects while applying theoretical concepts to real-world scenarios.
In the future, the program aims to further strengthen collaboration, teamwork, and student engagement through advanced activities, competitions, and projectbased learning. It will continue to enhance students’ confidence, communication, and presentation skills by providing more opportunities for demonstrations and knowledge-sharing. The initiative also seeks to expand its reach and deepen its impact, contributing to the development of future-ready learners and supporting long-term academic and career growth in technology-driven fields.`,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // PROJECT
    project: JSON.stringify({
      objective: `The STEM Lab Project, funded by Deutsche Bank, supported by Yuva Unstoppable, and implemented by STEMbotix Private Limited, has successfully established 30 STEM labs across India (20 in Jaipur and 10 in Mumbai).
With an investment of ₹13,219,740.00 and a project duration from January 2026 to March 2026, the project aims to enhance STEM education and foster innovation among students. 
This report highlights the project's objectives, implementation, key outcomes, and impact analysis.`,
      description:
        "The project works to strengthen learning in STEM by bringing richer lessons into classrooms and supporting schools as they build stronger science, technology, engineering, and math programs. It encourages fresh ideas and thoughtful problem-solving, giving students a space where they can explore, experiment, and learn through real experiences. Students gain direct exposure to tools and activities that spark curiosity, while schools receive modern STEM labs that help inspire interest in future STEM paths.",
      projectImg: [
        "https://images.unsplash.com/photo-1574803442176-70d4b465c920",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // IMPACT ANALYSIS
    impact_analysis: JSON.stringify({
      objective:
        "The STEM Lab Project has created a significant and multi-dimensional impact across students, teachers, schools, and the broader community.",
      impacts: [
        {
          title: "Student Learning",
          description:
            "The initiative has improved students' understanding of STEM concepts through hands-on and experiential learning, enabling better retention, critical thinking, and practical application of knowledge.",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          ],
        },
        {
          title: "Teacher Capacity",
          description:
            "Teachers have enhanced their instructional capabilities by adopting modern STEM methodologies, digital tools, and activity-based teaching approaches, leading to more effective classroom delivery.",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          ],
        },
        {
          title: "School Environment",
          description:
            "The establishment of STEM Labs has transformed traditional classrooms into innovative, technology-enabled learning spaces that encourage creativity, experimentation, and collaborative learning.",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          ],
        },
        {
          title: "Community Engagement",
          description:
            "The project has increased awareness and interest in STEM education among parents and the local community, fostering a supportive ecosystem for continuous learning and innovation.",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
          ],
        },
      ],
    }),

    // Lab Setup
    lab_setup_and_components: JSON.stringify({
      description: `Each STEM Lab has been thoughtfully designed and equipped with a comprehensive suite of advanced tools and resources to facilitate experiential and technology-driven learning. The setup includes DIY and robotics kits that enable students to design and program innovative solutions, along with 3D printers that support prototyping and hands-on product development.
The labs are further strengthened with fully equipped electronics workstations, allowing students to explore circuit design and real-world applications of engineering concepts. In addition, a range of science experiment kits and models has been provided to enhance conceptual understanding across maths, physics, chemistry, and biology.
To support digital learning, laptops integrated with relevant software for coding, simulation, and artificial intelligence have been deployed, creating an interactive and future-ready learning environment. `,
      labImg: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // Implementation Milestone
    implementation_and_milestones: JSON.stringify({
      description: `The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools. Each phase was carefully designed to address critical aspects of deployment, from initial assessment to final installation and operational readiness.
The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools. 
Each phase was carefully designed to address critical aspects of deployment, from initial assessment to final installation and operational readiness.
The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools.`,
      implementationImg: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // Strengths
    strengths: JSON.stringify({
      description: `The success of the STEM Lab Project is underpinned by strong and strategic partnerships between Deutsche Bank, Yuva Unstoppable, and STEMbotix Private Limited, which ensured effective coordination, resource alignment, and seamless execution across all project phases.
The initiative is further strengthened by the establishment of well-equipped STEM Labs featuring high-quality, standardized equipment designed to support experiential and technology-driven learning. Complementing this infrastructure, comprehensive training programs for teachers and students have enhanced instructional delivery and facilitated the adoption of modern STEM pedagogies.
A dedicated and proficient project management team played a critical role in ensuring timely implementation, maintaining quality standards, and addressing onground challenges efficiently. The project has also received positive feedback from participating schools and key stakeholders, reflecting its relevance, effectiveness, and overall impact in advancing STEM education.`,
      strengthsImg: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // CHALLENGES
    challenges_and_mitigation: JSON.stringify({
      description: `The implementation of the STEM Lab Project encountered certain operational and adoption-related challenges, which were effectively addressed through strategic planning and timely interventions. 
One of the key challenges was managing logistical complexities in the transportation and delivery of equipment across multiple locations. This was mitigated through proactive coordination, detailed route planning, and efficient scheduling to ensure timely and safe delivery of materials.
Another challenge involved the initial hesitation among teachers in adopting new STEM methodologies and technology-driven teaching practices. This was addressed by conducting comprehensive training programs, hands-on workshops, and providing continuous support to build confidence and facilitate smooth integration into classroom teaching.`,
      challengesImg: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s",
      ],
    }),

    // CONCLUSION
    conclusion: `The successful implementation of the STEM Lab Project represents a significant milestone in advancing technology-enabled education across Jaipur and Mumbai. Through the collaborative efforts of Deutsche Bank, Yuva Unstoppable, and STEMbotix Private Limited, the initiative has effectively created access to high-quality STEM learning infrastructure and experiential education for students.
By integrating modern tools, innovative methodologies, and hands-on learning approaches, the project has enhanced student engagement, strengthened teacher capabilities, and fostered a culture of innovation and problem-solving within schools. The positive response from students, educators, and stakeholders reflects the relevance and impact of the initiative in transforming traditional learning environments into dynamic, future-ready spaces.
Aligned with the vision of the National Education Policy 2020 (NEP 2020), the project has laid a strong foundation for nurturing critical thinking, creativity, and technological skills among learners. Moving forward, the initiative holds strong potential for scalability and long-term sustainability, contributing meaningfully to the development of a skilled and future-ready generation.`,
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "stemlab_report_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const handleFLPReportCSVDownload = () => {
  const row = {
    id: "FLPReport-001",

    // BASIC INFO
    basic_info: JSON.stringify({
      projectTitle: "FINANCIAL LITERACY PROGRAM",
      partners: [
        {
          title: "Tata Capital Limited",
          description:
            "A leading financial services provider committed to promoting financial inclusion and literacy across India. Their support makes this program possible. To empower individuals through financial education.",
        },
        {
          title: "Yuva Unstoppable",
          description:
            "A dynamic youth organization dedicated to improving the lives of underprivileged children and communities through education and empowerment programs. Mission: To drive positive social change through youth leadership.",
        },
      ],
      objective:
        "This report details the Financial Literacy Program, a joint initiative by Tata Capital Limited and Yuva Unstoppable, aimed at empowering students with essential financial knowledge and skills.",
      stemLogo: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // SUMMARY
    summary: JSON.stringify({
      description: `The Financial Literacy Program is a large-scale hybrid initiative presented by Tata Capital Limited and delivered by Yuva Unstoppable, aimed at empowering 50,000 students with essential financial life skills. The program focuses on bridging the gap between theoretical knowledge and real-world financial practices, enabling students to make informed and responsible financial decisions. 
Implemented across Gujarat and Maharashtra, the initiative promotes a culture of smart saving, disciplined spending, and financial independence. Aligned with the National Education Policy 2020 (NEP 2020), the program integrates life skills and financial literacy into the school ecosystem, preparing students for real-world financial challenges.`,
      summaryImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // OBJECTIVE
    objective: JSON.stringify({
      description: `The program is designed to develop financially aware and responsible individuals by equipping students with essential knowledge, skills, and attitudes required for effective financial decision-making. It focuses on building a strong foundation of healthy financial habits, encouraging students to adopt practices such as saving regularly, managing expenses wisely.
In addition, the program provides practical financial knowledge by introducing students to key concepts such as banking systems, digital financial tools including UPI and ATM usage, and the fundamentals of saving and investment. This ensures that students are not only theoretically aware but also capable of applying these concepts in real-life situations. 
The initiative also emphasizes risk awareness, educating students about financial fraud, cyber security, and safe digital practices. By understanding potential risks and preventive measures, students are better prepared to protect themselves in an increasingly digital financial ecosystem. 
The program incorporated digital learning integration by onboarding students onto the STEMbotix LMS and Dhangyan portal, providing them with continuous access to structured financial literacy content. This enabled students to engage in self-paced learning beyond classroom sessions, reinforcing their understanding of key concepts through digital modules and assessments. The use of these platforms enhanced overall engagement, supported consistent learning, and ensured better retention of financial knowledge over time. 
Furthermore, the program aligns with the National Education Policy 2020 (NEP 2020) by integrating financial literacy and life skills into the learning process. It supports the development of responsible, informed, and future-ready individuals who can effectively navigate financial challenges and opportunities in their personal and professional live.`,
      objectiveImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // IMPLEMENTATION & DELIVERY
    implementation_and_delivery: JSON.stringify({
      description: `The Financial Literacy Program was implemented through a structured and student-centric approach to ensure effective learning, engagement, and measurable outcomes. The delivery model combined interactive teaching methodologies with practical exposure to real-world financial concepts, making the learning process both engaging and impactful.
The program was conducted through interactive classroom sessions, where trained facilitators used simplified explanations, reallife examples, and storytelling techniques to make complex financial concepts easy to understand. This approach helped students relate theoretical knowledge to their everyday lives, improving comprehension and retention. 
To ensure experiential learning, the program incorporated activitybased and participatory methods, encouraging students to actively engage in discussions, exercises, and practical scenarios. Topics such as budgeting, saving, digital payments, and financial planning were demonstrated through real-life case studies and simulations.
A key component of the program was the use of pre- and postassessments to evaluate students’ baseline knowledge and measure learning outcomes. This structured assessment framework enabled the tracking of progress and ensured that the program delivered tangible educational impact.
The program also provided practical exposure to financial tools and systems, including demonstrations of UPI transactions, ATM usage, and basic banking processes. This hands-on approach enhanced students’ confidence in handling real-world financial activities.
In addition to in-person sessions, students were onboarded onto the STEMbotix LMS and Dhangyan portal, providing them with access to structured digital learning content, assessments, and continuous learning resources. This blended approach ensured sustained engagement, self-paced learning, and better reinforcement of financial concepts beyond the classroom.`,
      implementationAndDeliveryImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // REACH & COVERAGE
    reach_and_coverage: JSON.stringify({
      description: `The Financial Literacy Program achieved a significant scale of implementation, successfully reaching a total of 50,000 students across two major states, demonstrating both its wide outreach and effective execution.
The program was extensively implemented in Maharashtra, where it impacted 36,000 students across 87 schools, making it the primary region of intervention. In Gujarat, the program reached 14,000+ students across 45 schools, further expanding its footprint and ensuring broader access to financial education.
This extensive coverage across 132 schools enabled the program to cater to students from diverse socio-economic and educational backgrounds. By reaching both urban and semi-urban regions, the initiative ensured inclusivity and equal access to essential financial literacy skills.`,
      reachAndCoverageImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // FINANCIAL OVERVIEW
    financial_overview: JSON.stringify({
      description: `The Financial Literacy Program was implemented with a well-planned and structured financial framework to ensure effective execution, scalability, and quality delivery across all locations. The budget allocation was strategically designed to cover program delivery, training, resource development, logistics, and monitoring activities.
The total program investment amounted to ₹42.49 lakh, distributed across two states based on the scale of implementation and number of beneficiaries. Maharashtra accounted for the larger share of the budget, with an allocation of ₹30.59 lakh, corresponding to its wider coverage of 36,000 students across 87 schools. Gujarat was allocated ₹11.90 lakh, supporting the implementation for over 14,000 students across 45 schools.
The financial resources were utilized to support key components of the program, including the development of learning materials, facilitator training, execution of interactive sessions, assessment processes, and on-ground coordination. Additionally, funds were allocated towards logistics, program management, and monitoring mechanisms to ensure smooth and efficient implementation.`,
      financialOverviewImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // STUDENT CERTIFICATION
    student_certification: JSON.stringify({
      description: `Elemented to recognize and validate students’ participation and learning outcomes. Certificates were awarded to students upon successful completion of the program, serving as an acknowledgment of their engagement and understanding of key financial concepts.
The certification was designed not only as a form of recognition but also as a motivational tool to encourage active participation and commitment throughout the program. It reinforced the importance of financial literacy as an essential life skill and provided students with a sense of achievement and confidence in their newly acquired knowledge.`,
      studentCertificationImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // OUTCOMES & IMPACT
    outcomes_and_impact: JSON.stringify({
      description: `The Program has generated a significant and measurable impact by strengthening students’ financial awareness, practical understanding, and decision-making abilities. By combining theoretical knowledge with real-life applications, the program has successfully bridged the gap between classroom learning and everyday financial practices.
One of the key outcomes of the initiative is the improvement in financial awareness among students, enabling them to understand fundamental concepts such as saving, budgeting, and responsible spending. Students are now better equipped to manage their personal finances and make informed choices regarding money.
The onboarding of students onto the STEMbotix LMS and Dhangyan portal further strengthened the program’s impact by enabling continuous learning, easy access to educational content, and improved tracking of student progress. It enhanced digital learning adoption and reinforced financial concepts through structured online modules and assessments.
The program has also enhanced students’ practical understanding of financial systems, including banking processes, digital payment methods such as UPI and ATM usage, and basic investment concepts. This exposure has increased their confidence in handling real-world financial transactions and using digital financial tools safely and effectively.
In addition, the initiative has contributed to the development of responsible financial behavior, encouraging students to adopt disciplined saving habits, plan their expenses, and set financial goals. The emphasis on financial discipline has helped in still long-term habits that support economic independence.
The program has further strengthened risk awareness, educating students about financial fraud, cyber security, and safe digital practices. As a result, students are more cautious and informed when engaging with financial systems, reducing their vulnerability to potential risks.`,
      outcomesAndImpactImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // IMPACT ANALYSIS
    impact_analysis: JSON.stringify({
      objective:
        "The Financial Literacy Program has created a multi-dimensional impact across students, educators, institutions, and the broader community by strengthening financial awareness and promoting responsible financial behavior.",
      studentLearning:
        "The program has significantly enhanced students’ understanding of financial concepts through interactive and experiential learning approaches. Students demonstrated improved comprehension of saving, budgeting, digital payments, and basic investment principles, along with increased confidence in applying this knowledge in real-life situations.",
      studentLearningImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
      behavioralChange:
        "A notable shift in financial behavior has been observed, with students adopting healthier financial habits such as saving regularly, planning expenses, and making informed spending decisions. The program has contributed to developing a sense of financial responsibility and longterm thinking among students.",
      behavioralChangeImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
      digitalFinancialAwareness:
        "Students have gained familiarity with modern financial systems, including banking processes, PI, ATM usage, and online transactions. Additionally, awareness of cyber safety and fraud prevention has strengthened their ability to navigate digital financial platforms securely.",
      digitalFinancialAwarenessImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
      digitalLearningAdoption:
        "The integration of the STEMbotix LMS and Dhangyan portal promoted digital learning practices, enabling students to access content anytime and enhancing engagement through technology-driven education.",
      digitalLearningAdoptionImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
      communityEngagement:
        "The program has extended its impact beyond classrooms, as students share their knowledge with families and communities, contributing to increased awareness and adoption of responsible financial practices at the grassroots level. The program has contributed to multiple dimensions of educational and behavioral development.",
      communityEngagementImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // PROJECT STRENGTHS
    project_strengths: JSON.stringify({
      description: `The Financial Literacy Program is supported by several key strengths that have contributed to its successful implementation and large-scale impact.
The initiative is built on a strong partnership between Tata Capital Limited and Yuva Unstoppable, ensuring strategic alignment, effective coordination, and efficient execution across all phases of the program. This collaboration has enabled the program to achieve wide outreach while maintaining quality and consistency.
A major strength of the program lies in its structured and scalable delivery model, which allows for uniform implementation across multiple schools and regions. The use of standardized content and methodologies ensures that all students receive a consistent and high-quality learning experience. The program adopts an interactive and experiential learning approach, incorporating real-life examples, storytelling, and practical demonstrations. This makes complex financial concepts easy to understand and relatable.
The integration of digital platforms such as the STEMbotix LMS and Dhangyan portal enhanced program delivery by enabling blended learning, continuous access to content, and effective tracking of student progress.
Another key strength is the robust assessment framework, including pre and post-evaluations, which helps measure learning outcomes and track student progress effectively. This ensures that the program delivers measurable and meaningful impact.
Additionally, the initiative benefits from a dedicated implementation and facilitation team, which ensures smooth execution, timely delivery, and continuous support to schools and students. The positive feedback from participants, educators, and stakeholders further highlights the program’s effectiveness and relevance.`,
      projectStrengthsImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // CHALLENGES
    challenges_and_migration: JSON.stringify({
      description: `The implementation of the Financial Literacy Program, given its large scale and diverse reach, presented certain challenges that were effectively addressed through proactive planning and adaptive strategies.
One of the primary challenges was managing diverse learning levels among students, as participants came from varied academic and socio-economic backgrounds. This was addressed by adopting simplified content.Another challenge involved the initial difficulty in grasping financial concepts, especially for students with limited prior exposure to banking and financial systems. To overcome this, facilitators employed interactive teaching techniques such as storytelling.
The program also encountered a language barrier in certain regions, where students were more comfortable with local languages. This challenge was effectively mitigated by trainers adapting their delivery and explaining concepts in the local language, ensuring better comprehension, engagement, and inclusivity.
Ensuring consistent student engagement across large groups was another key challenge during program delivery. This was addressed by incorporating participatory methods, discussions, quizzes, and practical demonstrations to maintain interest and encourage active involvement.`,
      challengesAndMigrationImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // KEY OUTCOMES
    key_outcomes: JSON.stringify({
      description: `The Financial Literacy Program has delivered impactful outcomes by enhancing financial wareness, practical knowledge, and responsible behavior among students at scale.
The program successfully reached 50,000 students across Maharashtra and Gujarat, ensuring widespread access to essential financial education and life skills. This large-scale outreach demonstrates the program’s effectiveness and scalability in diverse educational settings.
Students were successfully onboarded onto the STEMbotix LMS and Dhangyan portal, enabling continuous digital learning and improved access to financial literacy resources. 
Students developed a strong understanding of core financial concepts, including saving, budgeting, digital payments, and basic investment principles. The combination of theoretical learning and practical exposure enabled them to confidently apply these concepts in real-life situations.
A significant outcome of the program has been the development of responsible financial habits, with students demonstrating improved discipline in saving, mindful spending, and financial planning. This behavioral shift is expected to have long-term positive effects on their financial well-being.`,
      keyOutcomesImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),

    // CONCLUSION
    conclusion: JSON.stringify({
      description: `The Financial Literacy Program has emerged as a highly impactful initiative in equipping students with essential life skills required for informed and responsible financial decision-making. Through its largescale implementation across Maharashtra and Gujarat, the program has successfully bridged the gap between theoretical knowledge and practical financial application, reaching 50,000 students across diverse educational settings.
By adopting an interactive and experiential learning approach, the initiative has enhanced students’ understanding of key financial concepts such as saving, budgeting, digital payments, and financial safety. It has also fostered responsible financial behavior, improved confidence in handling everyday financial decisions, and encouraged the adoption of healthy financial habits at an early age.
The inclusion of digital platforms such as the STEMbotix LMS and Dhangyan portal further strengthened the program by enabling scalable, technology-driven learning and continuous student engagement beyond classroom sessions. 
Aligned with the vision of the National Education Policy 2020 (NEP 2020), the program contributes to the development of financially literate, aware, and future-ready individuals. The strong partnership between Tata Capital Limited and Yuva Unstoppable, along with a structured delivery model, has ensured effective implementation and measurable impact.
Overall, the program demonstrates strong potential for scalability and long-term sustainability, contributing meaningfully to building a financially responsible generation and supporting broader socioeconomic development.`,
      conclusionImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
    }),
  };

  const csv = generateCSV(row);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "flp_report_template.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
