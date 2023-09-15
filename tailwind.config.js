/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            fonts: 'hsl(var(--cl-text) / <alpha-value>)',
            elements: 'hsl(var(--cl-elements) / <alpha-value>)',
            background: 'hsl(var(--cl-background) / <alpha-value>)',
            inputs: 'hsl(var(--cl-inputs) / <alpha-value>)',
            'fonts-dm': 'hsl(var(--cl-text-dm) / <alpha-value>)',
            'elements-dm': 'hsl(var(--cl-elements-dm) / <alpha-value>)',
            'background-dm': 'hsl(var(--cl-background-dm) / <alpha-value>)',
            'inputs-dm': 'hsl(var(--cl-inputs-dm) / <alpha-value>)',
        },
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};
