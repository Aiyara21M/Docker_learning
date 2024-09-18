import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/data-users': {
        target: 'localhost:3007', // ใช้ชื่อบริการ Docker Compose
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/data-users/, '/data-users'),
      },
    },
  },
});
