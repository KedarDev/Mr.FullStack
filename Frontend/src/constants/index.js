import {
  faceBook, 
  css,
  apache,
  aws,
  eclipse,
  figma,
  html,
  javascript,
  mongodb,
  nodejs,
  postgres,
  postman,
  reactjs,
  spring,
  tailwind,
  vite,
  vscode,
  frontend,
  backend,
  design,
  fullstack,
  git,
  FeedApp,
  WeatherApp,
  coverLetter,
  fullStackResume,
  microsoft,
  twitter,
  renoBrothers,
  tkqpLanding,
  shopTkqp,
  kingPizza,
} from '../assets';


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
    title: "Full Stack",
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
    name: "Figma",
    icon: figma,
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
    company_name: "FaceBook ",
    icon: faceBook,
    iconBg: "#FFF",
    date: "January 2021 - December 2022",
    points: [
      " Built a secure data storage system, facilitating a 20% increase in system load capacity",
      " Developed user-friendly interfaces using J2EE and JavaScript frameworks, improving user experience and increasing system efficiency by 20%",
      " Was able to quickly adapt to new technologies and diliver quilty functions ",
      " Automated database backup processes, significantly reducing data loss",
      " Used Github for version Control",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#000000",
    date: "January 2021 - January 2022",
    points: [
      " Optimized website SEO, increasing organic traffic by 20%",
      " Consistently performed debugging and troubleshooting, improving website functionality and user retention rates by 15%",
      " Applied data structures to optimize code performance, enhancing software speed by 15% ",
      " Built responsive web pages using HTML5 and CSS3, improving website accessibility ",
      " Regularly updated and debug, reducing code errors by 20%",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Twitter",
    icon: twitter,
    iconBg: "#FFF",
    date: "June 2021 - Augest 2021",
    points: [
      " Team Lead",
      " Programmed and debugged software using Java",
      " Optimized database performance using SQL, leading to 15% decrease in response time",
      " Contributed to a team project that reduced software errors ",
      " Updated fuctionality of existing sites",
    ],
  },
];

const projects = [
  {
    name: "RenoBrothers",
    description:
      "The RenoBrothers Renovation near you.",
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
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: renoBrothers,
    source_code_link: "https://github.com/KedarDev/RenoBrothers",
    liveSiteButton: "https://therenobrothersdemo.netlify.app",
  },
  {
    name: "FeedApp",
    description:
      "Web-based Feed application set up a profile, post, comment, and like.",
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
    liveSiteButton: "https://feedappdemo.netlify.app/",
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
    liveSiteButton: "https://sunnysideweatherapp.netlify.app/",
  },
  {
    name: "TKQP HomePage",
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
    image: tkqpLanding,
    source_code_link: "https://github.com/KedarDev/TKQP-OFFICIAL-WEBSITE",
    liveSiteButton: "https://tkqp.netlify.app",
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
    image: shopTkqp,
    source_code_link: "https://github.com/KedarDev/TKQP-SHOP-M.E.R.N-STACK",
    liveSiteButton: "https://tkqpshop.netlify.app",
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
        name: "TAILWIND",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: kingPizza,
    source_code_link: "https://github.com/KedarDev/KING-PIZZA",
    liveSiteButton: "https://kingkongpizza.netlify.app",
  },
];

export const resumes = [
  {
    id:1,
      imgURL: coverLetter,
      name: "Cover Letter",
      thumbnail: coverLetter,
      bigResumeImg: coverLetter
  },
  {
    id:2,
      imgURL: fullStackResume,
      name: "Full Stack",
     thumbnail: fullStackResume,
     bigResumeImg:fullStackResume
  },

];

export { services, technologies, experiences, projects, navLink};
