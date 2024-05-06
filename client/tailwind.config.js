/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafaff",
        secondary: "#7236dbff",
        orangeish: "#fe5d26ff",
        greenish: "#2cbb54ff",
        blueish: "#0b62faff",
        redish: "#ff0000ff",
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
