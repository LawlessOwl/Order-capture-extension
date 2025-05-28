import { defineConfig } from 'vite';
import { resolve } from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, './src/content.js'),
        background: resolve(__dirname, './src/background.js'),
        popup: resolve(__dirname, './src/popup.js')
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
