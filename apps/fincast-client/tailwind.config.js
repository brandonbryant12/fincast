// tailwind.config.mjs
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
