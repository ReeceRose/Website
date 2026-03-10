import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://reecerose.com",
  output: "static",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
