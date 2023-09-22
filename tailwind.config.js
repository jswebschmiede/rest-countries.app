/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            screens: {
                xs: '468px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Nunito Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
            },
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
        },
    },
    darkMode: 'class',
    plugins: [],
};
