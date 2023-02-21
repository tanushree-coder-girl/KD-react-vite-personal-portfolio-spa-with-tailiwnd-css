/*** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        ratingStarColor: "var(--rating-star)"
      },
      backgroundImage: {
        lightBgColor: "var(--main-bg-color)",
      }
    },
  },
  plugins: [],
};
