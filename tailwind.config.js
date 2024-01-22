/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4385be",
        secondary: "#879a39",
        btn: "#68d463e8",
        white: "#fffcf8",
        beige: "#f2f0e5",
        dark: "#100f0f",
        beige: "#f2f0e5",
      },
      fontFamily: {
        primary: "'Josefin Sans', sans-serif",
        secondary: "'Young Serif', serif",
      }
    },
  },
  plugins: [],
}

