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
import BackTheme from "../../backgroung/BackTheme";
import AboutFooter from "./AboutFooter";
import AboutHeader from "./AboutHeader";
import CareerObjective from "./CareerObjective";
import Core from "./Core";
import AboutEducation from "./AboutEducation";

const philosophyPoints = [
  {
    icon: Zap,
    title: "MERN Stack Focus",
    description:
      "Deep expertise in MongoDB, Express, React, and Node.js for building robust web apps.",
  },
  {
    icon: HeartHandshake,
    title: "Self-Motivated & Driven",
    description:
      "Committed to productive contributions and continuous skill enhancement.",
  },
  {
    icon: BookOpen,
    title: "Problem Solver",
    description:
      "Applying strong problem-solving skills to create efficient and scalable solutions.",
  },
];

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
        <AboutHeader data={{ staggerContainer, fadeUp }} />

        {/* Career Objective */}
        <CareerObjective data={{ fadeUp }} />

        {/* Core Focuses */}
        <Core data={{ staggerContainer, philosophyPoints, fadeUp }} />

        {/* Education */}
        <AboutEducation data={{ fadeUp }} />

        {/* Footer */}
        <AboutFooter data={{ fadeUp }} />
      </div>
    </BackTheme>
  );
};

export default About;
