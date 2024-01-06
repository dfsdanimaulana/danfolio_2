/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'sky-400',
                secondary: '#64ffda',
            },

            fontFamily: {
                primary: ['Poppins', 'sans-serif'],
                mono: ['Chivo Mono', 'sans-serif'],
                sans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
