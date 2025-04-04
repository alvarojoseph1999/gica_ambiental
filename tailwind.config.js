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
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
  plugins: [PrimeUI],
};
