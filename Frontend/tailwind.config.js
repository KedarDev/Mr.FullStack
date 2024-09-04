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
      // you can use max to effect element from device to device
      // defult screens
      // xs: "450px",
      // sm: "640px",
      // md: "768px",
      // lg: "1024px",
      // xl: "1280px",
      // "2xl": "1536px",
      // 'mobile': {'min': '640px', 'max': '767px'},
      // 'tablet': {'min': '768px', 'max': '1023px'},
      // 'laptop': {'min': '1024px', 'max': '1279px'},
      // 'desktop': {'min': '1280px', 'max': '1535px'},
      // '': {'min': '1536px'},
      // 'mobile-s':{'min':'320px', 'max': '374px'},
      // 'mobile-m':{'min':'375px', 'max':'424px'},
      // 'mobile-l':{'min':'425px', 'max':'767px'},
      // 'tablet':{'min':'768px', 'max':'1023px'},
      // 'laptop':{'min':'1024px', 'max':'1439px'},
      // 'laptop-l':{'min':'1440px', 'max':'2559px'},
      // 'desktop-s':{'min': '2045px', 'max':'2559px'},
      // 'desktop':{'min':'2560px'},
      
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
