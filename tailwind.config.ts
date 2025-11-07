import type { Config } from 'tailwindcss'
export default {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ocean: '#0A2E3F', coral: '#FF7F66', shell: '#F7F3EF', charcoal: '#1F1F1F' },
      fontFamily: { heading: ['serif'], body: ['system-ui','sans-serif'] }
    },
  },
  plugins: [],
} satisfies Config
