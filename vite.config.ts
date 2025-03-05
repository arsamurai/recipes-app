import react from "@vitejs/plugin-react"
import fixReactVirtualized from "esbuild-plugin-react-virtualized"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import eslint from "vite-plugin-eslint"

export default defineConfig({
  envDir: "./env",
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      include: "./src/**/*.{js,jsx,ts,tsx,json}",
    }),
    checker({
      typescript: true,
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [fixReactVirtualized],
    },
  },
  server: { host: false, port: 3000 },
  preview: { open: true },
  resolve: {
    alias: {
      "@app": path.resolve("src/app"),
      "@pages": path.resolve("src/pages"),
      "@features": path.resolve("src/features"),
      "@services": path.resolve("src/services"),
      "@entities": path.resolve("src/entities"),
      "@shared": path.resolve("src/shared"),
      "@styles": path.resolve("src/styles"),
      "@assets": path.resolve("src/assets"),
    },
  },
})
