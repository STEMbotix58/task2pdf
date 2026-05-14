import { generateCSV } from "./index";

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
        "https://dreamparknj.com/wp-content/uploads/2016/10/400x400-image.jpg",
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
