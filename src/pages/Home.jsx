import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));

const LoadingSection = ({ message }) => (
  <div className="text-center py-10 text-gray-500">{message}</div>
);

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Suspense
        fallback={<LoadingSection message="Carregando seção sobre..." />}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={<LoadingSection message="Carregando seção projetos..." />}
      >
        <Projects />
      </Suspense>

      <Suspense
        fallback={<LoadingSection message="Carregando seção certificados..." />}
      >
        <Certificates />
      </Suspense>

      <Suspense
        fallback={<LoadingSection message="Carregando seção contato..." />}
      >
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}
