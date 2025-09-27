import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@tsparticles/react": path.resolve(__dirname, "src/stubs/tsparticles-react.tsx"),
      "@tsparticles/slim": path.resolve(__dirname, "src/stubs/tsparticles-slim.ts"),
    },
  },
  server: {
    port: 5173,
  },
});
