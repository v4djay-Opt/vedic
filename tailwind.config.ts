import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF6B00',
        deepGreen: '#2D4A3E',
        cream: '#FFF8F0',
        ochre: '#C8860A',
        sage: '#E8F5E9',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'ui-sans-serif', 'system-ui'],
        devanagari: ['var(--font-noto-sans-devanagari)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};

export default config;
