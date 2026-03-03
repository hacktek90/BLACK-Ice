import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#09090b',
        'text-main': '#ffffff',
        'text-muted': '#a1a1aa',
        'accent-blue': '#3b82f6',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backdropFilter: {
        'blur-20': 'blur(20px)',
        'blur-10': 'blur(10px)',
      },
    },
  },
  plugins: [],
}
export default config
