import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1A237E', // Deep Blue
          gold: '#C9A054', // Heritage Gold
          white: '#FAFBFC',
          hover: '#3949AB',
          pale: '#E8EAF6',
          goldLight: '#E4D4B4',
        },
        accent: {
          emerald: '#00695C',
          amber: '#FF8F00',
          purple: '#6A1B9A',
        },
        functional: {
          success: '#2E7D32',
          error: '#C62828',
          warning: '#EF6C00',
          info: '#1565C0',
        },
        neutral: {
          dark: '#37474F',
          medium: '#78909C',
          light: '#CFD8DC',
        },
        background: {
          pure: '#FFFFFF',
          subtle: '#F5F7FA',
          section: '#ECEFF1',
          dark: '#263238',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-crimson)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      spacing: {
        '2xs': '2px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px',
      },
      borderRadius: {
        button: '10px',
        card: '16px',
        input: '10px',
        badge: '6px',
      },
      boxShadow: {
        button: '0 4px 12px rgba(26, 35, 126, 0.15)',
        card: '0 2px 16px rgba(0, 0, 0, 0.06)',
        premium: '0 3px 20px rgba(201, 160, 84, 0.08)',
        elevation: '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #C9A054, #B8935A)',
      },
    },
  },
  plugins: [],
}

export default config
