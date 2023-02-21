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
    screens: {
      'ft': '765px',
      'phone': '500px',
      'lg': '1070px',
      'bp': '930px',
    },
    colors: {
      'primary': "#232323",
      'secondary': "#6ee7b7",
      'third': '#e5e7eb',
      'fourth': '#404040',
      'fifth': "#333",
      'white': "#fff",
      'black':"#000",
      'transparent': "#fff0000",
    },
    fontSize: {
      'name': '4.5rem',
      'skills': '0.875rem',
      'title': '2.25rem',
      'date': '0.75rem',
      'company': '1.5rem',
      'content': '0.7rem',
    },
    extend: {},
  },
  plugins: [],
}