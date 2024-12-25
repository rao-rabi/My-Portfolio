import {
  mobile,
  web,
  javascript,
  cplus,
  bootstrap,
  photoshop,
  ubuntu,
  html,
  css,
  tailwind,
  reactjs,
  python,
  git,
  figma,
  ux,
  ux2,
  egshop,
  bankPortal,
  creaticAgency,
  todo,
  currency,
  bookStore,
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
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
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
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name:"React",
    icon: reactjs,
  },
  {
    name:"Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer at Askus Solution",
    icon: ux,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web and mobile applications using React and other related technologies.",
      "Took part in developing Multiple Websites and Management Systems as a Team member",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer at MAAQ Services",
    icon: ux2,
    iconBg: "#383E56",
    date: "December 2023 - July 2024",
    points: [
      "Developing and maintaining web & app applications using JavaScript and other related technologies.",
      "Took part in developing frontend as a Team member",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Associate Software Engineer at BitBeaver",
    icon: ux,
    iconBg: "#383E56",
    date: "July 2023 - October 2023",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Took part in developing frontend as a Team member",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Learnt OOP deep concepts and Python for Back-end Development.",
    ],
  },
  {
    title: "Frontend Developer at TechnoKloud",
    icon: ux,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];
const projects = [
  {
    name: "Book Store",
    description:
      "Web-based platform that's Frontend Design of a Book Store which have different books provided using Api to read for users designed using ReactJS.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "UseReducer",
        color: "pink-text-gradient",
      },
    ],
    image: bookStore,
    source_code_link: "https://books-store-with-reducer.vercel.app/",
  },
  {
    name: "Todo Application",
    description:
      "Web-based platform that's Frontend Design of a todo application where user can add, delete, update and marks todos as completed.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Context Api",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/rao-rabi/TODO-Application-using-Context-Api.git",
  },
  {
    name: "Currency Convertor",
    description:
      "Web-based platform that's Frontend Design of a currency converter where you can convert any currency value to an other currency.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Custom Hooks",
        color: "pink-text-gradient",
      },
    ],
    image: currency,
    source_code_link: "https://github.com/rao-rabi/Currency-Convertor.git",
  },
  {
    name: "EG Shop",
    description:
      "Web-based platform that's Frontend Design of an E-Commerce Website which have all neccessary sections for users including cart,form,accounts,news,products e.t.c.",
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
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: egshop,
    source_code_link: "https://github.com/rao-rabi/EG-SHOP-Updated-Version.git",
  },
  {
    name: "Crud using Moke Api",
    description:
      "This is like a Crud Application in which user can create a person, update, view or delete that person. Moke Api is used to manage user data and Redux toolkit is used.",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "React & Redux",
        color: "pink-text-gradient",
      },
    ],
    image: bankPortal,
    source_code_link: "https://github.com/rao-rabi/Crud-and-Filter-using-RTK.git",
  },
  {
    name: "Creative Agency Portfolio",
    description:
      "A comprehensive responsive and interactive Website frontend design which shows Creatic creative Agency's portfolio, pages, services, contact e.t.c ",
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
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: creaticAgency,
    source_code_link: "https://github.com/rao-rabi/Creatic-Creative-Agency.git",
  },
];

export { services, technologies, experiences, projects };
