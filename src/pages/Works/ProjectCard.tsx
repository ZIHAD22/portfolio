"use client";
import { TProject } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectCard = ({
  image,
  description,
  title,
  category,
  github,
  live,
  stack,
  id,
}: TProject) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <div
      className="w-full shadow-lg shadow-[#0a5b3a] h-[400px] rounded-md flex flex-col justify-center items-center border-accent border-[1px] relative"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="h-1/2 w-full p-3">
        <Image alt="" src="/assets/work/project.png" width={400} height={200} />
      </div>
      <div className="h-1/2 p-2 flex flex-col justify-evenly">
        <h1 className="p-2 text-xl">{title}</h1>
        <h1 className="text-xs text-white/80 px-2">{description}</h1>
        <div className="text-xs text-white/80 mt-9">
          {stack.map((sta, i) => (
            <span
              key={i}
              className="border-2 border-accent p-1 mx-2 rounded-md text-center"
            >
              {sta.name}
            </span>
          ))}
        </div>
      </div>
      <Link
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex font-bold text-accent bg-primary rounded-full justify-center items-center p-2 hover:bg-primary hover:text-accent border-[1px] border-accent absolute right-5 top-5"
      >
        <BsArrowUpRight size="30px" />
      </Link>
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex font-bold text-accent bg-primary rounded-full justify-center items-center p-2 hover:bg-primary hover:text-accent border-[1px] border-accent absolute right-5 top-[70px]"
      >
        <BsGithub size="30px" />
      </Link>
      {mouseOver && (
        <span className="text-xs text-accent border-[1px] border-accent p-2 absolute top-5 left-5 rounded-md bg-primary delay-100 duration-200 cursor-pointer">
          {category}
        </span>
      )}
    </div>
  );
};

export default ProjectCard;
