/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
   mode: "jit",
  theme: {
        screens: {
      'mobile-s':{'min':'320px', 'max': '374px'}, 
      'mobile-m':{'min':'375px', 'max':'424px'}, 
      'mobile-l':{'min':'425px', 'max':'767px'},
      'tablet':{'min':'768px', 'max':'1023px'}, 
      'laptop':{'min':'1024px', 'max':'1439px'},  
      'laptop-l':{'min':'1440px', 'max':'2559px'},  
      'desktop':{'min':'2560px'}, 
    },
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