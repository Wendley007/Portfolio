import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteCompression from "vite-plugin-compression"; // 🔸 compressão gzip/br
import { visualizer } from "rollup-plugin-visualizer"; // 🔸 opcional: análise de bundle

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress", // ou gzip
      ext: ".br",
      deleteOriginFile: false,
    }),
    visualizer({ open: false }), // roda um report em HTML do tamanho do bundle
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    cssCodeSplit: true, // separa CSS por página (melhor performance)
    minify: "esbuild", // já é o padrão, mas vale deixar explícito
    rollupOptions: {
      output: {
        manualChunks: {
          // separa libs grandes do bundle principal
          react: ["react", "react-dom"],
          framer: ["framer-motion"],
        },
      },
    },
  },
});
