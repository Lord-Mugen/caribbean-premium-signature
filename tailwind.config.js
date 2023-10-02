/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#919191",
        light__gray: "#9a9a9a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      width: {
        50: "50rem",
        4: "1rem",
      },
      height: {
        "112vh": "112vh",
      },
      padding: {
        3: "3px",
        1.7: "1.75rem",
      },
      margin: {
        half: "50%",
      },
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      green: "#13ce66",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
