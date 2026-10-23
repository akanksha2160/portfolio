import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Advanced Dark Mode — Biomedical Research Aesthetic
        navy: '#0A0E27',          // deep navy-black
        'navy-light': '#1A1F3A',  // softer navy
        cyan: {
          primary: '#00D9FF',     // vibrant cyan (cell imaging)
          light: '#1a3f47',       // dark cyan tint
          glow: '#00F0FF',        // bright cyan glow
        },
        blue: {
          primary: '#0099FF',     // electric blue
          electric: '#00D9FF',    // bright electric cyan
          light: '#1a3f47',       // dark blue-tint
          dark: '#001a4d',        // deep dark blue
        },
        green: {
          primary: '#00CC88',     // bio green (life/growth)
          accent: '#00FF88',      // bright bio green
          light: '#1a4d33',       // dark green tint
        },
        accent: {
          purple: '#9D4EDD',      // research purple
          pink: '#FF006E',        // data visualization pink
        },
        neutral: {
          bg: '#050812',          // nearly black bg
          surface: '#0F1629',     // card surface
          'surface-2': '#141E2E', // raised tile
          text: '#E0E8FF',        // cool off-white text
          muted: '#8B95B3',       // muted cool gray
          border: '#1a2441',      // subtle border
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
