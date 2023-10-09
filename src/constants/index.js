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
  car,
  companyLogo,
  shirt,
  chatgpt,
  aam,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator
  }
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Strada Imaging",
    icon: companyLogo,
    // iconBg: "#383E56",
    iconBg: "#E6DEDD",
    date: "Jan 2020 - April 2020",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing small features and maintaining web applications in high-quality.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Strada Imaging",
    icon: companyLogo,
    iconBg: "#E6DEDD",
    date: "May 2020 - May 2022",
    points: [
      "Specialized as a Software Engineer in web development using ReactJS at Strada Imaging from May 2020 to 2022.",
      "Enhanced web app functionality and user experience using CSS frameworks such as Bootstrap and Material UI.",
      "Led a significant project, AssetTag, a cutting-edge construction application, revolutionizing project management in the construction industry",
      "Gained profound insights into software development and project management during my tenure, influencing my current approach in these domains.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Strada Imaging",
  //   icon: companyLogo,
  //   iconBg: "#E6DEDD",
  //   date: "March 2022 - Dec 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Developing and maintaining backend using Node.js, Python (Flask) and other related technologies.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Product Owner",
    company_name: "Strada Imaging",
    icon: companyLogo,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Product Owner at Strada Imaging since May 2022, responsible for leading and driving front-end development efforts using React JS for two critical applications: AssetTag and Deeproad.",
      "Enhanced and expanded functionality and design of AssetTag, a comprehensive construction application, to include features like company creation, employee management, access control, floor plan uploading, issue marking, and report generation, ensuring a seamless user experience.",
      "Worked on Deeproad, a sophisticated road survey application utilizing machine learning and deep learning algorithms, to improve functionality and efficiency through advanced algorithms and innovative designs.",
      "Led a team of 3 to 4 individuals as a Product Owner, providing guidance and support to implement new functionalities and ensuring successful project outcomes.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have had the pleasure of collaborating with Abdullah, who's an exceptional front-end engineer and a leader with the ability to handle back-end issues during emergencies. I am always impressed by individuals who exhibit strong responsibility, knowledge, and credibility, and Abdullah embodies all of these qualities.",
    name: "Zain Ul Mustafa",
    designation: "Team Manager",
    company: "Strada Imaging",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  }
  ,
  {
    testimonial:
      "Working closely with Abdullah, an outstanding front-end engineer, and a proficient problem-solver in back-end emergencies has been a true pleasure. Abdullah embodies a rare blend of responsibility, extensive knowledge, and unquestionable credibility.",
    name: "Muhammad Aamir",
    designation: "Backend Engineer",
    company: "Starda Imaging",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Vehicle Detection",
    description:
      "A comprehensive project for detecting and tracking vehicles has been developed, which enables accurate counting of vehicles.This system identify vehicles in real-time.",
    tags: [
      {
        name: "computervision",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "yolov8",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/Abdullah-Majeed/Vehicle-Detection-Tracking-Python",
  },
  {
    name: "3D Product Website",
    description:
      "Web application that enables users to design the shirt, change shirt colors, generate logo using OpenAI and generate text for logo using ChatGPT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: shirt,
    source_code_link: "https://github.com/Abdullah-Majeed/React-3D-Product-Website",
  },
  {
    name: "ChatGPT-FLutter",
    description:
      "I've developed a Flutter app integrating ChatGPT, creating a seamless and engaging conversational experience. Users can interact with a highly responsive AI chatbot, powered by OpenAI's advanced language model.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "llm models",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/Abdullah-Majeed/chatgpt_flutter",
  },
  {
    name: "Automated Asset Monitoring",
    description:
      "In this project, a mobile app is proposed to be designed for asset management. Two specific areas targeted are construction and building management.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
    ],
    image: aam,
    source_code_link: "https://github.com/Abdullah-Majeed",
  },

];

export { services, technologies, experiences, testimonials, projects };