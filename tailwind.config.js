/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        'wave-1': 'wave 1.2s ease-in-out 0s infinite',
        'wave-2': 'wave 1.2s ease-in-out 0.15s infinite',
        'wave-3': 'wave 1.2s ease-in-out 0.3s infinite',
        'wave-4': 'wave 1.2s ease-in-out 0.45s infinite',
      },
    },
  },
  plugins: [],
};
