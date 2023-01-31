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
      'primary': "#333",
      'secondary': "#6ee7b7",
      'third': '#e5e7eb',
      'white': "#fff",
      'black':"#000",
      'transparent': "#fff0000",
    },
    fontSize: {
      'name': '4.5rem'
    },
    extend: {},
  },
  plugins: [],
}