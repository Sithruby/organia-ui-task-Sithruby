/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e293b',
          800: '#1a2332',
          900: '#0f172a',
        },
        burgundy: {
          600: '#8b1538',
          700: '#7d1f3e',
        },
        slate: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
        }
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}