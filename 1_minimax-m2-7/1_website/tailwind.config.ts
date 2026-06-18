import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A0A0F',
          surface: '#111118',
          border: '#1E1E2E',
          indigo: '#6C63FF',
          teal: '#00D4AA',
          text: '#F0EFF8',
          muted: '#6B6A80',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)'],
        dm: ['var(--font-dm-sans)'],
        mono: ['var(--font-jetbrains)'],
      },
      animation: {
        'pulse-bar': 'pulseBar 1s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 4s ease infinite',
      },
      keyframes: {
        pulseBar: {
          '0%, 100%': { height: '8px' },
          '50%': { height: '20px' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;