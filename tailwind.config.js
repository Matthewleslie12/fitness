/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#192126",
        neon: "#BBF246",
        lightGray: "#8B8F92",
        middleGray: "#5E6468",
        darkGray: "#384046",
        lightPurple: "#A48AED",
        red: "#ED4747",
        lightOrange: "#FCC46F",
        lightBlue: "#95CCE3",
        secondWhite: "#FFFFFF",
      },
      fontFamily: {
        primary: "Lato",
      },
    },
  },
  plugins: [],
};
