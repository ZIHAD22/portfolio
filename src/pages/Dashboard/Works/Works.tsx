"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";

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
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Works</h1>
      </div>
      <div
        className="rounded-lg border border-dashed shadow-sm py-[20px]"
        x-chunk="dashboard-02-chunk-1"
      >
        {projects.length === 0 ? (
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button variant="outline" className="mt-4">
              Add Project
            </Button>
          </div>
        ) : (
          <ProjectList projects={projects} />
        )}
      </div>
    </main>
  );
};

export default Works;
