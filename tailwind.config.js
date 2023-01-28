/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': "#ffff00",
      'secondary': "#f00020",
      'white': "#fff",
      'black':"#000",
      'transparent': "#fff0000",
    },
    extend: {},
  },
  plugins: [],
}