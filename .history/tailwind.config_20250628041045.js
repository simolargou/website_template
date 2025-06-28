// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // 👈 enables dark mode via "class"
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sintony: ['"Sintony"', 'sans-serif'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
      },
      colors: {
        // 🎨 Custom colors
        primary: {
          DEFAULT: '#1E40AF',      // blue-800
          light: '#3B82F6',        // blue-500
          dark: '#1E3A8A',         // blue-900
        },
        secondary: {
          DEFAULT: '#10B981',      // emerald-500
          dark: '#047857',         // emerald-700
        },
        accent: '#F59E0B',         // amber-500

        // ⚙ Optional: Override or use Tailwind colors
        gray: colors.zinc,         // use Tailwind's zinc instead of default gray
        background: {
          light: '#ffffff',
          dark: '#111827',         // very dark gray for dark mode
        },
      },
    },
  },
  plugins: [],
};
