/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        Color: '#c9241a',
        // Color: '#9538e2',
      },
    },
  },
  plugins: [require('daisyui')],
};
