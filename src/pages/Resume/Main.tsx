"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education } from "@/lib/constant";
import { motion } from "framer-motion";
import React from "react";

const Main = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="education" className="flex flex-col gap-[60px]">
            <TabsList className="flex flex-col xl:flex-row w-full max-w-[380px] xl:max-w-full mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about" className="w-full">
                About
              </TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              <TabsContent value="education" className="">
                <div>
                  <h1 className="text-4xl text-center font-semibold mb-8">
                    {education.title}
                  </h1>
                  <p className="max-w-[900px] text-center mx-auto text-white/80">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[480px]">
                    <div className="grid grid-cols-2 gap-4 w-full mt-8">
                      {education.education.map((edu, i) => (
                        <div key={i} className="border-2 border-accent p-5">
                          <h5 className="text-xl font-bold">
                            Institution: {edu.institution}
                          </h5>
                          <h5 className="text-sm text-white/80 mt-3">
                            {edu.degree}
                          </h5>
                          <h5 className="text-sm text-white/80 mt-3">
                            Batch - {edu.batch}, From {edu.duration.from} to{" "}
                            {edu.duration.to}
                          </h5>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills">skills</TabsContent>
              <TabsContent value="about">About</TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
