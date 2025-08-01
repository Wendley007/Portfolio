import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-700 dark:from-purple-800 dark:to-pink-900 text-white shadow-xl backdrop-blur-md bg-opacity-60 transition-all duration-300 ease-in-out
    hover:scale-110 hover:shadow-2xl hover:from-purple-700 hover:to-pink-800
    dark:hover:from-purple-900 dark:hover:to-pink-950
    focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-purple-900 dark:focus:ring-offset-gray-800"
      aria-label="Voltar ao topo"
    >
      <ArrowUpCircle className="w-6 h-6" strokeWidth={2.5} />
    </motion.button>
  );
};

export default ScrollToTop; 