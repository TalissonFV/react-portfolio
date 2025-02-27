import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f06543',
        'secondary': '#f09d51',
        'light': '#e8e9eb',
        'beige': '#e0dfd5',
        'dark': '#000000'
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif']
      },
      spacing: {
        'section': '4rem',
      },
      animation: {
        'letter-pop': 'letterPop 0.5s ease-in-out both',
        'splash-fade': 'splashFade 3s ease-in-out forwards'
      },
      keyframes: {
        letterPop: {
          '0%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)' }
        },
        splashFade: {
          '0%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config