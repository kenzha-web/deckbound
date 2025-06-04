import { defineConfig, minimal2023Preset as preset } from '@vite-pwa/assets-generator/config';

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset,
    images: [
        'public/assets/favicons/512x512.png',
        'public/assets/favicons/192x192.png',
        'public/assets/favicons/256x256.png',
    ],
});
