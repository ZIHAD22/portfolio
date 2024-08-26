import { Tlinks, TSocials, TStats } from "@/Types";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

export const links: Tlinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
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
    path: "/",
  },
  {
    icon: <FaLinkedin />,
    path: "/",
  },
  {
    icon: <FaYoutube />,
    path: "/",
  },
  {
    icon: <FaTwitter />,
    path: "/",
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
