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
  glisten,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Devops',
    icon: creator,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Limenzy',
    icon: limenzy,
    iconBg: '#E6DEDD',
    date: 'Mar 2022 - Sep 2022',
    points: [
      'Redesigned the homepage for limenzy.com using HTML, CSS, and JavaScript, improving user engagement and reducing bounce rate.',
      'Developed responsive landing pages in WordPress for various clients, ensuring adherence to W3C accessibility standards.',
      'Performed maintenance on live websites, troubleshooting issues and optimizing performance.',
      'Collaborated with PHP and Laravel teams to integrate user interfaces, utilizing Bootstrap and Vue.js frameworks.',
    ],
  },
  {
    title: 'React JS Developer',
    company_name: 'Woxro',
    icon: woxro,
    iconBg: '#E6DEDD',
    date: 'Sep 2022  - Mar 2023',
    points: [
      'Worked on two major projects: an e-commerce platform and a finance-related application.',
      'Built responsive UIs using MUI, Tailwind, Shadcn UI, Locofy.ai, CSS modules, and SCSS.',
      'Utilized Vite and Create-React-App for efficient project setup and development.',
      'Used Redux, Recoil, and Zustand for state management, enhancing application scalability and performance.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Hubspire',
    icon: hubspire,
    iconBg: '#E6DEDD',
    date: 'Mar 2023 - Present',
    points: [
      'Developed UIs using MUI, Tailwind, Shadcn UI, Locofy.ai, CSS modules, SCSS, and Chakra UI.',
      'Integrated APIs using Qpollo GraphQL, ensuring seamless data communication.',
      'Managed state with Redux, Recoil, and Zustand, optimizing application performance.',
      'Focused on UI/UX optimizations to enhance user experience, while mentoring interns and new joiners.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'Arjun is highly skilled, easy to work with, and always brings a positive, fun energy that makes collaboration enjoyable and productive.',
    name: 'Ebin John Joseph',
    designation: 'Software Engineer',
    company: 'Hubspire Corp',
    image: 'src/assets/user/ebin.jpeg',
    link: 'https://www.linkedin.com/in/ebin-j/',
  },
  {
    testimonial:
      "Working with Arjun is always a pleasure due to his professionalism, dedication, and positive attitude, which greatly contribute to our team's success.",
    name: 'Amal K George',
    designation: 'Software Engineer',
    company: 'Hubspire Corp',
    image: 'src/assets/user/amal.jpeg',
    link: 'https://www.linkedin.com/in/amal-k-george/',
  },
  {
    testimonial:
      'Arjun is a skilled software developer known for strong coding and innovative problem-solving, contributing greatly to our team.',
    name: 'Sandeep NS',
    designation: 'QA Engineer',
    company: 'Hubspire Corp',
    image: 'src/assets/user/sandeep.jpeg',
    link: 'https://www.linkedin.com/in/sandeep-n-s/',
  },
];

const projects = [
  {
    name: 'Brain Wave',
    description:
      'A modern Website with amazing UI/UX which is completely responsive',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },

      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/mrwick1/brainwave',
    liveLink: 'https://brainwave-blue.vercel.app/',
  },
  {
    name: 'Hoobank',
    description:
      'A website for financial client with stunning UI/UX and fully responsive.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    liveLink: 'https://hoobank-sepia.vercel.app/',
    source_code_link: 'https://github.com/mrwick1/hoobank',
  },
  {
    name: 'Open AI ',
    description: 'A clean website which is fully responsive',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/mrwick1/open-ai',
    liveLink: 'https://open-ai-dun.vercel.app/',
  },
  {
    name: 'Glisten AI ',
    description: 'A modern Next js website with amazing animations ',
    tags: [
      {
        name: 'Next',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'blue-text-gradient',
      },
    ],
    image: glisten,
    source_code_link: 'https://github.com/mrwick1/glisten-app',
    liveLink: 'https://glisten-ai-wheat.vercel.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
