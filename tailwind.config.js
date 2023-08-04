/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
      rail: "Raleway, sans-serif",
      slab: "Roboto Slab, serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
