import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    open: '/src/pages/index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          if (/\.(woff2?|ttf|eot)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  assetsInclude: ['**/*.woff2'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
