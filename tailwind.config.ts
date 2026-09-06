import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          surface: '#080e1a',
          card: '#0f172a',
          elevated: '#1e293b',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(0, 240, 255, 0.35)',
        },
        neon: {
          cyan: '#00F0FF',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'hero-radial': 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.12), rgba(139, 92, 246, 0.06), transparent 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.4)',
        'neon-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'neon-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
