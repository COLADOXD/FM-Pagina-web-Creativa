/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Overpass", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(14, 88%, 65%)",

        secondary: "hsl(217, 12%, 63%)",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "hsl(213, 19%, 18%)",

        quinto: "hsl(216, 12%, 8%)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(14, 88%, 65%)",

        secondary: "hsl(217, 12%, 63%)",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "hsl(213, 19%, 18%)",

        quinto: "hsl(216, 12%, 8%)",
      }),
    },
  },
  plugins: [],
};
