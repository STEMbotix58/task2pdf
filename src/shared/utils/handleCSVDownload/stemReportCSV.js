import { generateCSV } from "./index";

export const handleSTEMLabReportCSVDownload = () => {
  const row = {
    id: "STEMReport-001",

    // BASIC INFO
    basic_info: JSON.stringify({
      projectTitle: "STEM LAB Report",
      stemLogo: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375860/stembotix/reports/stemlab-report/basic-info1777375859919/ld8jqpvemftf9r4jsvwd.jpg",
      ],
      partnerLogo: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375886/stembotix/reports/stemlab-report/basic-info1777375886867/megypbvoukh1pbe82hc7.jpg",
      ],
      preparedBy: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375865/stembotix/reports/stemlab-report/basic-info1777375865216/cq5jaruiilljrfwnmzet.png",
      ],
      homeImages: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375896/stembotix/reports/stemlab-report/basic-info1777375895513/qijkdhkf15jw8bnrpi7t.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375896/stembotix/reports/stemlab-report/basic-info1777375895513/easjd9qrbaygyxi7fuvr.jpg",
      ],
      backPageImages: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375896/stembotix/reports/stemlab-report/basic-info1777375903868/eziewoqfk6afl8wtaobr.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375896/stembotix/reports/stemlab-report/basic-info1777375903868/ea27xzlohkyai503cxtj.jpg",
      ],
    }),

    // Preface (ARRAY)
    preface: JSON.stringify([
      {
        description:
          "In the third phase, logistics and on-site delivery were executed efficiently to ensure that all equipment reached the selected schools in a timely and secure manner.",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376822/stembotix/reports/stemlab-report/preface-1777376822147/txzmpzfspk860oqgsgrv.jpg",
        ],
      },
      {
        description:
          "Close coordination with school authorities facilitated smooth delivery, unloading, and storage of materials.",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376826/stembotix/reports/stemlab-report/preface-1777376826149/hgbtpk35tnvh321niuqt.jpg",
        ],
      },
      {
        description:
          "Proper handling procedures were followed to ensure the safety and integrity of all equipment during transit and at the site.",
        image: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376829/stembotix/reports/stemlab-report/preface-1777376829724/ouz0htfhz3kfaijdz3aw.jpg",
        ],
      },
    ]),

    // PHASE (ARRAY)
    phase: JSON.stringify([
      {
        title: "SITE SURVEY & PLANNING",
        description: `In the first phase, a comprehensive site survey and planning exercise was conducted across 50 schools to assess their readiness for STEM Lab implementation. This included evaluating infrastructure, space availability, electrical requirements, and overall feasibility. Detailed discussions were held with school authorities to understand their specific needs and challenges. Based on the findings and predefined selection criteria, 30 schools were finalized for the project.`,
        images: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376109/stembotix/reports/stemlab-report/phase1777376109217/sirxvyxdrjxmhuatzuik.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376109/stembotix/reports/stemlab-report/phase1777376109217/zvphrzxduwyfkuclokoz.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376109/stembotix/reports/stemlab-report/phase1777376109217/xmo1qmnheasww0gnzizq.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376110/stembotix/reports/stemlab-report/phase1777376109217/fmb5bpxaeryqtzah8zzw.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376110/stembotix/reports/stemlab-report/phase1777376109217/bbhf6pl20fjxbadpyrbb.jpg",
        ],
      },
      {
        title: "PROCUREMENT & MATERIAL READINESS",
        description: `The second phase focused on procurement and material readiness, where high-quality STEM equipment and resources were sourced in alignment with the project objectives. Vendor coordination was carried out to ensure timely procurement, while rigorous quality checks were implemented to maintain standards. Materials were systematically organized and managed to support smooth deployment across all locations.`,
        images: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376122/stembotix/reports/stemlab-report/phase1777376122845/ojuqgtir5c4cipu6qtk0.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376123/stembotix/reports/stemlab-report/phase1777376122845/uerf1h5u3bqxft3cdv5y.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376123/stembotix/reports/stemlab-report/phase1777376122845/m7g0awu2t4pprj06a712.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376123/stembotix/reports/stemlab-report/phase1777376122845/dlckln9qpep9lavsmqx4.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376123/stembotix/reports/stemlab-report/phase1777376122845/s6fihxgg73dhntapvawh.jpg",
        ],
      },
      {
        title: "LOGISTICS & ON-SITE DELIVERY",
        description: `In the third phase, logistics and on-site delivery were executed efficiently to ensure that all equipment reached the selected schools in a timely and secure manner. 
Close coordination with school authorities facilitated smooth delivery, unloading, and storage of materials. 
Proper handling procedures were followed to ensure the safety and integrity of all equipment during transit and at the site.`,
        images: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376144237/txojmmn9ye3sjogvushy.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376144237/zntxfp3u3w5dyt0a1rq6.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376144237/smroxgzsfloyzngiaa8p.jpg",
        ],
      },
      {
        title: "SITE PREPARATION & INSTALLATION",
        description: `The final phase involved site preparation and installation, where designated lab spaces were developed as per the approved layouts and technical specifications. 
Equipment, workstations, and IT infrastructure were installed and configured, including laptops and relevant software for coding and simulation. Comprehensive testing and calibration were conducted to ensure that all systems were fully functional and ready for use. 
Overall, this phased implementation approach ensured the successful establishment of fully operational STEM Labs, enabling schools to adopt experiential, technology-driven learning environments effectively.`,
        images: [
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376158267/cow3z4evdeddibmu7fz2.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376158267/gjqmcowrb0vrhq3zp955.jpg",
          "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376144/stembotix/reports/stemlab-report/phase1777376158267/tuy5gxnz8byalcwyysvh.jpg",
        ],
      },
    ]),

    // OUTCOMES
    outcomes: JSON.stringify({
      description: `The project successfully established 30 fully functional STEM Labs across Jaipur and Mumbai, providing students with access to modern, technology-enabled learning environments that support interactive and experiential education. These labs have significantly enhanced student engagement, curiosity, and participation in STEM subjects by shifting from traditional learning methods to hands-on, activity-based approaches.
Through regular use of the labs, students have gained practical exposure to robotics, coding, electronics, and emerging technologies, enabling them to develop strong analytical thinking, problem-solving abilities, and technical skills. The initiative has also fostered a culture of innovation and creativity, encouraging students to design, develop, and showcase their own projects while applying theoretical concepts to real-world scenarios.
In the future, the program aims to further strengthen collaboration, teamwork, and student engagement through advanced activities, competitions, and projectbased learning. It will continue to enhance students’ confidence, communication, and presentation skills by providing more opportunities for demonstrations and knowledge-sharing. The initiative also seeks to expand its reach and deepen its impact, contributing to the development of future-ready learners and supporting long-term academic and career growth in technology-driven fields.`,
      images: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376186/stembotix/reports/stemlab-report/outcomes1777376184002/hlste8gvqahrvu3q2vtl.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376184/stembotix/reports/stemlab-report/outcomes1777376184002/wbfifhntbmyimmhn8fso.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375983/stembotix/reports/stemlab-report/project1777375983436/xr408l1hdjumpzlgnrkb.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777375983/stembotix/reports/stemlab-report/project1777375983436/fcnj0ypyrrral4j4i3xv.jpg",
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
            "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376208/stembotix/reports/stemlab-report/impact-analysis1777376207915/r2dqquov1gcewke2rt66.jpg",
          ],
        },
        {
          title: "Teacher Capacity",
          description:
            "Teachers have enhanced their instructional capabilities by adopting modern STEM methodologies, digital tools, and activity-based teaching approaches, leading to more effective classroom delivery.",
          image: [
            "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376214/stembotix/reports/stemlab-report/impact-analysis1777376213227/vus7mvcctql3aklfcvat.jpg",
          ],
        },
        {
          title: "School Environment",
          description:
            "The establishment of STEM Labs has transformed traditional classrooms into innovative, technology-enabled learning spaces that encourage creativity, experimentation, and collaborative learning.",
          image: [
            "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376219/stembotix/reports/stemlab-report/impact-analysis1777376218869/xsotoolbobyahgoflkoh.jpg",
          ],
        },
        {
          title: "Community Engagement",
          description:
            "The project has increased awareness and interest in STEM education among parents and the local community, fostering a supportive ecosystem for continuous learning and innovation.",
          image: [
            "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376236/stembotix/reports/stemlab-report/impact-analysis1777376235579/vh6wqobche1a0uj4rcdc.jpg",
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
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376027/stembotix/reports/stemlab-report/lab-setup-components1777376025186/huwhzljpjqds7grkvhtv.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376025/stembotix/reports/stemlab-report/lab-setup-components1777376025186/cgmwbv4t7r7yih6d3eql.jpg",
      ],
    }),

    // Implementation Milestone
    implementation_and_milestones: JSON.stringify({
      description: `The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools. Each phase was carefully designed to address critical aspects of deployment, from initial assessment to final installation and operational readiness.
The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools. 
Each phase was carefully designed to address critical aspects of deployment, from initial assessment to final installation and operational readiness.
The project was executed through a well-structured, multi-phase approach to ensure systematic planning, efficient resource utilization, and highquality implementation across all selected schools.`,
      implementationImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376053/stembotix/reports/stemlab-report/implementation-milestones1777376053035/hwtfsapfd96dpuupktav.jpg",
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376053/stembotix/reports/stemlab-report/implementation-milestones1777376053035/wcp1nzrsusnqia9tplbu.jpg",
      ],
    }),

    // Strengths
    strengths: JSON.stringify({
      description: `The success of the STEM Lab Project is underpinned by strong and strategic partnerships between Deutsche Bank, Yuva Unstoppable, and STEMbotix Private Limited, which ensured effective coordination, resource alignment, and seamless execution across all project phases.
The initiative is further strengthened by the establishment of well-equipped STEM Labs featuring high-quality, standardized equipment designed to support experiential and technology-driven learning. Complementing this infrastructure, comprehensive training programs for teachers and students have enhanced instructional delivery and facilitated the adoption of modern STEM pedagogies.
A dedicated and proficient project management team played a critical role in ensuring timely implementation, maintaining quality standards, and addressing onground challenges efficiently. The project has also received positive feedback from participating schools and key stakeholders, reflecting its relevance, effectiveness, and overall impact in advancing STEM education.`,
      strengthsImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376252/stembotix/reports/stemlab-report/strengths1777376252194/p67ikfkpzewfaj5nqpti.jpg",
      ],
    }),

    // CHALLENGES
    challenges_and_mitigation: JSON.stringify({
      description: `The implementation of the STEM Lab Project encountered certain operational and adoption-related challenges, which were effectively addressed through strategic planning and timely interventions. 
One of the key challenges was managing logistical complexities in the transportation and delivery of equipment across multiple locations. This was mitigated through proactive coordination, detailed route planning, and efficient scheduling to ensure timely and safe delivery of materials.
Another challenge involved the initial hesitation among teachers in adopting new STEM methodologies and technology-driven teaching practices. This was addressed by conducting comprehensive training programs, hands-on workshops, and providing continuous support to build confidence and facilitate smooth integration into classroom teaching.`,
      challengesImg: [
        "https://res.cloudinary.com/dy1vps6x9/image/upload/v1777376905/stembotix/reports/stemlab-report/challenges-and-mitigation1777376904906/tdxsdk2n3go8sx20t7zo.jpg",
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
