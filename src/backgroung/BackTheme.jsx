import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BackTheme = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);
  const [winHeight, setWinHeight] = useState(1);

  const scrollProgress = useMotionValue(0);
  const width = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      setScrollY(scrollTop);
      scrollProgress.set(scrollTop / (docHeight - winHeight));
    };

    const updateDimensions = () => {
      setDocHeight(document.body.scrollHeight);
      setWinHeight(window.innerHeight);
    };

    updateDimensions();
    window.addEventListener('scroll', updateScroll);
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [docHeight, winHeight, scrollProgress]);

  return (
    <div
      className="relative min-h-screen w-full bg-[#0f0f0f] text-white pt-[100px]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            rgba(34, 197, 94, 0.15) 19px,
            rgba(34, 197, 94, 0.15) 20px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 19px,
            rgba(34, 197, 94, 0.15) 19px,
            rgba(34, 197, 94, 0.15) 20px
          ),
          radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 2px, transparent 2px),
          radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.18) 2px, transparent 2px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ width }}
        className="fixed top-0 left-0 h-1 bg-green-400 z-50"
      />

      <div>
        {children}
      </div>
    </div>
  );
};

export default BackTheme;
