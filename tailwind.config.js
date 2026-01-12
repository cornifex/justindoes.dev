/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'dark': '#555',
        'primary': '#003153',
        'secondary': '#F5F0E1',
      },
      fontFamily: {
        'main': ['Source Code Pro', 'monospace'],
      },
      keyframes: {
        cursor: {
          '0%, 40%': { color: '#003153', backgroundColor: 'white' },
          '50%, 90%': { color: 'white', backgroundColor: '#003153' },
          '100%': { color: '#003153', backgroundColor: 'white' },
        }
      },
      animation: {
        'cursor': 'cursor 1s infinite',
      }
    },
  },
  plugins: [],
}
