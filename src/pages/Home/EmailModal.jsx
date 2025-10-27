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

const EmailModal = ({
  data: { handleSubmitEmail, setShowEmailPrompt, setEmail, email },
}) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-green-600 w-80 text-center relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setShowEmailPrompt(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        <h3 className="text-xl font-semibold text-green-400 mb-4">
          Like this Portfolio?
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          Enter your email to show appreciation.
        </p>
        <form onSubmit={handleSubmitEmail} className="flex flex-col space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="bg-transparent border border-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-green-500"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-green-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EmailModal;
