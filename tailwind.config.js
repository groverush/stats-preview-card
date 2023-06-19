import colors from "tailwindcss/colors"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "hsl(var(--primary-color))",
      accent: "hsl(var(--accent-color))",
      neutral: "hsl(var(--neutral-color))",
      neutral2: "hsl(var(--neutral2-color))",
      white: colors.white
    },
    fontFamily: {
      lexend: ["Lexend Deca", "sans-serif"]
    },
    extend: {}
  },
  plugins: []
}
