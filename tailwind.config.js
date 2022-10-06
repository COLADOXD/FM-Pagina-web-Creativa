/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "rgb(112, 140, 145)",
        secondary: "rgb(5, 71, 82)",
        terceary: "rgb(0, 175, 245)",
        cuarto: "#788e95",
      }),

      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "rgb(112, 140, 145)",
        secondary: "rgb(5, 71, 82)",
        terceary: "rgb(0, 175, 245)",
        cuarto: "#1d4651",
        quinto: "#ededed",
        sexto: "#dddddd",
      }),
    },
  },
  plugins: [],
};
