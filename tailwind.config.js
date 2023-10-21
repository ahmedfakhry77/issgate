/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        testing: "#935f07",
        primary: "#288694",
        black: " #1F1F1F",
        secondary: "#135487",
        schemePrimary: {
          blue: "#021DA5",
          gray: "#919191",
          black: "#0D0D0D",
          red: "#CF1020",
        },
        schemeSecondary: {
          green: "#11E3AB",
          sky: "#49B8BF",
          blue: "#134F88",
          gray: "#021ca50d",
        },
        schemeTertiary: {
          green: "#12FFC0",
          purple: "#0980A8",
          blue: "#002AFF",
        },
      },
    },
  },
  plugins: [],
};
