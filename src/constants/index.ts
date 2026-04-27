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
  focal,
  delta,
  carrent,
  jobit,
  tripguide,
  threejs,
  tecom,
  smedan,
} from "../assets";

export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string | null;
  iconBg: string;
  date: string;
  current?: boolean;
  tags?: string[];
  points: string[];
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

export const navLinks: NavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: Service[] = [
  { title: "Web Developer", icon: web },
  { title: "Frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

const technologies: Technology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "Tecomgroup, Nizhny Novgorod, Russia",
    icon: tecom,
    iconBg: "#383E56",
    date: "Jan 2018 — Jun 2018",
    tags: ["HTML/CSS", "JavaScript", "REST API"],
    points: [
      "Transformed design mockups and wireframes into pixel-perfect, functional web pages.",
      "Integrated front-end components with server-side logic and RESTful APIs.",
      "Ensured responsive design and cross-browser compatibility across all deliverables.",
      "Participated in code reviews, contributing constructive feedback to peers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "SMEDAN, Abuja, Nigeria",
    icon: smedan,
    iconBg: "#E6DEDD",
    date: "Aug 2019 — Apr 2021",
    tags: ["React", "Node.js", "MongoDB"],
    points: [
      "Built and maintained web applications using React.js and modern JavaScript tooling.",
      "Collaborated with designers and product managers to ship high-quality features.",
      "Delivered responsive, accessible UIs across a range of government-facing products.",
      "Drove improvements to internal tooling that reduced deployment time by 30%.",
    ],
  },
  {
    title: "Associate Developer",
    company_name: "Delta Hotels by Marriott, ON, Canada",
    icon: delta,
    iconBg: "#383E56",
    date: "Nov 2021 — Dec 2022",
    tags: ["UI/UX", "JavaScript", "Testing"],
    points: [
      "Designed and developed interactive UI components using HTML, CSS, and JavaScript.",
      "Implemented animations and micro-interactions to elevate the guest-facing experience.",
      "Wrote automated unit tests and participated in QA cycles to maintain quality standards.",
      "Ensured WCAG accessibility compliance across all front-end deliverables.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Focal Systems, California, USA",
    icon: focal,
    iconBg: "#E6DEDD",
    date: "Jan 2023 — Dec 2023",
    tags: ["React", "Node.js", "AI/ML", "Tailwind"],
    points: [
      "Built responsive front-end layouts in React + Tailwind CSS and optimized Node.js/MongoDB back-end services.",
      "Designed and developed AI-based data analysis algorithms with the robotics engineering team.",
      "Owned end-to-end features across the stack — from database schema to production deployment.",
      "Led cross-functional sprint planning with designers, PMs, and backend engineers.",
    ],
  },
  {
    title: "QA Security & Tech Lead",
    company_name: "BioAro, Canada",
    icon: null,
    iconBg: "#0f172a",
    date: "Jan 2024 — Present",
    current: true,
    tags: ["Security", "QA Lead", "TypeScript", "CI/CD"],
    points: [
      "Lead end-to-end QA strategy covering manual, automated, and security testing across the full product lifecycle.",
      "Conduct security assessments, threat modelling, and vulnerability testing to protect sensitive biometric data.",
      "Manage and mentor a QA team — establishing testing standards, review processes, and quality gates in CI/CD pipelines.",
      "Drive secure coding practices and perform regular code-level security reviews with the engineering team.",
      "Report quality metrics and risk posture directly to senior leadership and external compliance stakeholders.",
    ],
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "I've had the pleasure of using the applications developed by Chuks, our full-stack developer.The user experience is consistently seamless and intuitive",
    name: "Emily Samuels",
    designation: "CEO",
    company: "Swipe",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like chuks does.",
    name: "Wilfred Patterson",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Chuks optimized our website, our traffic increased by 50%. We can't thank you enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: Project[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
