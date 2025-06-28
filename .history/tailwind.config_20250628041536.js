const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sintony: ['"Sintony"', 'sans-serif'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#111111',      // blue-600
          dark: '#3B82F6',         // blue-500
        },
        secondary: {
          DEFAULT: '#10B981',      // emerald-500
          dark: '#34D399',         // emerald-400
        },
        accent: {
          DEFAULT: '#F59E0B',      // amber-500
          dark: '#FBBF24',         // amber-400
        },
        background: {
          light: '#F9FAFB',        // gray-50
          dark: '#1F2937',         // gray-800
        },
        surface: {
          light: '#FFFFFF',        // white
          dark: '#111827',         // gray-900
        },
        text: {
          light: '#111827',        // gray-900
          dark: '#F9FAFB',         // gray-50
        },
        muted: {
          light: '#6B7280',        // gray-500
          dark: '#9CA3AF',         // gray-400
        },
        border: {
          light: '#E5E7EB',        // gray-200
          dark: '#374151',         // gray-700
        },
        gray: colors.zinc,         // use Tailwind's zinc as gray
      },
    },
  },
  plugins: [],
};
