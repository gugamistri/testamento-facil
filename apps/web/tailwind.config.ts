import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Brand Colors
        brand: {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          // Legacy aliases for backward compatibility during refactor
          gold: 'rgb(var(--brand-secondary) / <alpha-value>)',
          hover: 'rgb(var(--brand-primary) / <alpha-value>)', // Simplified
          white: '#F8FAFC', // Keep static for now
          pale: '#FEF3C7',
          goldLight: '#FDE68A',
        },

        // Semantic Functional Colors
        functional: {
          success: 'rgb(var(--state-success) / <alpha-value>)',
          error: 'rgb(var(--state-error) / <alpha-value>)',
          warning: 'rgb(var(--state-warning) / <alpha-value>)',
          info: 'rgb(var(--state-info) / <alpha-value>)',
        },

        // Semantic Backgrounds
        background: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--bg-tertiary) / <alpha-value>)',
          // Legacy aliases
          pure: 'rgb(var(--bg-primary) / <alpha-value>)',
          subtle: 'rgb(var(--bg-secondary) / <alpha-value>)',
          section: 'rgb(var(--bg-tertiary) / <alpha-value>)',
          dark: '#000000',
        },

        // Semantic Text
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
          inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
        },

        // Semantic Borders
        border: {
          primary: 'rgb(var(--border-primary) / <alpha-value>)',
          secondary: 'rgb(var(--border-secondary) / <alpha-value>)',
          focused: 'rgb(var(--border-focused) / <alpha-value>)',
        },

        // Legacy Neutral (re-mapped to semantic or static palette)
        neutral: {
          dark: 'rgb(var(--text-primary) / <alpha-value>)', // Dynamic mapping
          medium: 'rgb(var(--text-secondary) / <alpha-value>)',
          light: 'rgb(var(--text-tertiary) / <alpha-value>)',
          900: '#0F172A',
          800: '#1E293B',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50: '#F8FAFC',
        },

        accent: {
          emerald: '#10B981',
          amber: '#F59E0B',
          purple: '#8B5CF6',
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
        button: 'var(--radius-button)',
        card: 'var(--radius-card)',
        input: 'var(--radius-input)',
        badge: '6px',
      },
      boxShadow: {
        button: '0 4px 12px rgba(var(--brand-primary), 0.15)',
        card: '0 2px 16px rgba(0, 0, 0, 0.06)',
        premium: '0 3px 20px rgba(var(--brand-secondary), 0.15)',
        elevation: '0 4px 24px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, rgb(var(--brand-secondary)), #B8935A)',
      },
    },
  },
  plugins: [],
}

export default config
