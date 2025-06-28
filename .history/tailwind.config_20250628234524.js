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
        'lightest': '#ffefe9', // (232,232,232)
        'light': '#ffcbba',    // (183,183,183)
        'medium': '#8c8c8c',   // (140,140,140)
        'dark': '#221d1b',     // (82,82,82)
        'black': '#9c4b2a',    // (0,0,0)
      },
    },
  },
  plugins: [],
};
