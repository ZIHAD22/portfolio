import { about } from "@/lib/constant";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const AboutTabs = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold mb-8">{about.title}</h1>
      <p className="max-w-[900px] text-center mx-auto text-white/80">
        {about.description}
      </p>
      <div className="grid grid-cols-1  xl:grid-cols-3 gap-4 w-full my-8">
        {about.info.map((info, i) => (
          <a
            key={i}
            href={info.linkValue && info.linkValue}
            className="border-2 border-accent p-5 rounded-md text-center flex justify-between items-center"
          >
            <div>
              <span className="text-base">{info.fieldName}: </span>
              <span className="text-white/80">{info.fieldValue}</span>
            </div>
            {info.linkValue && (
              <div className="text-accent">
                <BsArrowUpRight size="25px" />
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutTabs;
