/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(36, 131, 123)",
        secondary: "rgb(218, 112, 44)",
        tertiary: "#fcba03",
        quatertiary: "#d15036",
        btn: "#68d463e8",
        white: "rgb(255, 253, 252)",
        dark: "rgb(54, 54, 51)",
        darker: "rgb(16, 15, 15)",
        beige: "rgb(240, 239, 235)",
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

