/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fafafaff",
        secondary: "#6a38c2ff",
        orangeish: "#fe5d26ff",
        greenish: "#2cbb54ff",
        blueish: "#0b62faff",
        redish: "#ff0000ff",
      },
      fontFamily: {
        custom: "Poppins",
      },
      borderRadius :{
        "normal": "8px",
      }
    },
  },
  plugins: [],
};
