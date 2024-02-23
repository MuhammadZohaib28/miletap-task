/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      gelasio: ["'Gelasio'", "serif"],
    },
  },
  plugins: [],
};
