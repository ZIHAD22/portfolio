import { TabsContent } from "@/components/ui/tabs";
import { education } from "@/lib/constant";
import React from "react";

const EducationTabs = () => {
  return (
    <TabsContent value="education" className="">
      <div>
        <h1 className="text-4xl text-center font-semibold mb-8">
          {education.title}
        </h1>
        <p className="max-w-[900px] text-center mx-auto text-white/80">
          {education.description}
        </p>
        <div className="grid grid-cols-1  xl:grid-cols-2 gap-4 w-full my-8">
          {education.education.map((edu, i) => (
            <div key={i} className="border-2 border-accent p-5 rounded-md">
              <h5 className="text-xl font-bold">
                Institution: {edu.institution}
              </h5>
              <h5 className="text-sm text-white/80 mt-3">{edu.degree}</h5>
              <h5 className="text-sm text-white/80 mt-3">
                Batch - {edu.batch}, From {edu.duration.from} to{" "}
                {edu.duration.to}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default EducationTabs;
