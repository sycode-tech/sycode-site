/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Urbanist, sans-serif"
      },
      backgroundImage: {
        hero: "url('/bg/hero.jpg')",
        gradient: "linear-gradient(135deg,  #0A0127 0%, #170042 60%, #1F0042 100%)"
      },
      screens: {
        xl: "1200px",
        "2xl": "1400px"
      },
      maxWidth: {
        "7xl": "90rem"
      },
      boxShadow: {
        lg: "-15px -10px 26px #bebebe, 10px 10px 26px #ffffff",
        xl: "-15px -10px 66px #bebebe, 10px 10px 66px #ffffff"
      }
    }
  },
  plugins: []
};
