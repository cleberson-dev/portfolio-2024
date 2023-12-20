import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typing: {
          '0%, 15%': { width: '0' },
          '50%, 100%': { width: '100%' },
        },
        blinkCaret: {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'blueviolet' },
        }
      },
      animation: {
        typing: 'typing 3s steps(3) infinite, blinkCaret .5s step-end infinite',
      },
    },
  },
  plugins: [],
}
export default config
