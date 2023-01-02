/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gaegu: ['Gaegu', ...defaultTheme.fontFamily.sans],
        Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        Overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        Poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        RobotoSlab: ['Robot Slab', ...defaultTheme.fontFamily.sans]  
      }
    },
  },
  plugins: [],
}
