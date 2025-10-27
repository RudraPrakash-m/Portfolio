import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Zap,
  HeartHandshake,
  BookOpen,
  Code,
} from "lucide-react";

const AboutEducation = ({ data: { fadeUp } }) => {
  return (
    <motion.section
      className="bg-[#1a1a1a] p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800 mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center border-b border-gray-700 pb-2">
        <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
        Education
      </h2>
      <ul className="space-y-6 text-gray-300 text-lg">
        <li className="pl-6 relative border-l-2 border-green-500/50">
          <div className="absolute left-[-6px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]"></div>
          <p className="font-semibold text-white">
            B.Tech in Computer Science (Ongoing)
          </p>
          <p className="text-green-400 text-sm">
            GIFT Autonomous, Bhubaneswar | CGPA: 8.32
          </p>
          <p className="mt-1 text-gray-400 text-base">
            Focused on algorithms, data structures, and software engineering
            principles.
          </p>
        </li>
        <li className="pl-6 relative border-l-2 border-gray-700/50">
          <div className="absolute left-[-6px] top-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1a1a]"></div>
          <p className="font-semibold text-white">
            Intermediate (CHSE Board, 2022)
          </p>
          <p className="text-gray-400 text-sm">
            Sai Sristi Higher Secondary School | 79.5%
          </p>
        </li>
        <li className="pl-6 relative border-l-2 border-gray-700/50">
          <div className="absolute left-[-6px] top-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1a1a]"></div>
          <p className="font-semibold text-white">Matriculation (2020)</p>
          <p className="text-gray-400 text-sm">
            Saraswati Vidya Mandir | 73.66%
          </p>
        </li>
      </ul>
    </motion.section>
  );
};

export default AboutEducation;
