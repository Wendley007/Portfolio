import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importações com lazy
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Suspense fallback={<div>Carregando seção Sobre...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Carregando projetos...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Carregando certificados...</div>}>
        <Certificates />
      </Suspense>

      <Suspense fallback={<div>Carregando contato...</div>}>
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}
