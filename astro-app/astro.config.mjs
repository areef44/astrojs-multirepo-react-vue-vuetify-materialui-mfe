import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import federation from '@originjs/vite-plugin-federation';

// Plugin custom untuk integrasi Vuetify

export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: '/src/pages/_app'
    }),
    react({})
  ],
  vite: {
    ssr: {
            noExternal: ['vuetify'],
    },
    plugins: [
      federation({
        name: 'host',
        remotes: {
          vueApp: 'http://localhost:3000/assets/remoteEntry.js', // Konfigurasi Module Federation
          reactApp: 'http://localhost:4000/assets/remoteEntry.js',
        },
        shared: ['vue','react'],
      }),
    ],
    build: {
      target: 'esnext', // Target output untuk ESNext
    },
  },
});
