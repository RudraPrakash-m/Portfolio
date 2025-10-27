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

const ContactInfo = ({
  data: { staggerContainer, fadeInUp, contactInfo, showPhone, setShowPhone },
}) => {
  return (
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
                  target={
                    item.label === "LinkedIn Profile" ? "_blank" : "_self"
                  }
                  rel="noopener noreferrer"
                  className={`text-base font-semibold ${
                    item.link === "#"
                      ? "text-gray-300"
                      : "text-green-300 hover:text-green-400 transition"
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
  );
};

export default ContactInfo;
