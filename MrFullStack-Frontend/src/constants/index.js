import { 
  css,
  apache,
  aws,
  cypress,
  eclipse,
  figma,
  html,
  java,
  javascript,
  mongodb,
  nodejs,
  postgres,
  postman,
  reactjs,
  spring,
  tailwind,
  threejs,
  vite,
  vscode,
  wordpress,
  frontend,
  backend,
  design,
  fullstack,
  git,
  futureCondos,
  tkqplogo,
  STEM,
  FeedApp,
  WeatherApp,
  coverLetter,
  fullStackResume,
  frontendResume,
  backendResume,
} from '../assets';

import { styles } from '../styles';

const navLink = [
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
    title: "Design",
    icon: design,
  },
  {
    title: "Frontend",
    icon: frontend,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullstack,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostMan",
    icon: postman,
  },
  {
    name: "VSCode",
    icon: vscode,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Vite",
    icon: vite,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Apache",
    icon: apache,
  },
];


const experiences = [
  {
    title: "React Developer",
    company_name: "FutureCondos",
    icon: futureCondos,
    iconBg: "#FFF",
    date: "January 2021 - December 2022",
    points: [
      " Created designs to be used in development",
      " Collabarated with other senior developers to create static & dynamic pages & components",
      " Was able to quickly adapt to new technologies and diliver quilty functions ",
      " From design to implementation & intergration",
      " Used Github for version Control",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "The Kings & Queens Project",
    icon: tkqplogo,
    iconBg: "#000000",
    date: "January 2021 - January 2022",
    points: [
      " Created digital company presence from scratch",
      " Created & executed online programs for users",
      " Executed only Campaigns ",
      " Created designs using figma",
      " Created online Ecommerce Store",
    ],
  },
  {
    title: "WordPress Developer Intern",
    company_name: "STEM Academy Of Canada",
    icon: STEM,
    iconBg: "#FFF",
    date: "June 2021 - Augest 2021",
    points: [
      " Team Lead",
      " Developed web pages with WordPress",
      " Intergrated third-party tools like Elementor to imporove developer expericance",
      " Conducted Team meetings",
      " Updated fuctionality of existing sites",
    ],
  },
];

const projects = [
  {
    name: "FeedApp",
    description:
      "Web-based Feed application that allows users to set up a profile, post, comment, and like what ever they want.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "SPRINGBOOT",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPTY",
        color: "pink-text-gradient",
      },
    ],
    image: FeedApp,
    source_code_link: "https://github.com/KedarDev/FeedApp",
    liveSiteButton: "",
  },
  {
    name: "WeatherApp",
    description:
      "Web-based Weather application that allows users to view weather conditions in a selected city.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "SPRINGBOOT",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: WeatherApp,
    source_code_link: "https://github.com/KedarDev/WeatherApp",
    liveSiteButton: "",
  },
  {
    name: "TKQP-Landing-Page",
    description:
      "Landing page for The Kings & Queens Project, provides information on services provided.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: tkqplogo,
    source_code_link: "https://github.com/KedarDev/TKQP-OFFICIAL-WEBSITE",
    liveSiteButton: "",
  },
  {
    name: "SHOP-TKQP",
    description: "E-commerce store for the The Kings & Queens project",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: tkqplogo,
    source_code_link: "https://github.com/KedarDev/TKQP-SHOP-M.E.R.N-STACK",
    liveSiteButton: "",
  },
  {
    name: "KINGPIZZA",
    description: "Online store for fast food pizza resterant",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "STYLED-COMPONENTS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/KedarDev/KING-PIZZA",
    liveSiteButton: "",
  },
];

export const resumes = [
  {
      imgURL: coverLetter,
      name: "Cover Letter",
      thumbnail: coverLetter,
      bigResumeImg: coverLetter
  },
  {
      imgURL: fullStackResume,
      name: "Full Stack",
     thumbnail: fullStackResume,
     bigResumeImg:fullStackResume
  },
  {
      imgURL: frontendResume,
      name: "Frontend",
      thumbnail: frontendResume,
      bigResumeImg: frontendResume,
  },
  {
      imgURL: backendResume,
      name: "Backend",
      thumbnail:backendResume,
      bigResumeImg:backendResume,
  },
];


// export const shoes = [
//   {
//       thumbnail: thumbnailShoe1,
//       bigShoe: bigShoe1,
//   },
//   {
//       thumbnail: thumbnailShoe2,
//       bigShoe: bigShoe2,
//   },
//   {
//       thumbnail: thumbnailShoe3,
//       bigShoe: bigShoe3,
//   },
// ];
export { services, technologies, experiences, projects, navLink};
