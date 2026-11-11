import type { Config } from 'tailwindcss';

const slate = {
  50: '#F1F4F9',
  100: '#E3E8F1',
  200: '#CBD3E1',
  300: '#B7C2D6',
  400: '#9AA8BF',
  500: '#7D8CA6',
  600: '#5F6E88',
  700: '#46536B',
  800: '#2A344A',
  900: '#1A2233',
  950: '#131A28',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Midnight amber, 60-30-10. Amber is the ONLY accent: buttons and key links.
        accent: {
          DEFAULT: '#F5A524',
          hover: '#FFB93D',
          ink: '#0B0F19',
        },
        cyber: {
          bg: '#0B0F19',
          surface: '#111724',
          card: '#111724',
          elevated: '#1A2233',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.25)',
        },
        // Legacy "neon" names now resolve to quiet slate so labels and icons stop competing with the buttons.
        neon: {
          cyan: '#B7C2D6',
          violet: '#B7C2D6',
          emerald: '#10B981',
          amber: '#F5A524',
          rose: '#F43F5E',
        },
        // Old blue/violet accent ramps remapped to a neutral slate ramp.
        cyan: slate,
        sky: slate,
        violet: slate,
        indigo: slate,
        // Tailwind's own amber/orange were still used for labels, icons, badges and the rating
        // stars (about two dozen places, none of them an action). Remapped so `accent` is the only amber.
        amber: slate,
        orange: slate,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'hero-radial': 'radial-gradient(circle at 50% 0%, rgba(183, 194, 214, 0.08), rgba(183, 194, 214, 0.04), transparent 70%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px -8px rgba(183, 194, 214, 0.35)',
        'neon-violet': '0 0 25px -5px rgba(183, 194, 214, 0.4)',
        'neon-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'cyber-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
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
