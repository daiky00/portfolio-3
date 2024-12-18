import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 70 },
      webp: { quality: 70 },
      avif: { quality: 70 },
      svg: {
          plugins: [
              { name: 'removeViewBox' },
              { name: 'sortAttrs' },
          ],
      },
  }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'react-icons'],
  },
});