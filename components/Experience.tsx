import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Experience
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 ">
        <ExperienceCard
          clogo="/companyLogo/sump.jpg"
          title="Software engineer Intern"
          company="at, Sumpositive services pvt ltd."
          point1=""
          point2=""
          startDate="Oct, 2023"
          endDate="Present"
        />
        <ExperienceCard
          clogo="/companyLogo/scope.png"
          title="Technical Team member"
          company="SCOPE Club"
          point1="Organised Several hackathons and coding contests."
          point2="Developed club's official website."
          startDate="Jan, 2022"
          endDate="Present"
        />
      </div>
    </motion.div>
  );
}
