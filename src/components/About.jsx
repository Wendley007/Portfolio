import React from "react";
import { motion } from "framer-motion";
import perfil2 from "../assets/perfil2.webp";
import {
  Code2,
  Briefcase,
  GraduationCap,
  FileCode2,
  Server,
  Paintbrush,
  Loader,
  Brain,
  Coffee,
  Sparkles,
} from "lucide-react";

// Animação do container principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animação individual dos itens
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

// Lista de tecnologias que serão exibidas
const techs = [
  {
    name: "React",
    color: "from-blue-500 to-blue-600",
    icon: Code2,
    description: "Desenvolvimento de interfaces modernas e reativas",
  },
  {
    name: "Tailwind CSS",
    color: "from-teal-500 to-teal-600",
    icon: Paintbrush,
    description: "Estilização rápida e responsiva",
  },
  {
    name: "JavaScript",
    color: "from-yellow-500 to-yellow-600",
    icon: FileCode2,
    description: "Programação dinâmica e interativa",
  },
  {
    name: "Node.js",
    color: "from-green-500 to-green-600",
    icon: Server,
    description: "Plataforma escalável para aplicações server-side",
  },
];

// Lista de habilidades pessoais
const skills = [
  {
    icon: Brain,
    title: "Resolução de Problemas",
    description: "Capacidade analítica para encontrar soluções eficientes",
  },
  {
    icon: Coffee,
    title: "Aprendizado Contínuo",
    description: "Sempre em busca de novos conhecimentos e tecnologias",
  },
  {
    icon: Sparkles,
    title: "Criatividade",
    description: "Desenvolvimento de soluções inovadoras e intuitivas",
  },
];

// Componente principal da seção "Sobre Mim"
export default function About() {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Grid de fundo com efeito sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>

      {/* Gradiente por cima do fundo, adaptável ao tema escuro */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho da seção com animação de entrada */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Ícone com fundo destacado */}
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <Loader className="w-8 h-8 text-purple-500" />
          </div>

          {/* Título principal com texto */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Sobre Mim
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Construo soluções com estilo e propósito — do zero ao
            extraord1nário.
          </p>
        </motion.div>

        {/* Grid com foto de perfil e informações */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10">
          {/* Foto com animação e efeitos de hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <img
                src={perfil2}
                alt="Foto de perfil do desenvolvedor Wendley"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Blocos com formação, experiência e tecnologias */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Cartão: Formação */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Formação Acadêmica
                  </h3>
                  <p className="text-gray-700 text-sm dark:text-gray-300">
                    Cursando bacharelado em{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Sistemas de Informação
                    </span>{" "}
                    e sou formado em{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Técnico em Administração
                    </span>{" "}
                    pelo IFNMG, onde desenvolvo uma sólida base tanto em
                    tecnologia quanto em gestão, com foco em soluções inovadoras
                    e eficiência organizacional.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cartão: Experiência */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Experiência
                  </h3>
                  <p className="text-gray-700 text-sm dark:text-gray-300">
                    Atualmente estagiário{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      {" "}
                      front-end{" "}
                    </span>{" "}
                    na{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Mundiware,{" "}
                    </span>{" "}
                    aplicando tecnologias modernas com foco em usabilidade.
                    Atuei por 8 anos como operador de produção na{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      Companhia de Fiação e Tecidos Santo Antônio
                    </span>
                    , desenvolvendo responsabilidade, trabalho em equipe e
                    atenção aos detalhes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cartão: Tecnologias */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Habilidades & Tecnologias
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {/* Geração dinâmica dos cards de tecnologia */}
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.02 }}
                    className="relative p-4 bg-white dark:bg-gray-800/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${tech.color} text-white`}
                      >
                        <tech.icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white break-words">
                          {tech.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1 dark:text-gray-400 break-words">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Cartões com as soft skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400 mb-4">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
