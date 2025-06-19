/** @type {import('tailwindcss').Config} */

import { COLORS } from './src/constants/color.constants';
import plugin from 'tailwindcss/plugin';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: COLORS,
        },
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.primary-gradient': {
                    background: `linear-gradient(90deg, ${COLORS.yellow[700]}, ${COLORS.yellow[300]})`,
                },
                '.secondary-gradient': {
                    background: `linear-gradient(90deg, ${COLORS.brown[700]}, ${COLORS.brown[300]})`,
                },
                '.gray-gradient': {
                    background: `linear-gradient(90deg, ${COLORS.gray[500]}, ${COLORS.gray[300]})`,
                },
            });
        }),
    ],
};
