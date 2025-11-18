import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
  define: {
    __DEFINES__: {}, // FIX for env.mjs error
    __VITE_PRELOAD__: {}, // optional safe guard
  },
});
