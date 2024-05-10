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
  hubspire,
  html2,
  limenzy,
  woxro,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "projects",
    title: "Projects",
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
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
    title: "Freelance Web Developer",
    icon: html2,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jan 2022",
    points: [
      "Specializing in converting designs into HTML for both outsourced and local clients, ensuring precision and responsiveness",
      "Working closely with clients to understand their needs and translate their vision into high-quality web assets",
      "Conducting rigorous testing to ensure error-free, cross-browser compatible HTML code that meets the highest standards of performance.",
      "Mastering HTML, CSS, JavaScript, and Bootstrap, I collaborate seamlessly with clients to deliver outstanding results",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Limenzy",
    icon: limenzy,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Sep 2022",
    points: [
      " Excelling in WordPress development, I create dynamic websites and interfaces tailored to client needs",
      "Working closely with PHP teams, I build intuitive UIs that seamlessly integrate with backend functionality.",
      "Skillfully converting designs into HTML, I ensure pixel-perfect precision and responsiveness across projects.",
      "Proficient in HTML, CSS, JavaScript, jQuery, Bootstrap, Tailwind, and WordPress, I leverage these tools to deliver high-quality web solutions",
    ],
  },
  {
    title: "React JS Developer",
    company_name: "Woxro",
    icon: woxro,
    iconBg: "#E6DEDD",
    date: "Sep 2022  - Mar 2023",
    points: [
      " Specializing in React JS development, I create interactive and scalable web applications that meet client requirements",
      "Implementing responsive design principles, I ensure optimal user experience across devices and screen sizes",
      "Collaborating effectively with cross-functional teams, I contribute to the development of high-quality products through code reviews and constructive feedback.",
      " Proficient in HTML, CSS, JavaScript, React, Styled Components, Material-UI (MUI), Tailwind CSS, and Redux, I leverage these technologies to build robust and visually appealing user interfaces",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Hubspire",
    icon: hubspire,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Focused on React JS and TypeScript development, I craft robust and type-safe web applications for optimal performance.",
      "Implementing responsive design principles and leveraging UI libraries like MUI and Radix UI, I ensure visually stunning and user-friendly interfaces",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arjun proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arjun does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Arjun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brain Wave",
    description:
      "A modern Website with amazing UI/UX which is completely responsive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mrwick1/brainwave",
    liveLink: "https://brainwave-blue.vercel.app/",
  },
  {
    name: "Hoobank",
    description:
      "A website for financial client with stunning UI/UX and fully responsive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    liveLink: "https://hoobank-sepia.vercel.app/",
    source_code_link: "https://github.com/mrwick1/hoobank",
  },
  {
    name: "Open AI ",
    description: "A clean website which is fully responsive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mrwick1/open-ai",
    liveLink: "https://open-ai-dun.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
