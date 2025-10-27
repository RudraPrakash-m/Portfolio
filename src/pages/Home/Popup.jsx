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

const Popup = ({ data: { popup } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-6 right-6 z-[100] px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white ${
        popup.type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {popup.type === "success" ? (
        <CheckCircle size={22} />
      ) : (
        <AlertCircle size={22} />
      )}
      <span className="font-medium">{popup.message}</span>
    </motion.div>
  );
};

export default Popup;
