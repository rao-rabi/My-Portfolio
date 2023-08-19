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
  git,
  figma,
  ux,
  ux2,
  egshop,
  bankPortal,
  creaticAgency,
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
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
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
    title: "Frontend Developer",
    icon: ux,
    iconBg: "#383E56",
    date: "December 2021 - Present",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Personal Project-Driven Frontend Developer",
    icon: ux2,
    iconBg: "#383E56",
    date: "December 2021 - Present",
    points: [
      "Self-motivated frontend developer with an array of personal projects showcasing JavaScript , React.js and related technologies expertise.",
      "Extensive hands-on experience building diverse web applications to sharpen technical skills and creativity.",
      "Proficient in crafting responsive designs for seamless user experiences across various devices.",
      "Actively seek and incorporate feedback from online communities to refine coding practices.",
      "Demonstrated version control skills through maintaining Git repositories for projects.",
      "Committed to ongoing learning through coding challenges, tutorials, and industry updates.",
      "Portfolio reflects dedication, technical proficiency, and passion for frontend development.",
    ],
  },
];
const projects = [
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
    name: "Bank Portal",
    description:
      "This is a bank Management portal in which user can create his bank account, desposit or withdraw his cash & Balance is maintained. Other Pages like News,FAQ are added.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS & Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: bankPortal,
    source_code_link: "https://github.com/rao-rabi/Bank-Version-2.git",
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
