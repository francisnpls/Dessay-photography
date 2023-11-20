/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        antic: ["Antic Didone", "serif"],
        shippori: ["Shippori Mincho", "serif"],
        lilita: ["Lilita One", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        bgHero: "url('./assets/bgHero.jpg')",
        bgWave: "url('./assets/blckWave.jpeg')",
        bgCat: "url('./assets/blckCat.jpeg')",
        bgMoon: "url('./assets/blckMoon.jpg')",
        bgAmira: "url('./assets/amira.jpg')",

        bg1: "url('./assets/bgHero.jpg')",
        bg2: "url('./assets/Hero1.jpg')",
        bg3: "url('./assets/hero2.jpg')",
        bg4: "url('./assets/hero3.jpg')",
        bg5: "url('./assets/hero4.jpg')",
        bg6: "url('./assets/hero5.jpg')",
        bg7: "url('./assets/hero6.jpg')",
      },
    },
    screens: {
      xx: "350px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};