import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative asset paths so the build also works under a GitHub Pages sub-path.
  base: "./",
  plugins: [react(), tailwindcss()],
  server: { port: 5191, open: false },
  build: { chunkSizeWarningLimit: 2000 },
});
