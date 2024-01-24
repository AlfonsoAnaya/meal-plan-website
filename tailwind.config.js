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
        white: "#fffcfb;",
        dark: "#100f0f",
        beige: "rgb(230, 228, 217)",
      },
      fontFamily: {
        primary: "'Josefin Sans', sans-serif",
        secondary: "'Young Serif', serif",
        tertiary: "'Dosis', sans-serif"
      }
    },
  },
  plugins: [],
}

