/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Urbanist, sans-serif",
      },
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      screens: {
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
