/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': '1210px',
      },
    },
    fontFamily: {
      'primary': '"DM Serif Display", serif',
      'secondary': '"Jost", sans-serif',
    }
  },
  plugins: [],
}