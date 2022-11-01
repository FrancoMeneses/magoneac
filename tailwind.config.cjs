/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'nav': ['Poppins'],
      'ini': ['Prompt'],
    },
    extend: {
      colors: {
        'ye': '#4f4f4e',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
