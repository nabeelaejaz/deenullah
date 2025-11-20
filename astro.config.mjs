// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import solidJs from '@astrojs/solid-js';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), db()],

  vite: {
    plugins: [tailwindcss()]
  },
    devToolbar: {
    enabled: false
  }
});