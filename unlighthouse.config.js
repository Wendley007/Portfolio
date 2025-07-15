export default {
  site: "https://wendleydev.vercel.app",
  scanner: {
    sitemap: false,
    // Coloque aqui apenas as rotas reais que carregam novas páginas
    routes: ["/"],
  },
  router: {
    ignoreHash: false, // NÃO ignore rotas com hash
  },
  onPageReady: async ({ page, route }) => {
    // Se estiver na home, força ele a rolar e esperar seções
    if (route === "/") {
      await page.waitForTimeout(1000); // espera carregar

      const sections = ["#about", "#projects", "#certificates", "#contact"];
      for (const section of sections) {
        await page.evaluate((id) => {
          document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
        }, section);
        await page.waitForTimeout(1200); // espera animar e pintar
      }
    }
  },
};
