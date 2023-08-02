/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
