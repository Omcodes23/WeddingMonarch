import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          gold: '#FFD700',
          darkGold: '#B8860B',
          maroon: '#800020',
          cream: '#FFF8DC',
          rose: '#C9A07C',
          burgundy: '#6B1529',
        }
      },
      fontFamily: {
        'gujarati': ['Noto Sans Gujarati', 'Mukta Gujarati', 'sans-serif'],
        'decorative': ['Cinzel', 'serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
