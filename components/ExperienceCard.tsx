import { motion } from "framer-motion";
import React from "react";

type Props = {
  clogo: string;
  title: string;
  company: string;
  point1?: string;
  point2?: string;
  startDate: string;
  endDate: string;
};

export default function ExperienceCard({
  clogo,
  title,
  company,
  point1,
  point2,
  startDate,
  endDate,
}: Props) {
  return (
    <article className="flex flex-col rounded-2xl flex-shrink-0 snap-center backdrop-blur-lg font-outfit 
    bg-gradient-to-br from-white/90 to-white/70 dark:from-[#1a1a1a]/90 dark:to-[#1a1a1a]/70
    shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] 
    hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)]
    transition-all duration-500 ease-out
    overflow-hidden md:py-10 py-8 md:mt-10 border border-gray-100/50 dark:border-gray-800/50 
    hover:border-blue-500/30 dark:hover:border-blue-500/30 md:max-w-3xl max-w-xs md:px-8 px-6 
    select-none transform hover:-translate-y-2 hover:scale-[1.01]">
      <div className="flex items-center space-x-5">

        <div className="flex flex-col items-start space-y-1">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
          dark:from-white dark:to-gray-200 bg-clip-text text-transparent tracking-tight">
            {title}
          </h4>
          <p className="font-semibold bg-gradient-to-r from-blue-600 to-blue-400 
          dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            {company}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 
        uppercase tracking-wider px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 
        rounded-full w-fit">
          {startDate} - {endDate}
        </p>

        <ul className="space-y-4 mt-6">
          {point1 && (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start group"
            >
              <span className="h-2.5 w-2.5 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 
              dark:from-blue-400 dark:to-blue-300 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{point1}</span>
            </motion.li>
          )}
          {point2 && (
            <motion.li 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start group"
            >
              <span className="h-2.5 w-2.5 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 
              dark:from-blue-400 dark:to-blue-300 mr-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{point2}</span>
            </motion.li>
          )}
        </ul>
      </div>
    </article>
  );
}
