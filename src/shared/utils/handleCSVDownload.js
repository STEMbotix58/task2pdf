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

    projectProposal: JSON.stringify({
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
      signatureImg: "https://example.com/signature.png",
    }),

    financialProposal: JSON.stringify([
      {
        particular: "STEM Kit Package",
        description: "Includes robotics kits, 3D printers, and accessories",
        amount: 100000,
        specification: "Per institution",
        boq: "1 Unit",
      },
      {
        particular: "Training Services",
        description: "Teacher training and onboarding sessions",
        amount: 20000,
        specification: "Per institution",
        boq: "1 Session",
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
      purchaseOrderNo: "PO12345",
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

    projectOverview: JSON.stringify({
      projectTitle: "STEM Learning Enhancement Program",
      implementingOrganization: "ABC Implementing Agency",
      partnerSponsor: "XYZ Foundation",
      projectDuration: "6 Months",
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

    beneficiaryProfile: JSON.stringify({
      totalBeneficiaries: 500,
      ageGroup: "11-16 years",
      genderDistribution: {
        female: 240,
        male: 250,
        other: 10,
      },
      educationBackground: "Secondary School Students",
      socioEconomicBackground: "Mixed income groups",
      geographicCoverage: "Urban and Semi-Urban Areas",
    }),

    baselineEndline: JSON.stringify([
      {
        parameter: "STEM Knowledge Score",
        baselineValue: 45,
        endlineValue: 70,
        percentChange: 55,
      },
    ]),

    quantitativeImpact: JSON.stringify({
      participantsTrained: 500,
      attendanceRate: 85,
      completionRate: 78,
      certificationsAchieved: 400,
      assessmentImprovement: 25,
    }),

    qualitativeImpact: JSON.stringify({
      confidenceImprovement:
        "Students showed improved confidence in problem-solving.",
      leadershipSkills: "Group activities enhanced leadership qualities.",
      teamwork: "Collaborative learning improved teamwork.",
      criticalThinking:
        "Students demonstrated better analytical and critical thinking.",
      testimonials:
        "Participants reported increased interest in STEM subjects.",
    }),

    learningOutcomes: JSON.stringify({
      technicalSkillsGained:
        "Basic robotics, 3D printing, and programming concepts.",
      softSkillsDeveloped: "Communication, teamwork, and critical thinking.",
      toolsPlatformsUsed: "STEM Kits, Simulation Software, Coding Platforms",
      handsOnLearningHours: 120,
    }),

    institutionalImpact: JSON.stringify({
      teacherCapacityBuilding: "Teachers trained to use STEM kits effectively.",
      infrastructureUse: "Existing labs utilized more efficiently.",
      curriculumEnhancement:
        "STEM activities integrated into regular teaching.",
      sustainabilityMeasures: "Schools encouraged to continue STEM practices.",
    }),

    socialImpact: JSON.stringify({
      inclusionAndEquity: "Equal participation across gender and backgrounds.",
      communityEngagement:
        "Parents and local communities involved in awareness sessions.",
      awarenessPrograms: "Workshops conducted on STEM importance.",
      digitalDivideReduction: "Improved access to digital learning tools.",
    }),

    economicImpact: JSON.stringify({
      employabilityEnhancement: "Students exposed to future-ready skills.",
      incomeOpportunities: "Awareness of STEM career opportunities increased.",
      costPerBeneficiary: "200 USD",
      roi: "High long-term educational impact",
    }),

    innovationImpact: JSON.stringify({
      newTechnologies: "Introduction to robotics, AI basics, and 3D printing.",
      innovationProjects: "Students developed small-scale working prototypes.",
      research: "Encouraged exploratory and project-based learning.",
    }),

    caseStudy: JSON.stringify({
      beneficiaryBackground:
        "Student from a non-technical background with limited exposure.",
      interventionDetails:
        "Participated in hands-on STEM workshops and training sessions.",
      outcomeAchieved:
        "Built a basic robotics project and improved academic performance.",
      testimonial:
        "The program helped me understand science in a practical way.",
    }),

    challengesAndLearnings: JSON.stringify({
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

    monitoringEvaluation: JSON.stringify({
      dataCollectionTools: "Surveys, assessments, attendance tracking",
      assessmentMethods: "Pre and post evaluation tests",
      monitoringFrequency: "Monthly",
    }),

    photographs: JSON.stringify([
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg",
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
