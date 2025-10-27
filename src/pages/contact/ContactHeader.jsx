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

const ContactHeader = ({ data: { staggerContainer, fadeInUp } }) => {
  return (
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
        I'm actively seeking new opportunities. Reach out via the form or
        directly via email.
      </motion.p>
    </motion.header>
  );
};

export default ContactHeader;
