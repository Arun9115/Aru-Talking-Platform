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
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.92)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: 0.7 },
          '70%': { transform: 'scale(1.5)', opacity: 0 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
        fadeIn: 'fadeIn 0.6s ease-out both',
        scaleIn: 'scaleIn 0.5s ease-out both',
        slideInLeft: 'slideInLeft 0.6s ease-out both',
        slideInRight: 'slideInRight 0.6s ease-out both',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'wave-1': 'wave 1.2s ease-in-out 0s infinite',
        'wave-2': 'wave 1.2s ease-in-out 0.15s infinite',
        'wave-3': 'wave 1.2s ease-in-out 0.3s infinite',
        'wave-4': 'wave 1.2s ease-in-out 0.45s infinite',
      },
    },
  },
  plugins: [],
};
