/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1f37',
        'card-bg': '#1f2641',
        'metric-bg': '#252b48',
      },
    },
  },
  plugins: [],
}