/** @type {import('tailwindcss').Config} */

import { COLORS } from './src/constants/color.constants.js';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: COLORS,
        extend: {},
    },
    plugins: [],
};
