/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Kumbh Sans", "sans-serif"],
      },
      textColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(14, 88%, 65%)",

        secondary: "hsl(238, 29%, 16%)",

        terceary: "hsl(237, 12%, 33%)",

        cuarto: "hsl(240, 6%, 50%)",
      }),
      backgroundColor: (theme) => ({
        ...theme("colors"),

        primary: "hsl(273, 75%, 66%)",

        secondary: "hsl(240, 73%, 65%)",

        terceary: "hsl(34, 97%, 64%)",

        cuarto: "hsl(212, 86%, 64%)",

        palo: "hsl(240, 6%, 50%)",
      }),
    },
  },
  plugins: [],
};
