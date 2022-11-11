/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        Poppins: ["Overpass", "sans-serif"],
=======
        Poppins: ["Kumbh Sans", "sans-serif"],
>>>>>>> dca09a3a987602d3660b8a40237b741e2dc5aa87
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(14, 88%, 65%)",

<<<<<<< HEAD
        secondary: "hsl(217, 12%, 63%)",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "hsl(213, 19%, 18%)",

        quinto: "hsl(216, 12%, 8%)",
=======
        secondary: "hsl(238, 29%, 16%)",

        terceary: "hsl(237, 12%, 33%)",

        cuarto: "hsl(240, 6%, 50%)",
>>>>>>> dca09a3a987602d3660b8a40237b741e2dc5aa87
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

<<<<<<< HEAD
        primary: "hsl(14, 88%, 65%)",

        secondary: "hsl(217, 12%, 63%)",

        terceary: "hsl(216, 12%, 54%)",

        cuarto: "hsl(213, 19%, 18%)",

        quinto: "hsl(216, 12%, 8%)",
=======
        primary: "hsl(273, 75%, 66%)",

        secondary: "hsl(240, 73%, 65%)",

        terceary: "hsl(34, 97%, 64%)",

        cuarto: "hsl(212, 86%, 64%)",

        palo: "hsl(240, 6%, 50%)",
>>>>>>> dca09a3a987602d3660b8a40237b741e2dc5aa87
      }),
    },
  },
  plugins: [],
};
