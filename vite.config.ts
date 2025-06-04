import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            includeAssets: ['**/*.{png}', '**/*.{jpg}'],

            registerType: 'autoUpdate',
            injectRegister: false,

            pwaAssets: {
                config: true,
                disabled: true,
            },

            manifest: {
                name: 'deckbound',
                short_name: 'deckbound',
                description:
                    'A fast and interactive card game built with React, TypeScript, Zustand, and Framer Motion — playable anywhere as a PWA.',
                theme_color: '#46B4AC',
                background_color: '#46B4AC',
                display: 'standalone',
                orientation: 'landscape-primary',
                icons: [
                    {
                        src: '/assets/favicons/192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/favicons/256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                    },
                    {
                        src: '/assets/favicons/512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },

            workbox: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            devOptions: {
                enabled: true,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
        ],
    },
});
