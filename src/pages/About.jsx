import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Zap, HeartHandshake, BookOpen, Code } from 'lucide-react';
import BackTheme from '../backgroung/BackTheme';

const philosophyPoints = [
  {
    icon: Zap,
    title: "MERN Stack Focus",
    description: "Deep expertise in MongoDB, Express, React, and Node.js for building robust web apps.",
  },
  {
    icon: HeartHandshake,
    title: "Self-Motivated & Driven",
    description: "Committed to productive contributions and continuous skill enhancement.",
  },
  {
    icon: BookOpen,
    title: "Problem Solver",
    description: "Applying strong problem-solving skills to create efficient and scalable solutions.",
  },
];

// Variants for motion
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <BackTheme>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
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
            A detailed look into the background, objectives, and foundational experiences of Rudra Prakash Mallick.
          </motion.p>
        </motion.header>

        {/* Career Objective */}
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
            I aim to leverage my skills in the <span className="text-green-400 font-semibold">MERN stack</span> to build
            efficient, user-friendly, and scalable web applications. I am self-driven, continuously learning, and focused
            on delivering high-quality solutions in a professional environment.
          </p>
        </motion.section>

        {/* Core Focuses */}
        <motion.section
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Core Focuses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-500 transition duration-300"
                variants={fadeUp}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34,197,94,0.4)" }}
              >
                <point.icon className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{point.title}</h3>
                <p className="text-gray-400 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
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
              <p className="font-semibold text-white">B.Tech in Computer Science (Ongoing)</p>
              <p className="text-green-400 text-sm">GIFT Autonomous, Bhubaneswar | CGPA: 8.32</p>
              <p className="mt-1 text-gray-400 text-base">
                Focused on algorithms, data structures, and software engineering principles.
              </p>
            </li>
            <li className="pl-6 relative border-l-2 border-gray-700/50">
              <div className="absolute left-[-6px] top-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1a1a]"></div>
              <p className="font-semibold text-white">Intermediate (CHSE Board, 2022)</p>
              <p className="text-gray-400 text-sm">Sai Sristi Higher Secondary School | 79.5%</p>
            </li>
            <li className="pl-6 relative border-l-2 border-gray-700/50">
              <div className="absolute left-[-6px] top-1 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#1a1a1a]"></div>
              <p className="font-semibold text-white">Matriculation (2020)</p>
              <p className="text-gray-400 text-sm">Saraswati Vidya Mandir | 73.66%</p>
            </li>
          </ul>
        </motion.section>

        {/* Footer */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          I am actively seeking opportunities to contribute my MERN stack expertise to innovative projects.
        </motion.div>
      </div>
    </BackTheme>
  );
};

export default About;
