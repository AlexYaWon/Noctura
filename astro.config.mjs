import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap()
  ],
  site: "noctura-alexnetwork.vercel.app",
  output: "static",
  compressHTML: false
});
