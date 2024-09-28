/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],  // Default sans font
        serif: ['Lora', 'serif'],        // Default serif font
        // Add more custom fonts as needed
      },
      colors: {
        customColor: '#e7dfd8',
        cc2: '#f2efed', // Add your custom color
      },
    },
  },
  plugins: [],
}

