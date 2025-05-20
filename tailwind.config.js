/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import PrimeUI from "tailwindcss-primeui";

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "320px", // Nuevo breakpoint para dispositivos muy pequeños
      sm: "640px", // Breakpoint predeterminado
      md: "768px", // Breakpoint predeterminado
      lg: "1024px", // Breakpoint predeterminado
      xl: "1280px", // Breakpoint predeterminado
      "2xl": "1536px", // Breakpoint predeterminado
      celular: "1220px", // Nuevo breakpoint personalizado
    },
    extend: {
      colors: {
        azul_primary: "#A3A5F0", // Definiendo el color personalizado como 'primary'
        azul_secondary: "#235AF4", // Definiendo el color personalizado como 'secondary'
      },
      animation: {
        "fade-zoom-in-left": "fadeZoomInLeft 0.6s ease-out forwards",
        "fade-zoom-in-up": "fadeZoomInUp 0.6s ease-out forwards",
        "fade-zoom-in-right": "fadeZoomInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeZoomInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        fadeZoomInUp: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeZoomInRight: {
          "0%": { opacity: "0", transform: "translateX(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
  plugins: [PrimeUI],
};
