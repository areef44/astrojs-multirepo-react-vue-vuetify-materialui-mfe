import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import vuetify from 'vite-plugin-vuetify';
export default defineConfig({
    preview: { port: 3000 },
    server: { port: 3000 },
    plugins: [
        vue(),
        federation({
            name: 'vueApp',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.vue',
            },
            shared: ['vue', 'pinia']
        }),
        vuetify({ autoImport: true }),
    ],
    build: {
        target: 'esnext'
    }
});