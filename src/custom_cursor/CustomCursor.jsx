import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const FOLLOWER_SPRING = {
  stiffness: 120,
  damping: 10,
  mass: 0.8,
};

const DOT_SPRING = {
  stiffness: 800,
  damping: 40,
};

const FIXED_RING_SIZE = 40;

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const interactiveRefs = useRef([]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, FOLLOWER_SPRING);
  const ringY = useSpring(cursorY, FOLLOWER_SPRING);
  const dotX = useSpring(cursorX, DOT_SPRING);
  const dotY = useSpring(cursorY, DOT_SPRING);

  const handleMouseMove = useCallback(
    (e) => {
      const currentSize = FIXED_RING_SIZE;
      cursorX.set(e.clientX - currentSize / 2);
      cursorY.set(e.clientY - currentSize / 2);
    },
    [cursorX, cursorY]
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);

  // ✅ Detect mobile / touch devices
  useEffect(() => {
    const checkMobile = () =>
      "ontouchstart" in window || window.innerWidth < 768;
    setIsMobile(checkMobile());
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip attaching events on mobile

    window.addEventListener("mousemove", handleMouseMove);

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="text"], textarea'
      );
      interactiveRefs.current = Array.from(elements);

      interactiveRefs.current.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveRefs.current.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // ✅ If mobile, render nothing
  if (isMobile) return null;

  const ringVariants = {
    default: {
      width: FIXED_RING_SIZE,
      height: FIXED_RING_SIZE,
      opacity: 0.7,
      scale: 1,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgb(100, 116, 139)",
    },
    hover: {
      width: FIXED_RING_SIZE,
      height: FIXED_RING_SIZE,
      opacity: 1,
      scale: 1,
    },
  };

  const dotVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "rgb(241, 245, 249)",
    },
    hover: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        style={{ translateX: ringX, translateY: ringY }}
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border-2 border-solid mix-blend-difference"
      />
      <motion.div
        style={{ translateX: dotX, translateY: dotY }}
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-slate-100"
      />
    </>
  );
};

export default CustomCursor;
