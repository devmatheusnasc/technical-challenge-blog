/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
