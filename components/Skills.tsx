import { motion } from "framer-motion";
import React from "react";
import TechStackButton from "./ui/TechStackButton";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-6 min-h-screen justify-center items-center xl:space-y-0 mx-auto mt-32"
    >
      <h3 className="absolute top-32  md:top-32 xl:top-24 2xl:top-32  uppercase tracking-[20px] text-gray-700 dark:text-gray-400 text-2xl">
        Skills
      </h3>
      <div className="w-full max-w-5xl mx-auto mt-24 xs:mt-48 md:mt-32 xl:mt-24 2xl:mt-32 px-4 sm:px-8 py-8 sm:py-10
        bg-white/80 dark:bg-neutral-800/50 
        backdrop-blur-sm border border-gray-200/60 dark:border-neutral-700/50 rounded-xl 
        shadow-sm hover:shadow-md transition-all duration-300">
        
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full sm:w-11/12 space-y-6">
            <div className="flex gap-2.5 sm:gap-3 flex-wrap justify-center sm:justify-start">
              <TechStackButton name="React" icon="bg-cyan-500/90 hover:bg-cyan-400 text-white" />
              <TechStackButton name="Next.js" icon="bg-green-500/90 hover:bg-green-400 text-white" />
              <TechStackButton name="JavaScript" icon="bg-yellow-500/90 hover:bg-yellow-400 text-white" />
              <TechStackButton name="Typescript" icon="bg-rose-500/90 hover:bg-rose-400 text-white" />
              <TechStackButton name="Express.js" icon="bg-indigo-600/90 hover:bg-indigo-500 text-white" />
              <TechStackButton name="Node.js" icon="bg-orange-500/90 hover:bg-orange-400 text-white" />
              <TechStackButton name="Tailwind CSS" icon="bg-lime-500/90 hover:bg-lime-400 text-white" />
              <TechStackButton name="PostgreSQL" icon="bg-teal-600/90 hover:bg-teal-500 text-white" />
              <TechStackButton name="Prisma" icon="bg-pink-600/90 hover:bg-pink-500 text-white" />
              <TechStackButton name="MongoDB" icon="bg-green-600/90 hover:bg-green-500 text-white" />
              <TechStackButton name="C" icon="bg-violet-600/90 hover:bg-violet-500 text-white" />
              <TechStackButton name="C++" icon="bg-red-600/90 hover:bg-red-500 text-white" />
              <TechStackButton name="Python" icon="bg-cyan-700/90 hover:bg-cyan-600 text-white" />
              <TechStackButton name="Framer Motion" icon="bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white" />
              <TechStackButton name="shadcn/ui" icon="bg-stone-600/90 hover:bg-stone-500 text-white" />
              <TechStackButton name="Git" icon="bg-orange-600/90 hover:bg-orange-500 text-white" />
              <TechStackButton name="Docker" icon="bg-blue-600/90 hover:bg-blue-500 text-white" />
            </div>
          </div>
{/* 
          <div className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300">
            <IconCloudDemo />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
