const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  theme: {
    colors: {
      ...colors,
      'placeholder-gray': '#f1f0ee',
      'placeholder-gray-active': '#e8e7e5',
      'placeholder-text': '#a1a09e'
    }
  },
  plugins: [],
}