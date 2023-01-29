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
      'primary': "#434DA4",
      'secondary': "#28293F",
      'third': '#64ffda',
      'white': "#fff",
      'black':"#000",
      'transparent': "#fff0000",
    },
    extend: {},
  },
  plugins: [],
}