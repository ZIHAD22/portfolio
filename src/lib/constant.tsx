import { TAbout, TEducation, Tlinks, TSkills, TSocials, TStats } from "@/Types";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaFacebook,
  FaReact,
} from "react-icons/fa";

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
  {
    name: "contact",
    path: "/contact",
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
      linkValue: "https://www.wa.me/+8801818991513",
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
