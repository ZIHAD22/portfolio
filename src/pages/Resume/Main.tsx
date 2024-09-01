"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { education } from "@/lib/constant";
import { motion } from "framer-motion";
import React from "react";
import EducationTabs from "./EducationTabs";
import SkillTabs from "./SkillTabs";

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
        <div className="mx-auto w-full">
          <Tabs defaultValue="education" className="flex flex-col gap-[60px]">
            <TabsList className="flex flex-col xl:flex-row w-full xl:max-w-full mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="about" className="w-full">
                About
              </TabsTrigger>
              <TabsTrigger value="education" className="w-full">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="w-full">
                Skills
              </TabsTrigger>
              <TabsTrigger value="projects" className="w-full">
                Projects
              </TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
              <EducationTabs />
              <TabsContent value="skills">
                <SkillTabs />
              </TabsContent>
              <TabsContent value="about">About</TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
