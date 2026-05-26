import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B2A4A',
        'navy-light': '#2A3A5A',
        blue: {
          primary: '#3B7DD8',
          light: '#DBEAFE',
        },
        neutral: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          text: '#111827',
          muted: '#6B7280',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'scroll-down': 'scroll-down 2s infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'typewriter': 'typewriter 3.5s steps(40,end) 1s forwards',
      },
      keyframes: {
        'scroll-down': {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'translateY(8px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
