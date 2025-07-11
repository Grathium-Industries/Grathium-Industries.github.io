import { defineConfig } from "astro/config";
import icon from "astro-icon";

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
                ignored: ["**/node_modules/**", "**/build/**", "**/.git/**"],
            },
            ssr: {
                noExternal: ["package-name"],
            },
        },
    },
    integrations: [icon()],
});
