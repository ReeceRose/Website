import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://reecerose.com",
  output: "server",
  server: {
    host: "0.0.0.0",
  },
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
