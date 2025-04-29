import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  BadgeCheck,
  Calendar,
  Code2,
  Users,
} from "lucide-react";

// Lista de projetos a serem exibidos na seção
const projects = [
  {
    title: "Catálogo Web",
    description:
      "Sistema completo para gestão de feiras livres, com cadastro de feirantes, produtos e categorias.",
    image: "/src/assets/projeto1.png",
    link: "https://cat-logo-web.vercel.app/",
    github: "https://github.com/Wendley007/Cat-logoWeb.git",
    techs: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    date: "2024",
    role: "Full Stack Developer",
    teamSize: "Individual",
  },
  {
    title: "Portfólio",
    description:
      "Projeto acadêmico desenvolvido com HTML, CSS e JavaScript puro, com foco em estruturação de conteúdo, responsividade e design limpo.",
    image: "/src/assets/projeto2.png",
    link: "https://wendley007.github.io/Portfolio/index.html",
    github: "https://github.com/Wendley007/Portfolio.git",
    techs: ["HTML", "CSS", "JavaScript"],
    date: "2023",
    role: "Front-end Developer",
    teamSize: "Individual",
  },
];

// Animações para o container de projetos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animação para cada projeto individual
const projectVariants = {
  hidden: { opacity: 0, y: 30 }, // inicia invisível e um pouco abaixo
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

// Animação para os badges das tecnologias
const techBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Componente principal de projetos
export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 overflow-hidden">
      {/* Grade de fundo com efeito visual */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      {/* Gradiente de fundo sobreposto */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />

      {/* Container centralizado */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <BadgeCheck className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi, aplicando as melhores
            práticas e tecnologias modernas.
          </p>
        </motion.div>

        {/* Lista de projetos animada */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative"
            >
              {/* Brilho ao redor do card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur transition duration-300 group-hover:opacity-30" />

              {/* Card do projeto */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid lg:grid-cols-2 overflow-hidden">
                  {/* Imagem do projeto com efeito de zoom no hover */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                    />
                    {/* Gradiente escuro sobre a imagem no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Conteúdo do card */}
                  <div className="p-8 space-y-6">
                    {/* Título e descrição */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Informações adicionais: data, função e tamanho da equipe */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4" />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{project.teamSize}</span>
                      </div>
                    </div>

                    {/* Tecnologias utilizadas */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {project.techs.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          variants={techBadgeVariants}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Botões de visualização e código-fonte */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={18} />
                        Ver Projeto
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Github size={18} />
                        Código
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
