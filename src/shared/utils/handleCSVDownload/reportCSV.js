import { generateCSV } from "./index";

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
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
      "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
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
