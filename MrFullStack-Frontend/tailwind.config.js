/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
   mode: "jit",
  theme: {
    extend: {
      colors: {
        // Primary Secondary Tertiary
        "theme-black": "var(--theme-black)",
        "theme-dark-grey": "var(--theme-dark-grey)",
        "theme-grey-100": "var(--theme-grey-100)",
        "theme-grey-200": "var(--theme-grey-200)",
        "theme-light-grey": "var(--theme-light-grey)",
        "theme-white": "var(--theme-white)",
        boxShadow: {
          card: "0px 35px 120px -15px #808080",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobg.png')",
        },
      },
    },
  },
  plugins: [],
};