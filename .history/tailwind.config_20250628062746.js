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
        background: {
          light: '#ffffff',
          dark: '#1d1d1f',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        primary: {
          DEFAULT: '#111111',
          dark: '#3B82F6', // You can change this to match your design
        },
        accent: {
          purple: '#9b5de5',
          yellow: '#fcd34d',
        },
      },
    },
  },
  plugins: [],
};
