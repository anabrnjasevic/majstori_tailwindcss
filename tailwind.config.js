/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
  },
  fontFamily: ['Nothing You Could Do, cursive'],
  plugins: [],
  container: {
    center: true,
  },
}

