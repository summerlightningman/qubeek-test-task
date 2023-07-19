const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue}",
  ],
  theme: {
    colors: {
      violet: colors.violet,
      red: colors.red,
      white: colors.white,
      blue: colors.blue,
      'placeholder-gray': '#f1f0ee',
      'placeholder-gray-active': '#e8e7e5',
      'placeholder-text': '#a1a09e'
    }
  },
  plugins: [],
}