import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X } from "lucide-react";

const MobileMenu = ({
  links,
  activeLink,
  setActiveLink,
  isDarkMode,
  toggleTheme,
  onClose,
}) => {
  const menuRef = useRef(null);
  const backdropRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    menuRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detectando o clique fora do menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (backdropRef.current && !backdropRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLinkClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(id);
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
        delayChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Fundo escurecido com clique para fechar */}
      <motion.div
        ref={backdropRef}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-xs z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Container do menu */}
      <div className="fixed top-[70px] left-0 right-0 z-50 lg:hidden flex justify-center px-4">
        <motion.div
          ref={menuRef}
          tabIndex={-1}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
          className={`rounded-xl overflow-hidden border shadow-xl w-full max-w-md outline-none ${
            scrolled
              ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl shadow-xl"
              : "bg-white dark:bg-black"
          } border-gray-200 dark:border-gray-800`}
        >
          <div className="p-5">
            {/* Navegação */}
            <nav className="flex flex-col items-center gap-2">
              {links.map(({ id, label }) => {
                const isActive = activeLink === id;
                return (
                  <motion.button
                    key={id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLinkClick(id)}
                    className={`group relative flex items-center justify-center w-full py-3 px-4 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "bg-red-100/80 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-purple-600 rounded-r-full"
                      />
                    )}
                    <span className="text-lg font-medium">{label}</span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Tema */}
            <motion.div
              variants={itemVariants}
              className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="flex items-center gap-2 p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm hover:shadow transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Modo claro
                    </span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Modo escuro
                    </span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </div>

          {/* Rodapé */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-indigo-500/10 dark:from-red-700/20 dark:via-purple-700/20 dark:to-indigo-700/20 px-5 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            © 2025 Wendley.dev
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MobileMenu;
