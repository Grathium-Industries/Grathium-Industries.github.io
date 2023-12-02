import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/build/**",
          "**/.git/**",
          "/src/pages/posts/deployments/**",
        ],
      },
    },
  },
});
