// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.deenullah.com',
  integrations: [solidJs(), db(), sitemap(),

  partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
    devToolbar: {
    enabled: false
  }
});