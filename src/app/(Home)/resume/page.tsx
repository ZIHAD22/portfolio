import Main from "@/pages/Home/Resume/Main";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume | Md Zihad",
  description: "Full Stack Javascript Developer",
};

const Resume = () => {
  return <Main />;
};

export default Resume;
