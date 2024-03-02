import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://grathium-industries.github.io",
  base: "/",
  prefetch: {
    prefetch: true,
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  vite: {
    server: {
      watch: {
        ignored: [
          "**/node_modules/**",
          "**/build/**",
          "**/.git/**",
        ],
      },
    },
  },
});
