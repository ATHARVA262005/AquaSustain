/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Example color 1
        secondary: '#9333EA', // Example color 2
        accent: '#F97316', // Example color 3
        background: '#F3F4F6', // Example color 4
      },
    },
  },
  plugins: [],
}
