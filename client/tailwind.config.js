/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: { DEFAULT: "#7236db", dark: "#571cbd" },
        orangeish: { DEFAULT: "#fe5d26", dark: "#d14a1d" },
        greenish: { DEFAULT: "#2cbb54", dark: "#22ab49" },
        blueish: { DEFAULT: "#0b62fa", dark: "#0648ba" },
        redish: { DEFAULT: "#ff0000", dark: "#bd0808" },
      },
      fontFamily: {
        custom: "Poppins",
      },
      borderRadius: {
        normal: "10px",
      },
      screens: {
        xs: "576px",

        sm: { min: "576px", max: "768px" },

        md: { min: "768px", max: "992px" },

        lg: { min: "992px", max: "1200px" },

        xl: "1200px",

        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
