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
import BackTheme from "../../backgroung/BackTheme";
import emailjs from "@emailjs/browser";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

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
        <ContactHeader data={{ staggerContainer, fadeInUp }} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <ContactInfo
            data={{
              staggerContainer,
              fadeInUp,
              contactInfo,
              showPhone,
              setShowPhone,
            }}
          />

          {/* Contact Form */}
          <ContactForm
            data={{ fadeInUp, formRef, sendEmail, loading, status }}
          />
        </div>
      </div>
    </BackTheme>
  );
};

export default Contact;
