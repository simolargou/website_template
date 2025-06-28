module.exports = {
  darkMode: 'class', // 👈 important
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chelsea: ['"Chelsea Market"', 'cursive'],
        atkinson: ['"Atkinson Hyperlegible Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
