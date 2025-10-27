import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Database,
  Terminal,
  Heart,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Tech = ({ data: { staggerContainer, technologies, fadeInUp } }) => {
  return (
    <motion.div
      className="mb-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Technology Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <motion.div
            key={tech.category}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(34,197,94,0.5)",
            }}
            variants={fadeInUp}
          >
            <div className="flex items-center mb-4">
              <tech.icon className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-xl font-semibold text-gray-100">
                {tech.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {tech.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="bg-green-900/40 text-green-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm cursor-default"
                  whileHover={{ scale: 1.1, backgroundColor: "#16a34a" }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tech;
