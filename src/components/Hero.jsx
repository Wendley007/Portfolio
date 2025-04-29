import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import ThunderCanvas from "./ThunderCanvas";
import perfil from "../assets/profile.jpg";
import perfilMobile from "../assets/perfilMobile.jpg";
import { FaRocket, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [typing, setTyping] = useState(true);
  const [showRole, setShowRole] = useState(false);
  const [lettersPositions, setLettersPositions] = useState([]);
  const handleTypewriterDone = useCallback(() => {
    setTyping(false);
    setTimeout(() => setShowRole(true), 1000);
  }, []);

  // Atualiza posições das letras com base no tamanho da tela
  const updateLettersPositions = useCallback(() => {
    const positions = Array.from({ length: 16 }, (_, i) => ({
      x: window.innerWidth / 2 + i * 20,
      y: window.innerHeight / 2,
    }));
    setLettersPositions(positions);
  }, []);

  // Atualiza as posições sempre que a tela for redimensionada
  useEffect(() => {
    updateLettersPositions();
    window.addEventListener("resize", updateLettersPositions);
    return () => window.removeEventListener("resize", updateLettersPositions);
  }, [updateLettersPositions]);

  return (
    <section
      id="home"
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: `url(${perfil})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Gradiente escuro sobre a imagem para dar contraste ao texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Imagem de fundo para desktop */}
      <div
        className="absolute inset-0 hidden sm:block bg-cover bg-center"
        style={{ backgroundImage: `url(${perfil})` }}
      ></div>

      {/* Imagem e camada escura para mobile */}
      <div
        className="absolute inset-0 opacity-75 bg-gray-900 block lg:hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${perfilMobile})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Conteúdo principal do Hero */}
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Frase inicial com efeito de digitação */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="bg-gradient-to-r from-white text-transparent via-red-500 to-purple-600 bg-clip-text text-2xl sm:text-3xl font-semibold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Olá, sou Wendley...")
                    .pauseFor(500)
                    .callFunction(handleTypewriterDone)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 50,
                  cursor: "|",
                }}
              />
            </h3>
          </motion.div>

          {/* Mostrar o cargo após o nome ser digitado */}
          <AnimatePresence>
            {showRole && (
              <>
                {/* Efeito visual com letras animadas */}
                <ThunderCanvas lettersPositions={lettersPositions} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-red-500 to-purple-600 bg-clip-text text-transparent">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString("Desenvolvedor Web").start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        cursor: "|",
                        pauseFor: 3000,
                      }}
                    />
                  </h1>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Pequena descrição sobre o que você faz */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
          >
            Criando interfaces responsivas e funcionais com tecnologias
            modernas, focando em experiências únicas e memoráveis.
          </motion.p>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {/* Botão para navegar até a seção de projetos */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="relative group inline-flex items-center justify-center px-2 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 shadow-xl overflow-hidden transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <FaRocket className="mr-2 text-white" />
                Ver Projetos
              </motion.a>

              {/* Botão para navegar até a seção de contato */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-2 py-2 rounded-xl text-white font-semibold bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-400 shadow-md transition-all duration-300"
              >
                <FaEnvelope className="mr-2" />
                Contato
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
