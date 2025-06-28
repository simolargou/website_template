module.exports = {
  darkMode: 'class', // 👈 important
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
