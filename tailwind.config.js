/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#F4F7F4',
          100: '#E4ECE3',
          200: '#C7D7C5',
          300: '#9FBCA0',
          400: '#759B76',
          500: '#527D54',
          600: '#3D6140',
          700: '#2F4B31',
          800: '#233825',
          900: '#19261A',
          950: '#0E170F',
        },
        cream: {
          50: '#FDFAF5',
          100: '#FAF6ED',
          200: '#F4EEDA',
          300: '#ECE2C5',
          400: '#E0D2AA',
          500: '#D2BE8B',
        },
        parchment: {
          DEFAULT: '#F8F5EE',
          dark: '#EFE9DC',
        },
        terracotta: {
          50: '#FAF1EE',
          100: '#F4DED6',
          200: '#EABDB0',
          300: '#DD9583',
          400: '#CE6C54',
          500: '#C4573B',
          600: '#B0442A',
          700: '#92341F',
          800: '#762B1C',
          900: '#612519',
        },
        espresso: {
          50: '#F6F4F3',
          100: '#E9E4E2',
          200: '#D6CBC7',
          300: '#BCAAA4',
          400: '#9F867F',
          500: '#7F6760',
          600: '#654F49',
          700: '#4D3B36',
          800: '#322522',
          900: '#1C1513',
          950: '#120D0C',
        },
        stone: {
          warm: '#DDD6CA',
          light: '#ECE7DE',
          muted: '#8E8578',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
