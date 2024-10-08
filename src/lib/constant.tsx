import {
  TAbout,
  TEducation,
  Tlinks,
  TProject,
  TSkills,
  TSocials,
  TStats,
} from "@/Types";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaReact,
} from "react-icons/fa";

export const dashboardMenu = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Work",
    path: "/works",
    count: 6,
  },
];

export const links: Tlinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/works",
  },
];

export const socialLinks: TSocials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ZIHAD22",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/md-zihad-324b56208/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/md.zihad.5011516/",
  },
  {
    icon: <FaWhatsapp />,
    path: "wa.me/+8801818991513",
  },
];

export const stats: TStats = [
  {
    num: 4,
    text: "Years Of Experiences",
  },
  {
    num: 50,
    text: "Project Completed",
  },
  {
    num: 9,
    text: "Technology Master",
  },
  {
    num: 1000,
    text: "Code Commits",
  },
];

// about Data
export const about: TAbout = {
  title: "About me",
  description:
    "With over 5 years of experience in front-end development, I offer a wide range of technical skills to ensure your web applications are built to the highest standards. My expertise lies in crafting pixel-perfect, responsive designs and utilizing modern technologies to bring your vision to life.",
  info: [
    { fieldName: "Name", fieldValue: "MD.ZIHAD" },
    { fieldName: "Experiences", fieldValue: "4+" },
    { fieldName: "Nationality", fieldValue: "Bangladeshi" },
    {
      fieldName: "Email",
      fieldValue: "mdzihad2244@gmail.com",
      linkValue: "mailto:mdzihad2244@gmail.com",
    },
    { fieldName: "Freelance", fieldValue: "Available" },
    {
      fieldName: "Linkedin",
      fieldValue: "MD ZIHAD",
      linkValue: "https://www.linkedin.com/in/md-zihad-324b56208/",
    },
    {
      fieldName: "Whatsapp",
      linkValue: "https://wa.me/+8801818991513",
      fieldValue: "01818991513",
    },
  ],
};

// Education

export const education: TEducation = {
  icon: "",
  title: "Education",
  description:
    "With over 5 years of experience in front-end development, I offer a wide range of technical skills to ensure your web applications are built to the highest standards. My expertise lies in crafting pixel-perfect, responsive designs and utilizing modern technologies to bring your vision to life.",
  education: [
    {
      institution: "daffodil international university",
      degree: "bsc in software engineering",
      batch: "43",
      duration: {
        from: "25-June-2024",
        to: "30-June-2028",
      },
    },
    {
      institution: "Apollo | Become A Level 2 Web_ Developer",
      degree: "Full Stack Developer",
      batch: "3",
      duration: {
        from: "24-April-2024",
        to: "Continue",
      },
    },
    {
      institution: "Complete Web Development Course With Jhankar Mahbub",
      degree: "Front-End Developer",
      batch: "5",
      duration: {
        from: "25-June-2024",
        to: "30-June-2028",
      },
    },
    {
      institution: "atomic energy research establishment school and college",
      degree: "HSC",
      duration: {
        from: "01-January-2021",
        to: "01-January-2023",
      },
    },
  ],
};

// skills
export const skills: TSkills = {
  icon: "🔧",
  title: "Skills",
  description:
    "With over 5 years of experience in front-end development, I offer a wide range of technical skills to ensure your web applications are built to the highest standards. My expertise lies in crafting pixel-perfect, responsive designs and utilizing modern technologies to bring your vision to life.",
  skills: [
    {
      icon: <FaReact />,
      name: "React.js Development",
    },
    {
      icon: <FaReact />,
      name: "Next.js Development",
    },
    {
      icon: <FaReact />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "Redux",
    },
    {
      icon: <FaReact />,
      name: "MERN Stack",
    },
    {
      icon: <FaReact />,
      name: "Static Site Generation",
    },
    {
      icon: <FaReact />,
      name: "HTML5 & CSS3",
    },
    {
      icon: <FaReact />,
      name: "Tailwind CSS & Bootstrap 5",
    },
    {
      icon: <FaReact />,
      name: "Pixel-Perfect Design",
    },
  ],
};

// fake project data
export const projects: TProject[] = [
  {
    _id: "1",
    title: "Weather App",
    category: "Web Application",
    description:
      "A web application that _provides real-tim weather updates and forecasts using a public API.",
    stack: [{ name: "React" }, { name: "Node.js" }, { name: "Express" }],
    image: "https://ibb.co/crBqDdK",
    live: "https://weatherapp.example.com",
    github: "https://github.com/username/weather-app",
  },
  {
    _id: "2",
    title: "Portfolio Website",
    category: "Personal",
    description:
      "A personal portfolio website to showcase my projects, skills, and experiences.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "https://ibb.co/crBqDdK",
    live: "https://portfolio.example.com",
    github: "https://github.com/username/portfolio-website",
  },
  {
    _id: "3",
    title: "E-commerce Platform",
    category: "Web Application",
    description:
      "An e-commerce platform with features like product listings, shopping cart, and payment processing.",
    stack: [{ name: "Angular" }, { name: "Firebase" }, { name: "Bootstrap" }],
    image: "https://ibb.co/crBqDdK",
    live: "https://ecommerce.example.com",
    github: "https://github.com/username/ecommerce-platform",
  },
  {
    _id: "4",
    title: "Chat Application",
    category: "Web Application",
    description:
      "A real-time chat application that supports one-on-one and group messaging.",
    stack: [{ name: "Vue.js" }, { name: "Socket.io" }, { name: "Node.js" }],
    image: "https://ibb.co/crBqDdK",
    live: "https://chatapp.example.com",
    github: "https://github.com/username/chat-application",
  },
  {
    _id: "5",
    title: "Task Manager",
    category: "Productivity",
    description:
      "A task management tool that helps users create, organize, and track their tasks efficiently.",
    stack: [{ name: "Python" }, { name: "Django" }, { name: "PostgreSQL" }],
    image: "https://ibb.co/crBqDdK",
    live: "https://taskmanager.example.com",
    github: "https://github.com/username/task-manager",
  },
];
