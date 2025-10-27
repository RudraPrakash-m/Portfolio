import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  const updateUnderline = (index) => {
    const navItems = navRef.current.querySelectorAll("li");
    if (navItems[index]) {
      const { offsetLeft, offsetWidth } = navItems[index];
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  };

  useEffect(() => {
    if (hoveredIndex !== null) updateUnderline(hoveredIndex);
    else {
      // Set underline on active link
      const activeIndex = links.findIndex(
        (link) => link.path === window.location.pathname
      );
      if (activeIndex !== -1) updateUnderline(activeIndex);
      else setUnderlineStyle({ width: 0 });
    }
  }, [hoveredIndex]);

  return (
    <nav
      ref={navRef}
      className="fixed top-5 left-0 right-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 z-50"
    >
      <div className="px-6 py-4 flex justify-center items-center relative">
        <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white font-semibold tracking-wide relative">
          {links.map((link, index) => (
            <li key={link.name} className="relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative transition duration-300 ${
                    isActive ? "text-blue-400" : "hover:text-blue-400"
                  }`
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {/* Single moving underline */}
          <motion.div
            className="absolute bottom-0 h-[2px] bg-blue-400 rounded"
            animate={underlineStyle}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
