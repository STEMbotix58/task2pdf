import { generateCSV } from "./index";

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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777611917/stembotix/reports/flp-report/basic-info1777611915824/u2rr0ybbiw3pa6u1grvt.png",
      ],
    }),

    // SUMMARY
    summary: JSON.stringify({
      description: `The Financial Literacy Program is a large-scale hybrid initiative presented by Tata Capital Limited and delivered by Yuva Unstoppable, aimed at empowering 50,000 students with essential financial life skills. The program focuses on bridging the gap between theoretical knowledge and real-world financial practices, enabling students to make informed and responsible financial decisions. 
Implemented across Gujarat and Maharashtra, the initiative promotes a culture of smart saving, disciplined spending, and financial independence. Aligned with the National Education Policy 2020 (NEP 2020), the program integrates life skills and financial literacy into the school ecosystem, preparing students for real-world financial challenges.`,
      summaryImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777611947/stembotix/reports/flp-report/summary1777611947136/kvzl7ukvwrlexctcxn2v.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777611975/stembotix/reports/flp-report/objectives1777611974776/crgfzabo8hxgjpccfiea.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612006/stembotix/reports/flp-report/implementation-and-delivery1777612006256/bdxeqoz1ybgihjvi31jg.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/qfrskqhhzrjazku9nhmw.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/gzhxlq1zaezoueqolxew.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/wg9gjtjtlu9vijhpxar1.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/nbbaaz6nyctsjzjkgnso.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/sqhxihyormqvrqzyc2lj.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612007/stembotix/reports/flp-report/implementation-and-delivery1777612006256/kbabb2wn47lya5wrppd7.jpg",
      ],
    }),

    // REACH & COVERAGE
    reach_and_coverage: JSON.stringify({
      description: `The Financial Literacy Program achieved a significant scale of implementation, successfully reaching a total of 50,000 students across two major states, demonstrating both its wide outreach and effective execution.
The program was extensively implemented in Maharashtra, where it impacted 36,000 students across 87 schools, making it the primary region of intervention. In Gujarat, the program reached 14,000+ students across 45 schools, further expanding its footprint and ensuring broader access to financial education.
This extensive coverage across 132 schools enabled the program to cater to students from diverse socio-economic and educational backgrounds. By reaching both urban and semi-urban regions, the initiative ensured inclusivity and equal access to essential financial literacy skills.`,
      reachAndCoverageImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612036/stembotix/reports/flp-report/reach-and-coverage1777612035999/hfeg3dmfzmknxff0imhp.jpg",
      ],
    }),

    // FINANCIAL OVERVIEW
    financial_overview: JSON.stringify({
      description: `The Financial Literacy Program was implemented with a well-planned and structured financial framework to ensure effective execution, scalability, and quality delivery across all locations. The budget allocation was strategically designed to cover program delivery, training, resource development, logistics, and monitoring activities.
The total program investment amounted to ₹42.49 lakh, distributed across two states based on the scale of implementation and number of beneficiaries. Maharashtra accounted for the larger share of the budget, with an allocation of ₹30.59 lakh, corresponding to its wider coverage of 36,000 students across 87 schools. Gujarat was allocated ₹11.90 lakh, supporting the implementation for over 14,000 students across 45 schools.
The financial resources were utilized to support key components of the program, including the development of learning materials, facilitator training, execution of interactive sessions, assessment processes, and on-ground coordination. Additionally, funds were allocated towards logistics, program management, and monitoring mechanisms to ensure smooth and efficient implementation.`,
      financialOverviewImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612074/stembotix/reports/flp-report/financial-overview1777612073736/gfvngld6j4qocsgevdg5.jpg",
      ],
    }),

    // STUDENT CERTIFICATION
    student_certification: JSON.stringify({
      description: `Elemented to recognize and validate students’ participation and learning outcomes. Certificates were awarded to students upon successful completion of the program, serving as an acknowledgment of their engagement and understanding of key financial concepts.
The certification was designed not only as a form of recognition but also as a motivational tool to encourage active participation and commitment throughout the program. It reinforced the importance of financial literacy as an essential life skill and provided students with a sense of achievement and confidence in their newly acquired knowledge.`,
      studentCertificationImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612097/stembotix/reports/flp-report/student-certification1777612096838/pt7efx3ugzmpwfbjuzp9.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612097/stembotix/reports/flp-report/student-certification1777612096838/clgdqlniznnripgylfed.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612133/stembotix/reports/flp-report/outcomes-and-impact1777612133356/lyo6iux8anx2mlxfcm6z.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612133/stembotix/reports/flp-report/outcomes-and-impact1777612133356/a4j4ia5k6met7oyiay0f.jpg",
      ],
    }),

    // IMPACT ANALYSIS
    impact_analysis: JSON.stringify({
      objective:
        "The Financial Literacy Program has created a multi-dimensional impact across students, educators, institutions, and the broader community by strengthening financial awareness and promoting responsible financial behavior.",
      studentLearning:
        "The program has significantly enhanced students’ understanding of financial concepts through interactive and experiential learning approaches. Students demonstrated improved comprehension of saving, budgeting, digital payments, and basic investment principles, along with increased confidence in applying this knowledge in real-life situations.",
      studentLearningImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612155/stembotix/reports/flp-report/impact-analysis1777612155252/gpwjemk6mxxxhquf4x0i.jpg",
      ],
      behavioralChange:
        "A notable shift in financial behavior has been observed, with students adopting healthier financial habits such as saving regularly, planning expenses, and making informed spending decisions. The program has contributed to developing a sense of financial responsibility and longterm thinking among students.",
      behavioralChangeImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612161/stembotix/reports/flp-report/impact-analysis1777612161049/as2mw6p7kiepwcps7nza.jpg",
      ],
      digitalFinancialAwareness:
        "Students have gained familiarity with modern financial systems, including banking processes, PI, ATM usage, and online transactions. Additionally, awareness of cyber safety and fraud prevention has strengthened their ability to navigate digital financial platforms securely.",
      digitalFinancialAwarenessImg: [
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",
      ],
      digitalLearningAdoption:
        "The integration of the STEMbotix LMS and Dhangyan portal promoted digital learning practices, enabling students to access content anytime and enhancing engagement through technology-driven education.",
      digitalLearningAdoptionImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612177/stembotix/reports/flp-report/impact-analysis1777612177235/ijk0amwb6hkjpvmupqib.jpg",
      ],
      communityEngagement:
        "The program has extended its impact beyond classrooms, as students share their knowledge with families and communities, contributing to increased awareness and adoption of responsible financial practices at the grassroots level. The program has contributed to multiple dimensions of educational and behavioral development.",
      communityEngagementImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612183/stembotix/reports/flp-report/impact-analysis1777612183409/hdc3synyoe9dbweljw8t.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612208/stembotix/reports/flp-report/project-strengths1777612208375/zlf7dnmonmntg1d4ohvr.jpg",
      ],
    }),

    // CHALLENGES
    challenges_and_migration: JSON.stringify({
      description: `The implementation of the Financial Literacy Program, given its large scale and diverse reach, presented certain challenges that were effectively addressed through proactive planning and adaptive strategies.
One of the primary challenges was managing diverse learning levels among students, as participants came from varied academic and socio-economic backgrounds. This was addressed by adopting simplified content.Another challenge involved the initial difficulty in grasping financial concepts, especially for students with limited prior exposure to banking and financial systems. To overcome this, facilitators employed interactive teaching techniques such as storytelling.
The program also encountered a language barrier in certain regions, where students were more comfortable with local languages. This challenge was effectively mitigated by trainers adapting their delivery and explaining concepts in the local language, ensuring better comprehension, engagement, and inclusivity.
Ensuring consistent student engagement across large groups was another key challenge during program delivery. This was addressed by incorporating participatory methods, discussions, quizzes, and practical demonstrations to maintain interest and encourage active involvement.`,
      challengesAndMigrationImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612231/stembotix/reports/flp-report/challenges-and-migration1777612231348/vtibopzjeyvmt7tuc6xk.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612257/stembotix/reports/flp-report/key-outcomes1777612257447/plyiwrm3i2ukx9gb6xz7.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612257/stembotix/reports/flp-report/key-outcomes1777612257447/fhr8wur2jbnc7fcbgu9y.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777612280/stembotix/reports/flp-report/conclusion1777612280583/gey3gif3frjggewqmi2v.jpg",
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
