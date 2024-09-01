/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#eae2c8', // Custom background color
        'menu-hover': '#704C22', // Menu hover background color
      },
    },
  },
  plugins: [],
}

