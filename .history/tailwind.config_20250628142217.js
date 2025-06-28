const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['"Bitcount Grid Double"', 'sans-serif'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
        forum: ['"Forum"', 'monospace'],
      },
      colors: {
        'lightest': '#e8e8e8', // (232,232,232)
        'light': '#b7b7b7',    // (183,183,183)
        'medium': '#8c8c8c',   // (140,140,140)
        'dark': '#000000',     // (82,82,82)
        'black': '#525252',    // (0,0,0)
      },
    },
  },
  plugins: [],
};
