import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/gaganaj-portfolio-v2/',   // 👈 ADD THIS LINE
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: [
      '.preview.emergentcf.cloud',
      '.preview.emergentagent.com',
      '.emergent.host'
    ]
  },
    build: {
    outDir: "../docs",
    emptyOutDir: true,
  }
});