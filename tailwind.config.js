/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'590px',
        'md':'900px',
        'lg':'1596px'
      },
      colors: {
        cardbg : '#161616'
      }
    },
  },
  plugins: [],
} 
