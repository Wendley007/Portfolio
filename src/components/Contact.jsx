import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  UserCheck,
} from "lucide-react";

// Informações de contato que serão exibidas na página
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wsanttossttreett@gmail.com",
    href: "mailto:wsanttossttreett@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(38) 99927-2911",
    href: "https://wa.me/5538999272911",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "wendley-santos",
    href: "https://www.linkedin.com/in/wendley-santos-248159219/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "wendley-dev",
    href: "https://github.com/Wendley007",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Buritizeiro, MG",
    href: "https://www.google.com/maps/place/Buritizeiro,+MG",
  },
];

// Variantes de animação para o container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variantes de animação para cada item
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Contact() {

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Fundo com gradientes e texturas */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
            <UserCheck className="w-8 h-8 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto? Escolha o meio de contato de sua
            preferência.
          </p>
        </motion.div>

        {/* Lista de formas de contato */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {contactInfo.map((contact) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Fundo de animação e ícone de contato */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
