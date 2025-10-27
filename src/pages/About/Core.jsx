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

const Core = ({ data: { staggerContainer, philosophyPoints, fadeUp } }) => {
  return (
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
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(34,197,94,0.4)",
            }}
          >
            <point.icon className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {point.title}
            </h3>
            <p className="text-gray-400 text-sm">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Core;
