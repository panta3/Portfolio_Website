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

  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Zenit Excelencia",
      icon: zenit, // Assuming you have an icon for Zenit Excelencia
      iconBg: "#DDEEFF", // Placeholder color, change as needed
      date: "Jul 2023 - Sep 2023",
      points: [
        "During my enriching internship at Zenit Excelencia's IT department, I harnessed the power of Python Pandas to tackle complex challenges, such as seamlessly merging and managing extensive Excel datasets to streamline data-driven decision-making processes.",
        "I played a pivotal role in enhancing the user experience on Zenit Excelencia's website by developing efficient mechanisms for importing and exporting courses onto their online platform, improving platform performance and usability.",
        "This hands-on experience honed my data manipulation skills and provided valuable insights into the intersection of technology and business needs, reinforcing my commitment to leveraging technology for positive impact."
      ],
      skills: ["Java", "Problem Solving", "Communication", "Teamwork", "Pandas", "Microsoft Excel", "Python (Programming Language)"]
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
        // Add other technologies or tags if necessary
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
        image: algorithm,
        source_code_link: "https://github.com/scythemenace/CS2XC3_algorithms_research",

    }
  ]
  export { services, technologies, experiences, projects };