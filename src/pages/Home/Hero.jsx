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

const Hero = ({ data: { staggerContainer, fadeInUp } }) => {
  return (
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

      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4"
        variants={fadeInUp}
      >
        Hello, I'm <br />
        <span className="text-green-400">Rudra Prakash Mallick</span>
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 font-light max-w-2xl mx-auto"
        variants={fadeInUp}
      >
        A passionate Software Developer focused on creating intuitive,
        performance-driven web applications.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
