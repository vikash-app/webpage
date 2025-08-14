/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff385c',
        accent: '#008489',
        surface: '#f7f7f7',
        darkSurface: '#292929',
      },
      fontFamily: {
        sans: ["Nunito", "Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
