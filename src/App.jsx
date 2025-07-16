import React from "react";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Wendley.dev | Portfólio</title>
        <meta
          name="description"
          content="Portfólio de Wendley, desenvolvedor web focado em criar interfaces modernas, responsivas e experiências memoráveis com React, Tailwind e JavaScript."
        />
        <meta name="author" content="Wendley Santos Ribeiro" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Wendley, portfólio, desenvolvedor web, React, Tailwind, front-end"
        />

        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        {/* Preload para Medium */}
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Medium.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        {/* Preload para SemiBold */}
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        {/* Preload para Bold */}
        <link
          rel="preload"
          href="/fonts/poppins/Poppins-Bold.woff2"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Wendley Santos Ribeiro",
            url: "https://wendleydev.vercel.app",
            image: "https://wendleydev.vercel.app/assets/perfil2.webp",
            sameAs: [
              "https://www.linkedin.com/in/wendley-santos-248159219",
              "https://github.com/Wendley007",
              "https://wa.me/5538999272911",
            ],
            jobTitle: "Desenvolvedor Web Front-end",
            worksFor: {
              "@type": "Organization",
              name: "Freelancer",
            },
            description:
              "Portfólio de Wendley, desenvolvedor web com foco em criar interfaces modernas, responsivas e experiências únicas com React, Tailwind e JavaScript.",
            email: "mailto:wsanttossttreett@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
            },
          })}
        </script>
      </Helmet>

      <div className="font-sans min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Home />
      </div>
    </>
  );
}

export default App;
