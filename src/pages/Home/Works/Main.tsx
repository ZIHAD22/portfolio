"use client";
import { projects } from "@/lib/constant";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Main = () => {
  const [projectSearch, setProjectSearch] = useState("");
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-center my-5">Projects</h1>
      <div className="my-5 flex justify-between xl:justify-center">
        <Input
          value={projectSearch}
          onChange={(e) => setProjectSearch(e.target.value)}
          type="text"
          name="search"
          className="xl:w-1/2 rounded-r-none "
          placeholder="Search By Tag And Category"
        />
        <Button variant="outline" className="border-l-0 rounded-l-none">
          Search
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {projects?.map((project, i) => (
          <ProjectCard
            key={i}
            category={project.category}
            description={project.description}
            github={project.github}
            image={project.image}
            live={project.live}
            stack={project.stack}
            title={project.title}
            _id={project._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
