import React from "react";
import { motion } from "framer-motion";
import BackTheme from "../backgroung/BackTheme";
import { Layers3, Code, Terminal, GitBranch, Database, Settings, Zap, Globe, Monitor } from "lucide-react";

// --- Skill Data ---
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layers3,
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    color: "bg-blue-600/20 text-blue-300",
  },
  {
    title: "Backend & API",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Authentication (JWT)", "SendGrid API", "MailJS API"],
    color: "bg-purple-600/20 text-purple-300",
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MongoDB", "Mongoose ORM", "CRUD Operations"],
    color: "bg-green-600/20 text-green-300",
  },
  {
    title: "Tools & Workflow",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    color: "bg-yellow-600/20 text-yellow-300",
  },
];

// --- Project Data ---
const projectData = [
  {
    title: "WorkEasy - MERN Task Manager",
    subtitle: "Full Stack MERN Application with Email Integration",
    description:
      "A complete task management app built using the **MERN stack** and styled with **Tailwind CSS**. It features robust **user authentication** enhanced by **SendGrid**, which handles secure email delivery for OTP verification and account management. This project demonstrates seamless full-stack functionality and advanced third-party API integration.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "SendGrid API"],
    features: ["Secure User Authentication (Sign Up/Log In)", "**SendGrid Email OTP Verification**", "CRUD Operations for Tasks", "Task Filtering & Status Updates", "Responsive Design"],
    icon: Settings,
    liveLink: "https://workeasym.netlify.app/",
    githubFrontend: "https://github.com/RudraPrakash-m/TaskManager-frontend",
    githubBackend: "https://github.com/RudraPrakash-m/TaskManagerBackend-backend",
  },
  {
    title: "Mongo Universe - E-Learning Website",
    subtitle: "Static Website / API Integration",
    description:
      "An e-learning platform dedicated to MongoDB fundamentals. Built using foundational web technologies (**HTML, CSS, JavaScript**), this project emphasizes clean, responsive front-end design and includes a functional contact form integrated via the **MailJS API** for direct user communication.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MailJS API"],
    features: ["MongoDB Educational Content", "**MailJS Contact Form Integration**", "Fully Responsive Layout", "Interactive Elements"],
    icon: Globe,
    liveLink: "https://mongouniverse.netlify.app/",
    githubFrontend: "No Dedicated Repo",
    githubBackend: "",
  },
  {
    title: "Rudra Prakash Portfolio (V1)",
    subtitle: "Foundational Web Development",
    description:
      "This project marks the start of my web development journey during the MERN stack course. It is a sleek, responsive portfolio built exclusively with **HTML and CSS**, demonstrating core competencies in structuring content and creating professional, aesthetic layouts without relying on frameworks.",
    techStack: ["HTML5", "CSS3", "Responsive Design"],
    features: ["Clean, Professional Layout", "Responsive Design for all devices", "Pure HTML/CSS Implementation"],
    icon: Monitor,
    liveLink: "https://rudraprakashportfolio.netlify.app/",
    githubFrontend: "No Dedicated Repo",
    githubBackend: "",
  },
];

// --- Motion Variants ---
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardHover = { scale: 1.05, boxShadow: "0 10px 25px rgba(34,197,94,0.5)" };

// --- Skill Badge Component ---
const SkillBadge = ({ skill, color }) => (
  <motion.span
    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${color} mr-2 mb-2`}
    whileHover={{ scale: 1.1, backgroundColor: "#16a34a" }}
    transition={{ duration: 0.2 }}
  >
    {skill}
  </motion.span>
);

// --- Main Projects Component ---
const Projects = () => {
  return (
    <BackTheme>
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.header
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight mb-4"
            variants={fadeInUp}
          >
            <span className="text-green-400">Portfolio</span> & Key Projects
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 font-light max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            A showcase of my full-stack development skills, ranging from core web technologies to complex MERN applications with modern API integrations.
          </motion.p>
        </motion.header>

        {/* Technical Skills */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-8 flex items-center border-b border-gray-700 pb-2">
            <Code className="w-6 h-6 text-green-400 mr-3" />
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800 transition duration-300 hover:border-green-500"
                variants={fadeInUp}
                whileHover={cardHover}
              >
                <category.icon className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-xl font-semibold text-gray-100 mb-4">{category.title}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, sIndex) => (
                    <SkillBadge key={sIndex} skill={skill} color={category.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
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
                <h3 className="text-3xl font-bold text-green-400 mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">{project.subtitle}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

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

        {/* Footer */}
        <motion.div
          className="mt-12 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p>
            This portfolio showcases versatility, covering everything from core web development to complex full-stack applications and API integrations.
          </p>
        </motion.div>

      </div>
    </BackTheme>
  );
};

export default Projects;
