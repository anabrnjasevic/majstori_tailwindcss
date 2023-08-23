/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    },
  
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
  
  fontFamily: ['Nothing You Could Do, cursive'],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  container: {
    center: true,
  },
}

