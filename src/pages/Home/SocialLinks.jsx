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

const SocialLinks = ({ data: { socialLinks, staggerContainer, fadeInUp } }) => {
  return (
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
  );
};

export default SocialLinks;
