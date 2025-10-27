import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Smartphone,
  MapPin,
  Linkedin,
  Send,
  CornerUpRight,
  Eye,
  EyeOff,
} from "lucide-react";

const ContactForm = ({
  data: { fadeInUp, formRef, sendEmail, loading, status },
}) => {
  return (
    <motion.div
      className="lg:col-span-2 p-6 bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2 className="text-2xl font-bold text-gray-100 mb-6 border-b border-green-700/50 pb-2">
        Send Me a Message
      </h2>
      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <motion.div variants={fadeInUp}>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
            placeholder="Your Name"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
            placeholder="example@company.com"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
            placeholder="Your message..."
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white ${
            loading
              ? "bg-green-700/50 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } transition duration-300`}
          whileHover={{ scale: loading ? 1 : 1.02 }}
        >
          {loading ? (
            <>
              <CornerUpRight className="w-5 h-5 mr-2 animate-pulse" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </motion.button>

        {status && (
          <motion.p
            className={`mt-4 text-center text-sm font-medium ${
              status.includes("Failed") ? "text-red-400" : "text-green-400"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
