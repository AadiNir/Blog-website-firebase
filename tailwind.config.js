/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'false',
  theme: {
    extend: {
      fontFamily:{
        primary : ['Bebas Neue'],
        Headlines:['Questrial'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/background1.webp')"
    }
    },
  },
  plugins: [],
}
