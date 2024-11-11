import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    project_logo,
    python,
    java,
    zenit,
    algorithm,
    gdscIcon,
    C,
    cpp,
    firebase,
    haskell,
    sql,
    sqlite,
    express,
    django,
    mysql,
    MERN,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Computer Science Student",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp, // Assume an icon for C++ is available
    },
    {
      name: "C",
      icon: C, // Assume an icon for C is available
    },
    {
      name: "TypeScript",
      icon: typescript, // Assume an icon for TypeScript is available
    },
    {
      name: "Firebase",
      icon: firebase, // Assume an icon for Firebase is available
    },
    {
      name: "Django",
      icon: django, // Assume an icon for Django is available
    },
    {
      name: "Express",
      icon: express, // Assume an icon for Express is available
    },
    {
      name: "MongoDB",
      icon: mongodb, // Assume an icon for MongoDB is available
    },
    {
      name: "SQL",
      icon: sql, // Assume an icon for SQL is available
    },
    {
      name: "MySQL",
      icon: mysql, // Assume an icon for MySQL is available
    },
    {
      name: "SQLite",
      icon: sqlite, // Assume an icon for SQLite is available
    },
    {
      name: "Haskell",
      icon: haskell, // Assume an icon for Haskell is available
    },
    {
      name: "Docker",
      icon: docker, // Assume an icon for Docker is available
    }
];
  
  const experiences = [
    {
      title: "Open Source Team Member (Software Developer)",
      company_name: "Google Developer Student Club",
      icon: gdscIcon, // Assuming you have an icon for Google Developer Student Club
      iconBg: "#F0F0F0", // Placeholder color, change as needed
      date: "Oct 2024 - Present",
      points: [
        "Contributed as part of the front-end team on the DBAC Companion App, aimed at enhancing the student experience at DBAC.",
        "Collaborated on design and implementation of features to enhance usability and accessibility, demonstrating strong teamwork and collaboration skills.",
        "Engaged in agile development practices, including sprint planning and retrospectives, to ensure efficient project progress."
      ],
      skills: ["React", "React Native",  "Tailwind CSS", "Teamwork", "UI Design", "Agile Methodologies", "Collaboration"]
    },
    {
      title: "Software Developer Intern",
      company_name: "4Pillar Global Technology",
      icon: "", // Assuming you have an icon for 4Pillar Global Technology
      iconBg: "#E6EFFF", // Placeholder color, change as needed
      date: "Jul 2024 - Sep 2024",
      points: [
        "Developed a web portal using Django and MySQL, ensuring seamless data flow between the frontend and database, which significantly enhanced overall system performance.",
        "Automated data scraping tasks to collect and process large datasets, improving data collection efficiency and streamlining analysis.",
        "Designed scalable database schemas in MySQL, optimizing queries for efficient data retrieval and storage to enhance database performance.",
        "Involved in testing and debugging the web application, troubleshooting issues, and improving system reliability."
      ],
      skills: ["Django", "MySQL", "Python", "Data Scraping", "Database Design", "Problem Solving", "Teamwork"]
    },
    
    {
      title: "Intern",
      company_name: "Zenit Excelencia",
      icon: zenit, // Assuming you have an icon for Zenit Excelencia
      iconBg: "#DDEEFF", // Placeholder color, change as needed
      date: "Jul 2023 - Sep 2023",
      points: [
        "Utilized Python Pandas to merge and manage extensive Excel datasets, streamlining data-driven decision-making processes.",
        "Enhanced user experience on Zenit Excelencia's website by developing mechanisms for importing and exporting courses, improving platform performance and usability.",
        "Gained hands-on experience in data manipulation and insights into technology’s impact on business needs, reinforcing commitment to leveraging tech for positive impact."
      ],
      skills: ["Python", "Pandas", "Microsoft Excel", "Data Manipulation", "Problem Solving", "Teamwork"]
    }
  ];
  
  
  
  
  const projects = [
    {
      name: "NutriVibe",
      description:
        "Developed during a hackathon, NutriVibe is a React Native app focused on health and nutrition. It tracks daily caloric intake, provides a summary report of consumption, and offers guidance for maintaining a balanced diet. My contribution centered around crafting the front-end login page and enhancing the overall UI/UX design.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        }
      ],
      image: project_logo, // Replace with the actual image import or path
      source_code_link: "https://github.com/scythemenace/NutriVibe/tree/aarav",
    },
    {
      name: "Algorithm Research",
      description:
        "As part of a team of three, we undertook an extensive exploration into various data structures and algorithms. This project encompassed implementing and benchmarking a wide array of algorithms, ranging from fundamental sorting and searching methods to advanced pathfinding techniques. We covered classic sorting algorithms such as Quick, Merge, Heap, Bubble, Insertion, and Selection sort, and implemented search algorithms including dynamic binary search. For pathfinding, we tackled A*, Dijkstra’s, Bellman-Ford algorithms, as well as breadth-first and depth-first searches (BFS and DFS). The project provided us with valuable insights into the efficiency and practical applications of each algorithm, enhancing our problem-solving skills and understanding of algorithmic strategies in a collaborative environment.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        }
      ],
      image: algorithm, // Replace with the actual image import or path
      source_code_link: "https://github.com/scythemenace/CS2XC3_algorithms_research",
    },
    {
      name: "Full-Stack MERN Authentication",
      description:
        "A secure MERN stack application implementing authentication via JSON Web Tokens and Google OAuth. Designed with React.js for the frontend and Tailwind CSS for styling, the project features state management with Redux Toolkit and integrates Firebase for profile image handling. My contributions included the entire end-to-end development process, from frontend design to database integration.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "blue-text-gradient",
        },
        {
          name: "react.js",
          color: "yellow-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "red-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
      ],
      image: MERN, // Replace with the actual image import or path
      source_code_link: "https://github.com/panta3/Authentication-Project",
    },
    {
      name: "DBAC Companion App",
      description:
        "Contributed as a front-end team member to the DBAC Companion App, an initiative by the Google Developer Student Club at McMaster University aimed at enhancing the student experience at the David Braley Athletic Centre. Worked on designing and implementing key features to improve usability and accessibility. Participated in project planning, documentation, and agile development practices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "collaboration",
          color: "pink-text-gradient",
        }
      ],
      image: gdscIcon, // Assuming gdscIcon is imported as an image for GDSC-related projects
      source_code_link: "https://github.com/DSC-McMaster-U/DBAC-Companion-App/tree/main", // Leave this empty as requested
    }
];

  export { services, technologies, experiences, projects };