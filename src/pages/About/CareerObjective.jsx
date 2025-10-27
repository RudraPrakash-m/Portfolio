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

const CareerObjective = ({ data: { fadeUp } }) => {
  return (
    <motion.section
      className="bg-[#1a1a1a] p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800 mb-12"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center border-b border-gray-700 pb-2">
        <Briefcase className="w-6 h-6 text-green-400 mr-3" />
        Career Objective
      </h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        I aim to leverage my skills in the{" "}
        <span className="text-green-400 font-semibold">MERN stack</span> to
        build efficient, user-friendly, and scalable web applications. I am
        self-driven, continuously learning, and focused on delivering
        high-quality solutions in a professional environment.
      </p>
    </motion.section>
  );
};

export default CareerObjective;
