const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['"Bitcount Grid Double"', 'sans-serif'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
      },
      colors: {
        'gray-lightest': '#e8e8e8', // (232,232,232)
        'gray-light': '#b7b7b7',    // (183,183,183)
        'gray-medium': '#8c8c8c',   // (140,140,140)
        'gray-dark': '#525252',     // (82,82,82)
        'gray-black': '#000000',    // (0,0,0)
      },
    },
  },
  plugins: [],
};
