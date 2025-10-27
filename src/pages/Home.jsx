import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Database,
  Terminal,
} from "lucide-react";
import BackTheme from "../backgroung/BackTheme";

const socialLinks = [
  { icon: Github, href: "https://github.com/", name: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", name: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/", name: "Twitter" },
  { icon: Mail, href: "mailto:team.quantumgroup@gmail.com", name: "Email" },
];

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git/GitHub", "AWS (Basic)", "VS Code", "NPM/Yarn"],
  },
];

// Motion Variants
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const Home = () => {
  return (
    <BackTheme>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* --- Social Links --- */}
        <motion.div
          className="flex justify-center space-x-6 mb-12 pt-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-green-400 transition duration-300 transform hover:scale-110 p-2 rounded-full border border-transparent hover:border-green-400"
              whileHover={{ scale: 1.2 }}
              variants={fadeInUp}
            >
              <link.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* --- Hero Section --- */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full bg-green-900/50 flex items-center justify-center border-4 border-green-500 shadow-xl mb-6 overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/profile.png"
              alt="Rudra Prakash Mallick"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4" variants={fadeInUp}>
            Hello, I'm <br />
            <span className="text-green-400">Rudra Prakash Mallick</span>
          </motion.h1>

          <motion.p className="text-xl text-gray-300 font-light max-w-2xl mx-auto" variants={fadeInUp}>
            A passionate Software Developer focused on creating intuitive, performance-driven web applications.
          </motion.p>
        </motion.div>

        {/* --- About Section --- */}
        <motion.div
          className="bg-[#1a1a1a] p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            My Focus & Expertise
          </h2>

          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeInUp}>
              I specialize in modern JavaScript frameworks, particularly <span className="text-green-400 font-semibold">React</span>, and have a strong command of backend with <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-400 font-semibold">Express</span>. My passion is translating complex ideas into clean, efficient, visually appealing interfaces.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Hands-on experience in full-stack project development, from designing database architectures with <span className="text-green-400 font-semibold">MongoDB</span> to deploying and monitoring live production environments.
            </motion.p>
            <motion.p className="font-semibold text-green-400" variants={fadeInUp}>
              Let's connect to discuss how my skills can bring your next idea to life!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* --- Technology Stack --- */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <motion.div
                key={tech.category}
                className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-800 flex flex-col h-full"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(34,197,94,0.5)" }}
                variants={fadeInUp}
              >
                <div className="flex items-center mb-4">
                  <tech.icon className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-100">{tech.category}</h3>
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

        {/* --- Footer --- */}
        <motion.footer
          className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-6 pb-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-green-400 font-semibold">Rudra Prakash Mallick</span> — Built with React & Tailwind CSS
        </motion.footer>
      </div>
    </BackTheme>
  );
};

export default Home;
