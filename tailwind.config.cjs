/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#70AFCE",
        secondary: "#A5DEF1",
        tertiary: "#3b7b9a",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#fff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};
