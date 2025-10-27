import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import BackTheme from "../../backgroung/BackTheme";
import { AllData } from "../../Layout";
import EmailModal from "./EmailModal";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import Hero from "./Hero";
import Tech from "./Tech";
import Popup from "./Popup";

const socialLinks = [
  { icon: Github, href: "https://github.com/", name: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/", name: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/", name: "Twitter" },
  { icon: Mail, href: "mailto:team.quantumgroup@gmail.com", name: "Email" },
];

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    skills: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Redux",
      "HTML5 & CSS3",
    ],
  },
  {
    category: "Backend & Database",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    category: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git/GitHub", "AWS (Basic)", "VS Code", "NPM/Yarn"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Home = () => {
  const { userData } = useContext(AllData) || { userData: [] };
  const [totalLikes, setTotalLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // console.log(userData);

  useEffect(() => {
    if (Array.isArray(userData.data)) setTotalLikes(userData.totalLikes);
    const storedLike = JSON.parse(localStorage.getItem("portfoliolike"));
    if (storedLike?.like) setLiked(true);
  }, [userData]);

  const showPopup = (message, type = "success") => {
    setPopup({ show: true, message, type });
    setTimeout(
      () => setPopup({ show: false, message: "", type: "success" }),
      3000
    );
  };

  const handleLike = () => {
    if (liked) return showPopup("You’ve already liked", "error");
    setShowEmailPrompt(true);
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      showPopup("Please enter a valid email.", "error");
      return;
    }

    try {
      // send to backend
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API}/givelike`,
        { email: email.trim() }
      );

      // Normalized checks to support either backend variant:
      // - Variant A: backend returns 201 for created
      // - Variant B: backend returns 200 and { message: "You already liked...", liked: true } (or similar)
      const status = res?.status;
      const data = res?.data || {};

      const alreadyExists =
        status === 200 &&
        (data?.liked === true || /already/i.test(String(data?.message || "")));

      const created = status === 201 || (status === 200 && data?.created); // some backends may return created flag

      if (created) {
        // newly created like
        localStorage.setItem("portfoliolike", JSON.stringify({ like: true }));
        setLiked(true);
        setShowEmailPrompt(false);
        setEmail("");
        setTotalLikes((prev) => prev + 1);
        showPopup("Thanks for liking! ❤️", "success");
        return;
      }

      if (alreadyExists) {
        // user already liked from another device/system — don't increment
        localStorage.setItem("portfoliolike", JSON.stringify({ like: true }));
        setLiked(true);
        setShowEmailPrompt(false);
        setEmail("");
        showPopup("You already liked this ❤️", "error");
        return;
      }

      // Fallback: if backend returned 200 with data but no clear flag, attempt to interpret:
      if (status === 200 && data) {
        // if backend returned the created doc or success: handle as success if looks like creation
        if (data?.message && /thank/i.test(String(data.message))) {
          localStorage.setItem("portfoliolike", JSON.stringify({ like: true }));
          setLiked(true);
          setShowEmailPrompt(false);
          setEmail("");
          setTotalLikes((prev) => prev + 1);
          showPopup(data.message || "Thanks for liking! ❤️", "success");
          return;
        }
        // otherwise, treat as already liked to be safe
        localStorage.setItem("portfoliolike", JSON.stringify({ like: true }));
        setLiked(true);
        setShowEmailPrompt(false);
        setEmail("");
        showPopup(data.message || "You already liked this ❤️", "error");
        return;
      }

      // If status unexpected, show generic success but do not increment (safer)
      showPopup(
        "Response received. If this was your first like it will be counted shortly.",
        "success"
      );
    } catch (error) {
      // If backend responds with 4xx/409 we can also check error.response
      const errRes = error?.response;
      if (errRes) {
        const status = errRes.status;
        const data = errRes.data || {};

        // If backend used 409 Conflict for existing like
        if (
          status === 409 ||
          (data?.message && /already/i.test(String(data.message)))
        ) {
          localStorage.setItem("portfoliolike", JSON.stringify({ like: true }));
          setLiked(true);
          setShowEmailPrompt(false);
          setEmail("");
          showPopup(data?.message || "You already liked this ❤️", "error");
          return;
        }

        // Bad request
        if (status === 400) {
          showPopup(data?.error || data?.message || "Invalid email", "error");
          return;
        }
      }

      console.error("Error submitting like:", error);
      showPopup("Something went wrong. Try again later.", "error");
    }
  };

  return (
    <BackTheme>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* --- Social Links --- */}
        <SocialLinks data={{ socialLinks, staggerContainer, fadeInUp }} />

        {/* --- Hero Section --- */}
        <Hero data={{ staggerContainer, fadeInUp }} />

        {/* --- About Section --- */}
        <motion.div
          className="bg-[#1a1a1a] p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800 mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-2">
            My Focus & Expertise
          </h2>

          <motion.div
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeInUp}>
              I specialize in modern JavaScript frameworks, particularly{" "}
              <span className="text-green-400 font-semibold">React</span>, and
              have a strong command of backend with{" "}
              <span className="text-green-400 font-semibold">Node.js</span> and{" "}
              <span className="text-green-400 font-semibold">Express</span>.
            </motion.p>
            <motion.p variants={fadeInUp}>
              Hands-on experience in full-stack project development with{" "}
              <span className="text-green-400 font-semibold">MongoDB</span> and
              live deployment.
            </motion.p>
            <motion.p
              className="font-semibold text-green-400"
              variants={fadeInUp}
            >
              Let's connect and build something meaningful together!
            </motion.p>
          </motion.div>
        </motion.div>

        {/* --- Technology Stack --- */}
        <Tech data={{ staggerContainer, technologies, fadeInUp }} />

        {/* --- Like Section --- */}
        <motion.div
          className="flex flex-col items-center justify-center mt-16 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            disabled={liked}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-semibold shadow-md border transition duration-300 ${
              liked
                ? "bg-green-500 border-green-400 text-white cursor-not-allowed"
                : "bg-transparent border-green-400 text-green-400 hover:bg-green-500 hover:text-white"
            }`}
          >
            <Heart
              className={`w-6 h-6 ${
                liked ? "fill-white text-white" : "text-green-400"
              }`}
            />
            <span>{liked ? "Liked ❤️" : "Like This Portfolio"}</span>
          </motion.button>

          <p className="text-gray-400 text-sm mt-3">
            ❤️ {totalLikes} {totalLikes === 1 ? "like" : "likes"} so far
          </p>
        </motion.div>

        {/* --- Email Modal --- */}
        <AnimatePresence>
          {showEmailPrompt && (
            <EmailModal
              data={{ handleSubmitEmail, setShowEmailPrompt, setEmail, email }}
            />
          )}
        </AnimatePresence>

        {/* --- Animated Popup (instead of alert) --- */}
        <AnimatePresence>
          {popup.show && <Popup data={{ popup }} />}
        </AnimatePresence>

        {/* footer code */}
        <Footer />
      </div>
    </BackTheme>
  );
};

export default Home;
