/** @type {import('tailwindcss').Config} */
import { heroui } from '@heroui/react';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 👈 Enables class-based dark mode

  theme: {
    extend: {},
  },

  plugins: [
    heroui({
      themes: {}, // You can add custom themes here later
    }),
  ],
};
