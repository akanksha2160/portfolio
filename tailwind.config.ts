import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Forest Bio palette — semantic names kept stable; values are emerald/sage
        navy: '#1B4332',          // deep emerald (headings, dark sections)
        'navy-light': '#2D5A45',
        blue: {
          primary: '#2D6A4F',     // rich green (links, buttons, accents)
          electric: '#40916C',
          light: '#D8F3DC',       // light sage tint (badges, backgrounds)
        },
        cyan: {
          DEFAULT: '#52B788',     // sage accent
          light: '#D8F3DC',
          glow: '#74C69D',
        },
        teal: {
          DEFAULT: '#40916C',
        },
        neutral: {
          bg: '#F7F9F4',          // warm off-white
          surface: '#FFFFFF',
          text: '#1A1A1A',        // near-black
          muted: '#5A7060',       // readable muted green
          border: '#E3EAE1',      // green-tinted border
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
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
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
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(8px)' },
          '50%': { opacity: '1', filter: 'blur(12px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
