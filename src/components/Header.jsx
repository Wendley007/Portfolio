import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => getInitialTheme());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "certificates", label: "Certificados" },
    { id: "contact", label: "Contato" },
  ];

  function getInitialTheme() {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleActiveSection = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (currentSection !== -1) {
        setActiveLink(links[currentSection].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [links]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  const scrollTransition = scrolled
    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
    : "bg-white dark:bg-gray-900";

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`
        fixed top-0 w-full px-6 py-4 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-white/50 dark:bg-black/50 backdrop-blur-lg shadow-lg"
            : "bg-white dark:bg-black"
        }
        text-black dark:text-white
      `}
    >
      <section className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold cursor-pointer relative group"
        >
          <span className="relative z-10 -ml-2 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            Wendley.dev
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>

        {/* Mobile Menu */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={menuIconVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="md:hidden flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
              transition={{ duration: 0.2 }}
              className="text-gray-900 dark:text-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ id, label }) => {
            const isActive = activeLink === id;

            return (
              <motion.a
                key={id}
                href={`#${id}`}
                className={`
                  relative text-base font-medium group
                  transition-colors duration-300
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
                  focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900
                  ${
                    isActive
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setActiveLink(id);
                }}
              >
                {label}
                <motion.span
                  className="absolute inset-x-0 bottom-[-6px] h-[2px] bg-gradient-to-r from-red-500 to-purple-600"
                  initial={{ scaleX: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute inset-x-0 bottom-[-6px] h-[2px] bg-red-500/40"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.a>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="
              ml-4 p-2.5 rounded-full
              bg-gray-100 dark:bg-gray-800
              hover:bg-gray-200 dark:hover:bg-gray-700
              shadow-sm hover:shadow
              transition-all duration-300 ease-in-out
              focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500
            "
            aria-label={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
          >
            <div className="relative w-5 h-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDarkMode ? "dark" : "light"}
                  initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-indigo-600" />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <MobileMenu
              links={links}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
              onClose={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </section>
    </motion.header>
  );
};

export default Header;
