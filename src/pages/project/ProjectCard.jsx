import React from "react";
import { motion } from "framer-motion";
import {
  Layers3,
  Code,
  Terminal,
  GitBranch,
  Database,
  Settings,
  Zap,
  Globe,
  Monitor,
} from "lucide-react";

const ProjectCard = ({
  data: { staggerContainer, projectData, cardHover, fadeInUp },
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="space-y-12"
    >
      {projectData.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#1a1a1a] p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-800 flex flex-col lg:flex-row gap-6 lg:gap-8"
          variants={fadeInUp}
          whileHover={cardHover}
          transition={{ duration: 0.4 }}
        >
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="w-full h-48 lg:h-full bg-green-900/10 rounded-lg flex items-center justify-center p-4">
              <project.icon className="w-12 h-12 text-green-400" />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-3xl font-bold text-green-400 mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">
              {project.subtitle}
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-green-500" />
                Key Features
              </h4>
              <motion.ul
                className="grid grid-cols-2 gap-x-4 text-sm text-gray-400 list-disc list-inside"
                variants={staggerContainer}
              >
                {project.features.map((feature, fIndex) => (
                  <motion.li key={fIndex} variants={fadeInUp}>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center">
                <Terminal className="w-4 h-4 mr-2 text-green-500" />
                Stack Used
              </h4>
              <div className="flex flex-wrap">
                {project.techStack.map((tech, tIndex) => (
                  <motion.span
                    key={tIndex}
                    className="text-xs px-3 py-1 border border-green-700 text-green-300 rounded-full mr-2 mb-2 bg-green-900/30"
                    whileHover={{ scale: 1.1, backgroundColor: "#16a34a" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition"
              >
                View Live Demo
              </a>
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-400 hover:bg-green-600/10 transition"
                >
                  GitHub (Frontend)
                </a>
              )}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-md text-green-400 hover:bg-green-600/10 transition"
                >
                  GitHub (Backend)
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectCard;
