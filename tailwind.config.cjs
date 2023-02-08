/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        colorloop: 'colorloop 6s infinite',
        colorloop2: 'colorloop2 6s infinite',
        typing: 'typing 6s infinite',
        show: 'show 6s'
      },
      keyframes: {
        colorloop: {
          '0%': {
            background: '#FFB6C1'
          },
          '50%': {
            background: '#B0E0E6'
          },
          '100%': {
            background: '#98FF98'
          }
        },
        colorloop2: {
          '0%': {
            background: '#E6E6FA'
          },
          '50%': {
            background: '#BCE5C5'
          },
          '100%': {
            background: '#ADD8E6'
          }
        },
        typing: {
          '0%': {
            width: '0',
          },
          '50%': {
            width: '187px',
          },
          '100%': {
            width: '187px',
          },
        }
      },
    },
  },
  plugins: [],
}