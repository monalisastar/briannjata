import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // ✅ Enable class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // ✅ Blue accent for hover + highlight
      },
      backgroundImage: {
        glass: 'linear-gradient(to right, rgba(15,23,42,0.6), rgba(15,23,42,0.3))', // ✅ For glassmorphic effects
      },
      boxShadow: {
        'blue-glow': '0 0 30px rgba(59, 130, 246, 0.4)', // ✅ For glowing elements
      },
    },
  },
  plugins: [],
};

export default config;

