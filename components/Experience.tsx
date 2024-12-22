import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-700 dark:text-gray-400 text-2xl font-outfit">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
        <ExperienceCard
          clogo="/companyLogo/sump.jpg"
          title="Software engineer Intern"
          company="Sumpositive services pvt ltd."
          point1="Worked on angular forms"
          point2="Worked on java Springboot backend"
          startDate="Oct, 2023"
          endDate="feb, 2023"
        />
        <ExperienceCard
          clogo="/companyLogo/scope.png"
          title="Software Engineer"
          company="Mitt Arv"
          point1="Worked on internal Tools"
          point2="Developed features and fixed several bugs."
          startDate="Mar, 2023"
          endDate="Present"
        />
      </div>
    </motion.div>
  );
}
