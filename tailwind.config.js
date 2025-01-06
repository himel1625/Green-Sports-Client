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
        // Color: '#2b6cb0',
      },
    },
  },
  plugins: [require('daisyui')],
};
