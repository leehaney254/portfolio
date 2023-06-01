/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#8C8C8C',
        'jet': '#0B0705',
      },
    },
  },
  plugins: [],
}

