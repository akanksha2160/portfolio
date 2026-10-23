import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#111827',
        'navy-light': '#1F2937',
        cyan: { primary: '#0F766E', light: '#E6F4F1', glow: '#115E59' },
        blue: { primary: '#0F766E', electric: '#0F766E', light: '#E6F4F1', dark: '#134E4A' },
        green: { primary: '#0F766E', accent: '#14B8A6', light: '#E6F4F1' },
        neutral: {
          bg: '#FAFAF9',
          surface: '#FFFFFF',
          'surface-2': '#F3F4F2',
          text: '#111827',
          muted: '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
