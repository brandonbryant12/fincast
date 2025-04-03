import { defineConfig } from 'tailwindcss';
import uiTailwindConfig from '../../packages/ui/tailwind.config.js';

export default defineConfig({
  presets: [uiTailwindConfig],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});