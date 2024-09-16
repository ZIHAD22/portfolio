"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import Theme from "../Shared/Theme";

const Works = () => {
  const [projects, setProject] = useState([]);
  const fetchProject = async () => {
    const data = await fetch("http://localhost:3000/dashboard/works/api");
    const result = await data.json();
    setProject(result);
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <Theme
      name="Works"
      buttonName="Add Project"
      description="You can start selling as soon as you add a product."
      query="You have no products"
      isCenter={projects.length === 0}
      buttonLink="works/create-project"
    >
      {projects.length !== 0 && <ProjectList projects={projects} />}
    </Theme>
  );
};

export default Works;
