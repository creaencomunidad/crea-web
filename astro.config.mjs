import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), robotsTxt()],
  outDir: "./docs",
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://sta.creaencomunidad.com",
  build: {
    assets: "astro",
  },
});
