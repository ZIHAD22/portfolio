import { projects } from "@/lib/constant";
import React from "react";
import ProjectCard from "./ProjectCard";

const Main = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          category={project.category}
          description={project.description}
          github={project.github}
          image={project.image}
          live={project.live}
          stack={project.stack}
          title={project.title}
          id={project.id}
        />
      ))}
    </div>
  );
};

export default Main;
