export default {
  site: "https://wendleydev.vercel.app",
  scanner: {
    sitemap: false, // Desliga sitemap automático
    routes: ["/"], // Só precisa da home, o restante serão scrolls
  },
  router: {
    ignoreHash: false, // Importante: NÃO ignorar hashes (#about etc.)
  },
  onPageReady: async ({ page, route }) => {
    if (route === "/") {
      // Aguarda carregamento da página
      await page.waitForTimeout(1000);

      // Força scroll para cada seção para garantir renderização
      const sections = ["#about", "#projects", "#certificates", "#contact"];

      for (const id of sections) {
        await page.evaluate((selector) => {
          const el = document.querySelector(selector);
          if (el) el.scrollIntoView({ behavior: "instant" });
        }, id);

        // Aguarda tempo suficiente para animações e pintura visual
        await page.waitForTimeout(1200);
      }
    }
  },
};
