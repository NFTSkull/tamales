import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new globalThis.URL('.', import.meta.url));

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
      },
    },
  },
});

