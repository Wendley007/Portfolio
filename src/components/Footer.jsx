import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  Heart,
  Code,
  ArrowUpCircle,
} from 'lucide-react';

// Variantes para animação de entrada do footer
const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Variantes para animação de entrada dos itens do footer
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Dados para as redes sociais
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/wendleydev',
    color: 'hover:text-gray-600 dark:hover:text-gray-400',
    hoverColor: '#333',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/wendley-santos-248159219/',
    color: 'hover:text-blue-500 dark:hover:text-blue-400',
    hoverColor: '#0077B5',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/wendley.oficial/',
    color: 'hover:text-pink-500 dark:hover:text-pink-400',
    hoverColor: '#E1306C',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/wendlley.santtos.7',
    color: 'hover:text-blue-400 dark:hover:text-blue-300',
    hoverColor: '#1877F2',
  },
];

// Links de navegação
const navLinks = [
  { name: 'Início', url: '#home' },
  { name: 'Sobre', url: '#about' },
  { name: 'Projetos', url: '#projects' },
  { name: 'Certificados', url: '#certificates' },
  { name: 'Contato', url: '#contact' },
];

// Texto para animação de digitação
const typingText = 'Construindo com código, sonhando com propósito.';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Detecta quando o usuário rolou para baixo o suficiente para mostrar o botão de voltar ao topo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar suavemente para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Intervalo para a animação de digitação
    const interval = setInterval(() => {
      if (index < typingText.length) {
        setDisplayText(prev => prev + typingText[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setDisplayText('');
          setIndex(0);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <footer className="relative py-12 sm:py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white dark:via-black/60 dark:to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Animated decorator line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-12"
        />

        {/* Main footer content */}
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {/* Seção 1: Informações sobre o Wendley */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent inline-flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-500" />
                Wendley Dev
              </span>
            </h3>
            <div className="h-16 flex items-start">
              {' '}
              {/* Fixed height container for typing effect */}
              <p className="text-gray-600 dark:text-gray-300 max-w-xs font-medium">
                {displayText}
                <span className="inline-block w-1 h-5 ml-1 bg-purple-500 animate-pulse" />
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Desenvolvedor front-end especializado em criar experiências
              digitais bonitas e funcionais.
            </p>
          </motion.div>

          {/* Seção 2: Contato */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
              Contato
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
              />
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:wsanttossttreett@hotmail.com"
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-gray-800 mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                  <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </span>
                <span className="text-sm">wendley.dev@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:+5538999272911"
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-gray-800 mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                  <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </span>
                <span className="text-sm">+55 (38) 99927-2911</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex items-center text-gray-600 dark:text-gray-300 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 dark:bg-gray-800 mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-900 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </span>
                <span className="text-sm">Minas Gerais, Brasil</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Seção 3: Links de Navegação */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
              Navegação
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
              />
            </h4>
            <nav className="grid grid-cols-2 gap-y-2 gap-x-4 md:flex md:flex-col md:space-y-3 md:gap-0">
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ x: 5, color: '#9333ea' }}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm md:text-base"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Seção 4: Redes Sociais */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 hidden md:block"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
              Redes Sociais
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
              />
            </h4>
            <div className="flex flex-wrap gap-3 md:flex-col md:space-y-3 md:gap-0">
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Acessar ${social.name} de Wendley`}
                  whileHover={{ x: 5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`flex items-center text-gray-600 dark:text-gray-300 ${social.color} transition-colors`}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 mr-3 transition-colors hover:bg-opacity-70">
                    <social.icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm md:text-base">{social.name}</span>
                  <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile social icons row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center space-x-6 md:hidden mb-8"
        >
          {socialLinks.map(social => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Acessar ${social.name} de Wendley`}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all">
                <social.icon className={`w-5 h-5 ${social.color}`} />
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Animated wave divider */}
        <div className="relative h-12 md:h-16 overflow-hidden mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="w-full h-auto text-gray-200 dark:text-gray-800"
            >
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </motion.div>
        </div>

        {/* Rodapé */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400 px-4"
        >
          {/* Copyright */}
          <div className="mb-4 md:mb-0 flex items-center">
            <span>
              &copy; {currentYear}{' '}
              <motion.a
                href="https://www.linkedin.com/in/wendley-santos-248159219/"
                whileHover={{
                  color: '#9333ea',
                  textDecoration: 'underline',
                }}
                className="transition-colors hover:underline font-medium"
              >
                Wendley Dev
              </motion.a>
              . Todos os direitos reservados.
            </span>
          </div>

          {/* Mensagens */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span>Feito com</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            <span>em Minas Gerais, Brasil</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
          y: isVisible ? 0 : 20,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-700 dark:from-purple-800 dark:to-pink-900 text-white shadow-xl backdrop-blur-md bg-opacity-60 transition-all duration-300 ease-in-out
    hover:scale-110 hover:shadow-2xl hover:from-purple-700 hover:to-pink-800
    dark:hover:from-purple-900 dark:hover:to-pink-950
    focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-purple-900 dark:focus:ring-offset-gray-800"
        aria-label="Voltar ao topo"
      >
        <ArrowUpCircle className="w-6 h-6" strokeWidth={2.5} />
      </motion.button>
    </footer>
  );
}
