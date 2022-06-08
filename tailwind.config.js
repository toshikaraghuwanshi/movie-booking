module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  variants: {
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 3px 10px rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
