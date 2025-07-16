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

      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-500">
            Carregando seção sobre...
          </div>
        }
      >
        <About />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-500">
            Carregando seção projetos...
          </div>
        }
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-500">
            Carregando seção certificados...
          </div>
        }
      >
        <Certificates />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-500">
            Carregando seção contato...
          </div>
        }
      >
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}
