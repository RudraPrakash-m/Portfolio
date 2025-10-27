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

const AboutFooter = ({ data: { fadeUp } }) => {
  return (
    <motion.div
      className="mt-12 text-center text-gray-500 text-sm"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      I am actively seeking opportunities to contribute my MERN stack expertise
      to innovative projects.
    </motion.div>
  );
};

export default AboutFooter;
