/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/css/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#241E4E",
        tertiary: "#81F499",
      }),
      borderColor: {
        primary: "#CC2D4A",
        secondary: "#241E4E",
        tertiary: "#81F499",
      },
      textColor: {
        primary: "#CC2D4A",
        secondary: "#241E4E",
        tertiary: "#81F499",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      margin: {
        center: "0 auto",
      },
    },
  },
  plugins: [],
};
