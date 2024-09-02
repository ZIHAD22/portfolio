import { skills } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const SkillTabs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold mb-8">
        {skills.title}
      </h1>
      <p className="max-w-[900px] text-center mx-auto text-white/80">
        {skills.description}
      </p>
      <div className="grid grid-cols-1  xl:grid-cols-3 gap-4 w-full my-8">
        {skills.skills.map((skill, i) => (
          <div
            key={i}
            className="border-2 border-accent p-5 rounded-md text-center"
          >
            <h1 className="flex justify-center text-4xl">{skill.icon}</h1>
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;
