// ScrollIndicator.jsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const [scrollHeight, setScrollHeight] = useState(1);
  const [windowHeight, setWindowHeight] = useState(1);

  // Motion value for scroll
  const scrollY = useMotionValue(0);

  // Transform scrollY into progress (0 → 1)
  const progress = useTransform(scrollY, [0, scrollHeight - windowHeight], [0, 1]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setScrollHeight(document.body.scrollHeight);
    };

    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    // Initialize
    handleResize();
    handleScroll();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollY]);

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-green-400 via-lime-400 to-green-500 z-50"
    />
  );
};

export default ScrollIndicator;
