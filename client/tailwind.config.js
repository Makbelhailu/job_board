/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: { DEFAULT: "#7236db", dark: "#571cbd", 100: "#7236db22" },
        orangeish: { DEFAULT: "#fe5d26", dark: "#d14a1d", 100: "#fe5d2622" },
        greenish: { DEFAULT: "#2cbb54", dark: "#22ab49", 100: "#2cbb5422" },
        blueish: { DEFAULT: "#0b62fa", dark: "#0648ba", 100: "#0b62fa22" },
        redish: { DEFAULT: "#ff0000", dark: "#bd0808", 100: "#ff000022" },
      },
      aspectRation: {
        "4/3": "4 / 3",
      },
      fontFamily: {
        custom: "Poppins",
      },
      borderRadius: {
        normal: "10px",
      },
      screens: {
        xs: "480px",

        //   sm: { min: "576px", max: "768px" },

        //   md: { min: "768px", max: "992px" },

        //   lg: { min: "992px", max: "1200px" },

        //   xl: "1200px",

        //   "2xl": "1400px",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
