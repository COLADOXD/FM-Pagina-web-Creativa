/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: (theme) => ({
        ...theme("colors"),
        primary: "#4eacef",
        secondary: "#8FA206",
        terceary: "#61AEC9",
      }),
    },
  },
  plugins: [],
};
