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
        dark: "#100f0f",
      },
      fontFamily: {
        primary: "Josefin Sans', sans-serif"
      }
    },
  },
  plugins: [],
}

