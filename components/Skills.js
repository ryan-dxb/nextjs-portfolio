import React from "react";
import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden text-center flex-col md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="pt-20 grid grid-cols-4 gap-5">
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
        <SingleSkill />
      </div>
    </motion.div>
  );
}

export default Skills;
