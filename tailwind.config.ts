import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { accent: '#FD7C26', 'accent-dark': '#D96A1F', ink: '#1C1B19', cream: '#F6F3EE' },
      fontFamily: { sans: ['Roboto', 'sans-serif'] },
    },
  },
  plugins: [],
}
export default config
