/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: ["class"],
  assetsInclude: ["**/*.mov"],
  mode: "jit",
  theme: {
      
    // OVERRIDE DEFULT SCREENS
    screens: {
      'mobile-s': '320px', // sm
      // => @media (min-width: 320px) { ... }

      'mobile': '640px', // sm
      // => @media (min-width: 640px) { ... }

      'tablet': '768px', // md
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px', // lg
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px', // xl
      // => @media (min-width: 1280px) { ... }

      'wideScreen': '1536px', // 2xl
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      // ADD TO DEFUALT SCREENS
      backgroundImage: {
        "hero-pattern": "url('../src/assets/herobg.png')",
        iPhoneProMax: "url('../src/assets/iPhone15ProMax.png')",
        iPad: "url('../src/assets/iPad.png')",
      },
      colors: {
        // Primary Secondary Tertiary
        boxShadow: {
          card: "0px 35px 120px -15px #808080",
        },
      },
    },
  },
  plugins: [],
};
