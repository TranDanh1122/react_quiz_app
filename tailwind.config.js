/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "puple": "##A729F5",
        "dark_31": "#313E51",
        "dark_3B": "#3B4D66",
        "dark_62": "#626C7F",
        "blue": "#ABC1E1",
        "gray": "#F4F6FA",
        "green": "#26D782",
        "red": "#EE5454"
      },
      screens: {
        mb: { min: "0", max: "767px" },
        tb: { min: "768px", max: "1023px" }
      }
    },
  },
  plugins: [],
}

