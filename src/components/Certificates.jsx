import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  Sparkles,
} from "lucide-react";

// Lista de certificados com informações para exibição
const certificates = [
  {
    title: "Projeto Completo",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/certificate/UC-85b4e568-8527-4218-aa31-8a2bd6575d46/",
    skills: ["React", "NodeJS", "React Native", "TypeScript"],
    description:
      "Curso avançado de desenvolvimento fullstack com foco em React, React Native, TypeScript e backend em Node.js.",
  },
  {
    title: "Desenvolvimento Web Completo",
    issuer: "Udemy",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-eb2a0dcf-5d77-4f0c-be6d-a9535d30ab25/",
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "JQuery",
      "WordPress",
      "Git",
      "GitHub",
    ],
    description:
      "Formação completa com foco prático em front-end, back-end, WordPress e versionamento com Git e GitHub.",
  },
  {
    title: "Comunicação e Oratória",
    issuer: "Udemy",
    date: "2024",
    link: "https://www.udemy.com/certificate/UC-d89cfa30-18f8-48a8-bf7a-7d4aafc41651/",
    skills: ["Oratória", "Comunicação Escrita", "Expressão Corporal"],
    description:
      "Técnicas para melhorar a comunicação verbal, escrita e corporal no ambiente pessoal e profissional.",
  },
];

// Variantes de animação para o container geral
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variantes para cada item (cartão de certificado)
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

// Variantes para as skills animadas
const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// Componente principal de exibição dos certificados
export default function Certificates() {
  return (
    <section id="certificates" className="relative py-20 px-4">
      {/* Plano de fundo com grid e degradê transparente */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />

      {/* Container central */}
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <Award className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Certificados
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprometido com o aprendizado contínuo e desenvolvimento
            profissional através de cursos e certificações reconhecidas.
          </p>
        </motion.div>

        {/* Grid de cartões animados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {/* Loop pelos certificados */}
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Fundo gradiente ao passar o mouse */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-20 blur transition duration-300 group-hover:opacity-30" />

              {/* Cartão principal */}
              <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Conteúdo principal do certificado */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {cert.description}
                        </p>
                      </div>
                    </div>

                    {/* Emissor e data */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Skills com animação */}
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                    >
                      {cert.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          variants={skillVariants}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium backdrop-blur-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Botão para ver o certificado */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                  >
                    <ExternalLink size={18} />
                    Ver Certificado
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
