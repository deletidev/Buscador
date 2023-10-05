import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import type { UserConfig as VitestUserConfigInterface } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true
  }
};
export default defineConfig({
  base: '',
  root: './src',
  plugins: [
    checker({ typescript: true }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    ViteImageOptimizer({})
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: entryInfo => {
          return 'assets/js/[name]-[hash].js';
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name?.match(/\.css$/)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (assetInfo.name?.match(/\.(png|jpg|gif|svg)$/)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks: {
          react: ['react', 'react-dom']
        },
        chunkFileNames: chunckInfo => {
          if (chunckInfo.name?.match(/^react/)) {
            return 'assets/js/[name]-[hash].js';
          }
          return '[name]-[hash].js';
        }
      }
    }
  },
  test: vitestConfig.test,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
