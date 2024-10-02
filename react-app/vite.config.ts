import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 4000,
  },
  server: {
    port: 4000,
  },
  plugins: [
    react(),
    federation({
      name: 'reactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './App' : './src/App.tsx'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: {
    target: 'esnext',
    minify: false
  },
  optimizeDeps:{
    include: ['react','react-dom'] 
  },
})
