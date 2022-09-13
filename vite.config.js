import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://mern-social-media-api-production.up.railway.app/',
    },
  },
  plugins: [react()],
});
