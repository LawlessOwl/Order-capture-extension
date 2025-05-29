import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, './src/content.js'),
        background: resolve(__dirname, './src/background.js'),
        popup: resolve(__dirname, './src/popup.js'),
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.'
        },
        {
          src: 'src/popup.html',
          dest: '.'
        },
         {
          src: 'public/icon.png',
          dest: '.'
        }
      ]
    })
  ]
})
