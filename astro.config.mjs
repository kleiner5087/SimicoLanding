import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  devToolbar: { enabled: false },
  vite: {
    preview: {
      allowedHosts: ['simicolanding.onrender.com'],
    },
  },
});
