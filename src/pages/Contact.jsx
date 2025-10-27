import React, { useState, useRef } from "react";
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
import BackTheme from "../backgroung/BackTheme";
import emailjs from "@emailjs/browser";

// Contact information
const contactInfo = [
  {
    icon: Smartphone,
    label: "Mobile Number",
    value: "+91 7846807407",
    link: "tel:+917846807407",
    isPhone: true,
  },
  {
    icon: Mail,
    label: "Primary Email",
    value: "team.quantumgroup@gmail.com",
    link: "mailto:team.quantumgroup@gmail.com",
  },
  {
    icon: Mail,
    label: "Secondary Email",
    value: "rudraprakash6458@gmail.com",
    link: "mailto:rudraprakash6458@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    value: "Rudra Prakash Mallick",
    link: "http://linkedin.com/in/rudra-prakash-mallick-71b23627b",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "CHA/42, Madhuban, Paradeep, Jagatsinghpur, Odisha, 754142",
    link: "#",
  },
];

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const PUBLIC_KEY = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_REACT_APP_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending message...");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent successfully! I will respond soon.");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus(
          "Failed to send message. Please try again or use direct email."
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <BackTheme>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
            <span className="text-green-400">Get</span> In Touch
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 font-light max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            I'm actively seeking new opportunities. Reach out via the form or directly via email.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-8 p-6 bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-800"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl font-bold text-gray-100 mb-6 border-b border-green-700/50 pb-2"
              variants={fadeInUp}
            >
              My Details
            </motion.h2>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start justify-between hover:scale-105 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-start">
                  <item.icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.isPhone ? (
                      <div className="flex items-center space-x-2">
                        <a
                          href={item.link}
                          className="text-base font-semibold text-green-300 hover:text-green-400 transition"
                        >
                          {showPhone ? item.value : "***********"}
                        </a>
                        <button
                          type="button"
                          onClick={() => setShowPhone(!showPhone)}
                          className="p-1 rounded hover:bg-green-900/30 transition"
                        >
                          {showPhone ? (
                            <EyeOff className="w-4 h-4 text-green-400" />
                          ) : (
                            <Eye className="w-4 h-4 text-green-400" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        target={item.label === "LinkedIn Profile" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className={`text-base font-semibold ${
                          item.link === "#" ? "text-gray-300" : "text-green-300 hover:text-green-400 transition"
                        }`}
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
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
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
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
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
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
                  loading ? "bg-green-700/50 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
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

        </div>
      </div>
    </BackTheme>
  );
};

export default Contact;
