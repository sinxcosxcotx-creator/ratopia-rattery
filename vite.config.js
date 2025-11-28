// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // GitHub Pages 需要指定 base
  base: '/ratopia-rattery/',

  plugins: [
    react()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@i18n': path.resolve(__dirname, 'src/i18n'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  }
});
