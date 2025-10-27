import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// 1. --- Configuration Constants ---
// Physics for the smooth, lagging 'Ring'
const FOLLOWER_SPRING = {
  stiffness: 120,
  damping: 10,
  mass: 0.8,
};

// Physics for the quick, snappy 'Dot'
const DOT_SPRING = {
  stiffness: 800,
  damping: 40,
};

// Fixed size constants
const FIXED_RING_SIZE = 40;

// 2. --- Component Definition ---
const CustomCursor = () => {
  // State for hover status
  const [isHovering, setIsHovering] = useState(false);
  
  // Ref to hold all interactive elements
  const interactiveRefs = useRef([]);

  // MotionValues track the raw, immediate mouse position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // useSpring for physics-based movement
  const ringX = useSpring(cursorX, FOLLOWER_SPRING);
  const ringY = useSpring(cursorY, FOLLOWER_SPRING);
  const dotX = useSpring(cursorX, DOT_SPRING);
  const dotY = useSpring(cursorY, DOT_SPRING);

  // 3. --- Event Callbacks ---
  
  const handleMouseMove = useCallback((e) => {
    // We use the FIXED_RING_SIZE for centering, regardless of hover state
    const currentSize = FIXED_RING_SIZE; 
    
    // Update MotionValues to the immediate mouse position, centered
    cursorX.set(e.clientX - currentSize / 2);
    cursorY.set(e.clientY - currentSize / 2);
  }, [cursorX, cursorY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  // 4. --- Effect for Setup and Cleanup ---
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const timeoutId = setTimeout(() => {
      // Look for standard interactive elements
      const elements = document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="text"], textarea');
      interactiveRefs.current = Array.from(elements);

      // Attach hover listeners
      interactiveRefs.current.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", handleMouseMove);
      
      interactiveRefs.current.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  // 5. --- Framer Motion Variants for Interaction ---
  const ringVariants = {
    default: {
      width: FIXED_RING_SIZE, // Fixed size
      height: FIXED_RING_SIZE, // Fixed size
      opacity: 0.7,
      scale: 1,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgb(100, 116, 139)", // Slate-500
    },
    hover: {
      width: FIXED_RING_SIZE, // Remains fixed size on hover
      height: FIXED_RING_SIZE, // Remains fixed size on hover
      opacity: 1,
      scale: 1, // No scaling
    }
  };

  const dotVariants = {
    default: {
      scale: 1,
      opacity: 1,
      backgroundColor: "rgb(241, 245, 249)", // Slate-100
    },
    hover: {
      scale: 0, // Dot vanishes during hover (for clarity)
      opacity: 0,
    }
  };

  // 6. --- Rendering ---
  return (
    <>
      {/* The Follower Ring */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
        }}
        variants={ringVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="
          fixed top-0 left-0 z-[9999] pointer-events-none 
          rounded-full border-2 border-solid
          mix-blend-difference
        "
      />

      {/* The Snapping Dot */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
        }}
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        className="
          fixed top-0 left-0 z-[9999] pointer-events-none 
          w-2 h-2 rounded-full bg-slate-100
        "
      />
    </>
  );
};

export default CustomCursor;