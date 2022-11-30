/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'caveat': ['Caveat', 'cursive']

      },
      colors: {
        'portfolio-gray': '#e6e6e6',
      },
    },
  },
  plugins: [],
}
