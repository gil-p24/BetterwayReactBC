/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      sm: '640px',
      // (min-width: 640px)
      
      md: '760px',

      lg: '1024px',
      
      xl: '1280px',
// number need ''
      '2xl': '1536px'
      
    },
  },
  plugins: [],
}
