/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    keyframes: {
      'slide-in': {
        '100%': { opacity: 1 },
        '0%': { opacity: 0 },
      },
      'slide-out': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      gisjuz: {
        '0%': {
          opacity: '0',
          transform: 'translateY(-10px)',
        },
        '100%': {
          opacity: '1',
          transform: 'none',
        },
      },
    },
    animation: {
      'slide-out': 'slide-out 1s forwards',
      'slide-in': 'slide-in 1s forwards',
      'reveal-logo': '1000ms ease 0ms 1 normal backwards running gisjuz',
      'reveal-description':
        '1200ms ease 400ms 1 normal backwards running gisjuz',
      'reveal-timer': '1200ms ease 800ms 1 normal backwards running gisjuz',
      'reveal-button': '1800ms ease 1000ms 1 normal backwards running gisjuz',
    },
    extend: {
      colors: {
        'main-color': '#162C4E',
        'secondary-black': '#00000080',
        'secondary-white': '#ffffff80',
        'main-red': '#DF2224',
        'input-gray': '#00000099',
      },
      transformOrigin: {
        accordion:
          'transform:  translateX(-50%) translateY(-50%) rotate(-90deg)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
