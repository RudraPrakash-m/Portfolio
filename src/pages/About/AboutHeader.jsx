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

const AboutHeader = ({ data: { staggerContainer, fadeUp } }) => {
  return (
    <motion.header
      className="text-center mb-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-4"
        variants={fadeUp}
      >
        <span className="text-green-400">Profile</span> & Core Competencies
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 font-light max-w-3xl mx-auto"
        variants={fadeUp}
      >
        A detailed look into the background, objectives, and foundational
        experiences of Rudra Prakash Mallick.
      </motion.p>
    </motion.header>
  );
};

export default AboutHeader;
