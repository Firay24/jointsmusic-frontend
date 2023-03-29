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
    fontFamily: {
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        "black-primary": '#1C1B20',
        "purple-primary": '#7F5283',
        "purple-dark": '#6F3E73',
        "red-primary": '#E32934'
      },
      backgroundImage: {
        "ticket": "url('./src/assets/images/imgTicket.png')"
      }
    },
  },
  plugins: [],
}