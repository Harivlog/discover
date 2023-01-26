/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        primary_clr : '#6063fb',
        border_clr : '#9b9dfd',
        white_clr : '#ffffff',
        
        input_field : '#f7f7ff'
      },
    },
  },
  plugins: [],
}