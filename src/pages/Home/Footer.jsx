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

const Footer = () => {
  return (
    <motion.footer
      className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-6 pb-6 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      © {new Date().getFullYear()}{" "}
      <span className="text-green-400 font-semibold">
        Rudra Prakash Mallick
      </span>{" "}
      — Built with React & Tailwind CSS
    </motion.footer>
  );
};

export default Footer;
