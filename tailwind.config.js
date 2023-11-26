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
        bgHero: "url('./assets/HomeImg/bgHero.jpg')",
        bgWave: "url('./assets/HomeImg/blckWave.jpeg')",
        bgCat: "url('./assets/HomeImg/blckCat.jpeg')",
        bgMoon: "url('./assets/HomeImg/blckMoon.jpg')",
        bgAmira: "url('./assets/HomeImg/amira.jpg')",
        bgBook: "url('./assets/FilmImg/kislap.jpg')",

        bg1: "url('./assets/HomeImg/hero2.jpg')",
        bg2: "url('./assets/HomeImg/hero4.jpg')",
        bg3: "url('./assets/HomeImg/hero3.jpg')",
        bg4: "url('./assets/HomeImg/hero5.jpg')",
        bg5: "url('./assets/HomeImg/hero1.jpg')",
        bg6: "url('./assets/HomeImg/bgHero.jpg')",
        bg7: "url('./assets/HomeImg/hero6.jpg')",
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