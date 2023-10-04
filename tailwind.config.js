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
        Cinzel: ["Cinzel Decorative", "cursive"],
        aribau: ["Aribau", "sans-serif"],
        sonnambula: ["Sonnambula", "sans-serif"],
        Tangerine: ["Tangerine", "cursive"],
      },
      width: {
        50: "50rem",
        4: "1rem",
        19: "19rem",
      },
      height: {
        "112vh": "112vh",
        "70vh": "70vh",
        "95vh": "95vh",
        "90%": "90%",
        200: "200px",
        330: "330px",
        360: "360px",
        420: "420px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
      },
      top: {
        51: "60%",
      },
      lineHeight: {
        1: "1rem",
        4.1: "4rem",
        7: "7rem",
      },
      padding: {
        3: "3px",
        1.7: "1.75rem",
        5: "5rem",
        8: "8rem",
      },
      margin: {
        half: "50%",
      },
      fontSize: {
        3.5: "3.5rem",
        3.1: "3rem",
        4: "4rem",
        5: "5rem",
        6: "6rem",
        7: "7rem",
        8: "8rem",
        10: "10rem",
        1.8: "1.8rem",
        1.3: "1.3rem",
        2.5: "2.5rem",
      },
    },
    screens: {
      sm: "320px",
      x2sm: "425px",
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
