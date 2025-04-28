/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import PrimeUI from "tailwindcss-primeui";

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        azul_primary: "#A3A5F0", // Definiendo el color personalizado como 'primary'
        azul_secondary: "#235AF4", // Definiendo el color personalizado como 'secondary'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "fade-zoom-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.95)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "fade-zoom-in": "fade-zoom-in 0.6s ease-out forwards",
        "fade-zoom-out": "fade-zoom-out 0.6s ease-in forwards",
      },
    },
  },
  plugins: [],
  plugins: [PrimeUI],
};
