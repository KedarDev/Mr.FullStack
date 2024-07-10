/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

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
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // 'mobile-s':{'min':'320px', 'max': '374px'},
      // 'mobile-m':{'min':'375px', 'max':'424px'},
      // 'mobile-l':{'min':'425px', 'max':'767px'},
      // 'tablet':{'min':'768px', 'max':'1023px'},
      // 'laptop':{'min':'1024px', 'max':'1439px'},
      // 'laptop-l':{'min':'1440px', 'max':'2559px'},
      // 'desktop-s':{'min': '2045px', 'max':'2559px'},
      // 'desktop':{'min':'2560px'},
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
