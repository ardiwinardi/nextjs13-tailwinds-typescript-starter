/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#088b7c',
        secondary: '#0087FF',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        logo: ['League Spartan', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
