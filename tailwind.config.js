module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00417E',
        cinza: '#f4f4f4',
        lightBlue: '#cfeeff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
